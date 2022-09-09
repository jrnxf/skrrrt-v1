import { useMediaUpload } from '@/context'
import { PostForm } from '@/forms'
import { useInsertPostMutation } from '@/types'
import { CSV_SEPARATOR, isProduction } from '@/utils'
import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const CreatePost = () => {
  const router = useRouter()
  const { uploadVideoToMux, uploadFileToS3 } = useMediaUpload()
  const [insertPost] = useInsertPostMutation()

  const onSubmit = async (data) => {
    let { body, tags, file, embed_url } = data
    let oembed = null
    if (embed_url) {
      const res = await axios.get(
        `https://${isProduction() ? 'oembed.skrrrt.io' : 'localhost:8062'}/oembed?url=${encodeURI(
          embed_url,
        )}&api_key=a4be3edfcb99a978cf9aa6&omit_script=1&omit_css=1`,
      )

      oembed = res.data
    }
    tags = tags.split(CSV_SEPARATOR)
    if (file) {
      const fileIsVideo = file.type.includes('video')
      const fileIsImage = file.type.includes('image')

      if (fileIsVideo) {
        /**
         * video will be appended on server
         */
        const { video_asset_id, video_playback_id, success } = await uploadVideoToMux({
          file,
        })
        if (success) {
          await insertPost({
            variables: {
              body,
              tags: {
                data: tags.map((t) => ({ tag: t })),
              },
              video_asset_id,
              video_playback_id,
            },
          })
          router.push('/posts')
        }
      } else if (fileIsImage) {
        const { url } = await uploadFileToS3?.({
          file,
          prefix: 'media/',
        })

        if (url) {
          await insertPost({
            variables: {
              body,
              image_url: url,
              tags: {
                data: tags.map((t) => ({ tag: t })),
              },
            },
          })
          router.push('/posts')
        }
      }
    } else if (embed_url !== '' || oembed !== '') {
      await insertPost({
        variables: {
          body,
          tags: {
            data: tags.map((t) => ({ tag: t })),
          },
          oembed,
        },
      })
      router.push('/posts')
    } else {
      await insertPost({
        variables: {
          body,
          tags: {
            data: tags.map((t) => ({ tag: t })),
          },
        },
      })
      router.push('/posts')
    }
  }

  return (
    <>
      <Head>
        <title>skrrrt | upload post</title>
      </Head>
      <div className="flex flex-row justify-center max-w-6xl mx-auto">
        <div className="flex flex-col items-center w-full">
          <PostForm handleSubmit={onSubmit} attachmentInput />
        </div>
      </div>
    </>
  )
}

export default CreatePost
