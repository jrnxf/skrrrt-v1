import {
  ERROR_TYPES,
  MuxSignedUrlResponse,
  Post,
  StgSet,
  StgSubmission,
  VIDEO_TYPES,
} from '@/models'
import { LoggerService } from '@/services'
import Mux, { Asset, Upload } from '@mux/mux-node'
import aws from 'aws-sdk'
import { promises as fs } from 'fs'
import isJpg from 'is-jpg'
import path from 'path'
import sharp from 'sharp'
import { getRepository, Repository } from 'typeorm'

export class MediaService {
  static s3: aws.S3 = new aws.S3({
    signatureVersion: 'v4',
    region: process.env.SKRRRT_AWS_REGION,
    accessKeyId: process.env.SKRRRT_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SKRRRT_AWS_SECRET_ACCESS_KEY,
  })
  static bucket: string = process.env.SKRRRT_AWS_BUCKET_NAME
  static mux: Mux = new Mux()

  static async uploadFileToS3(file: any, prefix: string): Promise<string> {
    try {
      const { name, type } = file

      const fileExtension = name.slice(name.lastIndexOf('.'))
      console.log(`File received for upload`, MediaService.name, {
        name,
        type,
        prefix,
        extension: fileExtension,
      })

      let key: string = `${prefix || ''}${new Date().getTime()}__${
        path.parse(name).name
      }${fileExtension}`
      let buffer: Buffer = await fs.readFile(file.path)

      if (type.includes('image')) {
        const image = sharp(buffer)
        const meta = await image.metadata()

        if (meta.format && !['svg', 'gif'].includes(meta.format)) {
          try {
            buffer = await image
              .jpeg({
                progressive: true,
                force: false,
                quality: 70,
              })
              .webp({
                quality: 70,
                force: false,
              })
              .png({
                quality: 70,
                progressive: true,
                force: false,
              })
              .toBuffer()
            key = `${prefix || ''}${new Date().getTime()}__${path.parse(name).name}.jpg`
          } catch (e) {
            console.error(e.message, e.stack, MediaService.name)
          }
        }
      }

      const response = await this.s3
        .upload({
          ACL: 'public-read',
          Bucket: this.bucket,
          Key: key,
          Body: buffer,
        })
        .promise()

      console.log('Uploaded file to S3', MediaService.name, {
        location: response.Location,
      })

      // const existingFiles = await this.getExistingObjectsUnderPrefix(prefix)
      // await this.deleteObjectsFromS3(prefix, existingFiles)

      return response.Location
    } catch (e) {
      console.error(e.message, e.stack, MediaService.name)
      throw e
    }
  }

  static async emptyS3DirectoryAtPrefix(prefix) {
    console.log(`Empty s3 directory at prefix ${prefix}`, MediaService.name)
    const existingFiles = await this.getExistingObjectsUnderPrefix(prefix)
    if (existingFiles.Contents.length > 0) {
      await this.deleteObjectsFromS3(prefix, existingFiles)
    }
  }

  private static async getExistingObjectsUnderPrefix(prefix): Promise<aws.S3.ListObjectsV2Output> {
    return await this.s3
      .listObjectsV2({
        Bucket: this.bucket,
        Prefix: prefix,
      })
      .promise()
  }

  public static async deleteObjectFromS3ByKey(key: string) {
    try {
      await this.s3
        .deleteObject({
          Bucket: this.bucket,
          Key: key,
        })
        .promise()
      console.log(`Deleted S3 object by key: ${key}`, MediaService.name)
    } catch (e) {
      throw new Error(e)
    }
  }

  private static async deleteObjectsFromS3(
    prefix: string,
    existingFiles: aws.S3.ListObjectsV2Output,
  ) {
    try {
      if (existingFiles.Contents.length === 0) return

      const deleteParams: aws.S3.DeleteObjectsRequest = {
        Bucket: this.bucket,
        Delete: {
          Objects: existingFiles.Contents.map((file) => ({
            Key: file.Key,
          })),
        },
      }

      const deleteResponse = await this.s3.deleteObjects(deleteParams).promise()
      console.log(
        `Deleted ${deleteResponse.Deleted.length} pre-existing file(s) found at prefix ${prefix}`,
        MediaService.name,
      )

      // if not all files were deleted in this round, continue
      if (existingFiles.IsTruncated) await this.emptyS3DirectoryAtPrefix(prefix)
    } catch (e) {
      console.error(e.message, e.stack, MediaService.name)
    }
  }

  static async determineRepo(video_type: VIDEO_TYPES): Promise<Repository<any>> {
    if (video_type === VIDEO_TYPES.STG_SET) return await getRepository<StgSet>('StgSet')
    else if (video_type === VIDEO_TYPES.STG_SUBMISSION)
      return await getRepository<StgSubmission>('StgSubmission')
    else if (video_type === VIDEO_TYPES.POST) return await getRepository<Post>('Post')
    else throw new Error(ERROR_TYPES.UNKNOWN_VIDEO_TYPE)
  }

  static async getMuxSignedUrl(uploaded_by_id: string): Promise<MuxSignedUrlResponse> {
    try {
      // Create a new upload using the Mux SDK.
      const upload: Upload = await this.mux.Video.Uploads.create({
        // Set the CORS origin to your application.
        cors_origin: process.env.APP_URL,

        // Specify the settings used to create the new Asset after
        // the upload is complete
        new_asset_settings: {
          passthrough: JSON.stringify({
            uploaded_by_id,
          }),
          playback_policy: 'public',
          input: [
            {
              url: 'https://skrrrt.io/icon_x192.png',
              overlay_settings: {
                vertical_align: 'bottom',
                vertical_margin: '5%',
                horizontal_align: 'right',
                horizontal_margin: '5%',
                width: '5%',
                opacity: '90%',
              },
            },
          ],
        },
      })

      console.log('Created signed Mux url', MediaService.name, {
        requestedByUserId: uploaded_by_id,
      })

      return {
        upload,
      } as MuxSignedUrlResponse
    } catch (err) {
      console.log(err)
      LoggerService.log(`Mux url signing error: ${ERROR_TYPES.MUX_ERROR}`)
      throw {
        type: ERROR_TYPES.MUX_ERROR,
      }
    }
  }

  static async getAllMuxAssets(): Promise<Asset[]> {
    return await this.mux.Video.Assets.list({ limit: 100 })
  }

  static async deleteAllMuxAssets(): Promise<boolean> {
    // try {
    //   const assets = await this.mux.Video.Assets.list({ limit: 1 }) // increase this number as you gain confidence you are deleting out of the correct environment
    //   await Promise.all(assets.map((a) => this.mux.Video.Assets.del(a.id)))
    //   return true
    // } catch {
    //   return false
    // }
  }

  static async getMuxUpload(uploadId: string): Promise<any> {
    const response = await this.mux.Video.Uploads.get(uploadId)
    return response
  }

  static async getMuxAsset(assetId: string): Promise<any> {
    let response = await this.mux.Video.Assets.get(assetId)
    if (response.status === 'errored') {
      LoggerService.log(`Mux asset error: ${ERROR_TYPES.MUX_ERROR}`, {
        assetId,
        ...response.errors,
      })
    }
    return response
  }

  static async deleteMuxAsset(assetId: string): Promise<any> {
    return await this.mux.Video.Assets.del(assetId)
  }
}
