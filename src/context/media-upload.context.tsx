import * as UpChunk from '@mux/upchunk'
import axios from 'axios'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { CSSTransition } from 'react-transition-group'
import { COOKIES, fetcher } from '@/utils'
import useSWR from 'swr'
import { Spinner } from '@/components'
import { useToasts } from 'react-toast-notifications'

type MediaUploadContextProps = {
  uploadFileToS3?: ({ file, prefix }: { file: any; prefix?: string }) => any
  deleteObjectFromS3ByUrl?: (url) => any
  uploadVideoToMux?: ({ file }: { file: File }) => Promise<any>
  uploadInProgress?: boolean
}
export const MediaUploadContext = createContext<MediaUploadContextProps>({})

export const useMediaUpload = () => useContext(MediaUploadContext)

export const MediaUploadProvider = ({ children }) => {
  const { addToast } = useToasts()
  const [cookies] = useCookies()
  const [uploadId, setUploadId] = useState(null)
  const [assetId, setAssetId] = useState(null)
  const [showMediaModal, setShowMediaModal] = useState(false)
  const [uploadPercentage, setUploadPercentage] = useState<number>(-1)
  const resolver = useRef<Promise<any>>()

  const { data: uploadData, error: uploadError } = useSWR(
    uploadPercentage === 100 && uploadId ? `/api/media/mux/uploads/${uploadId}` : null,
    {
      fetcher,
      refreshInterval: 2000,
    },
  )

  const { data: assetData, error: assetError } = useSWR(
    assetId ? `/api/media/mux/assets/${assetId}` : null,
    {
      fetcher,
      refreshInterval: 2000,
    },
  )

  useEffect(() => {
    if (uploadError) {
      addToast(`An error occurred uploading your video. Please try again later.`, {
        appearance: 'error',
        autoDismiss: true,
      })
      ;(resolver.current as any)({
        success: false,
      })
      cleanup()
      close()
      return
    } else {
      const assetId = uploadData?.response?.asset_id
      if (assetId) {
        setAssetId(assetId)
        setUploadId(null) // stop the upload call from refreshing
      }
    }
  }, [uploadData, uploadError])

  useEffect(() => {
    if (assetError) {
      addToast(`An error occurred uploading your video. Please try again later.`, {
        appearance: 'error',
        autoDismiss: true,
      })
      ;(resolver.current as any)({
        success: false,
      })
      cleanup()
      close()
      return
    }
    const { response } = assetData || {}
    if (response) {
      const publicPlaybackId = response.playback_ids?.find(
        (playback_id) => playback_id.policy === 'public',
      )?.id
      switch (response?.status) {
        case 'ready':
          if (publicPlaybackId && response.status === 'ready') {
            if (resolver && resolver.current) {
              ;(resolver.current as any)({
                video_asset_id: assetId,
                video_playback_id: publicPlaybackId,
                success: true,
              })
            }
          }
          cleanup()
          close()
          break
        case 'errored':
          addToast(`An error occurred uploading your video. Please try again later.`, {
            appearance: 'error',
            autoDismiss: true,
          })
          ;(resolver.current as any)({
            success: false,
          })
          cleanup()
          close()
          break
        case 'preparing':
          break
      }
    }
  }, [resolver, assetData, assetError])

  const close = () => {
    setShowMediaModal(false)
  }

  const cleanup = () => {
    setUploadPercentage(-1)
    setAssetId(null)
    setUploadId(null)
  }

  const uploadFileToS3 = ({ file, prefix = 'media/' }) => {
    cleanup()
    setShowMediaModal(true)

    execFileUploadToS3(file, prefix)
    return new Promise((resolve: any) => {
      resolver.current = resolve
    })
  }

  const uploadVideoToMux = ({ file }: { file: File }) => {
    /*unfortunately MuxUpchunk emits progress events even after a success
     event is fired, so there's no good way to cleanup when the modal is
     closing, so it's best to cleanup when it fires up */
    cleanup()
    setShowMediaModal(true)

    execUploadVideoToMux(file)
    return new Promise((resolve: any) => {
      resolver.current = resolve
    })
  }

  const execFileUploadToS3 = async (file, prefix) => {
    const formData = new FormData()
    formData.append('file', file)
    let interval
    let lastProgressPercentage = 0
    try {
      interval = setInterval(() => {
        // random number from 0 to 9
        lastProgressPercentage = lastProgressPercentage + Math.floor(Math.random() * 8)
        if (lastProgressPercentage < 100) setUploadPercentage(lastProgressPercentage)
      }, 200)
      const response = await axios.post(
        `/api/media/upload${prefix ? `?prefix=${prefix}` : ''}`,
        formData,
        {
          headers: {
            authorization: `Bearer ${cookies[COOKIES.AUTH.ACCESS_TOKEN]}`,
            'content-type': 'multipart/form-data',
          },
        },
      )
      const url = response.data
      setUploadPercentage(100)
      if (resolver) {
        ;(resolver.current as any)({
          url,
        })
      }
    } catch (e) {
    } finally {
      close()
      clearInterval(interval)
    }
  }

  const execUploadVideoToMux = async (file) => {
    let response = await axios.get(`/api/media/mux/signed-url`, {
      headers: {
        authorization: `Bearer ${cookies[COOKIES.AUTH.ACCESS_TOKEN]}`,
      },
    })

    try {
      const upload = response?.data?.upload
      const signedUrl = upload?.url

      setUploadId(upload.id)

      if (signedUrl) {
        const upload = UpChunk.createUpload({
          file,
          endpoint: signedUrl,
          chunkSize: 5120, // uploads the file in ~5mb chunks
        })

        upload.on('error', (err) => {
          console.log(err)
        })

        let lastProgressPercentage = -1
        upload.on('progress', (progress) => {
          if (progress.detail > lastProgressPercentage) {
            var currentProgress = Math.floor(progress.detail)
            lastProgressPercentage = currentProgress
            setUploadPercentage(currentProgress)
          }
        })
      }
    } catch (e) {
      close()
    }
  }

  const deleteObjectFromS3ByUrl = async (url) => {
    const s3Key = url.slice(url.indexOf('media/'))
    await axios.delete(`/api/media/s3?key=${s3Key}`, {
      headers: {
        authorization: `Bearer ${cookies[COOKIES.AUTH.ACCESS_TOKEN]}`,
      },
    })
  }

  return (
    <MediaUploadContext.Provider
      value={{
        uploadFileToS3,
        uploadVideoToMux,
        uploadInProgress: uploadPercentage > -1,
        deleteObjectFromS3ByUrl,
      }}
    >
      <CSSTransition in={showMediaModal} timeout={300} classNames="modal" unmountOnExit>
        <div id="mediaUploadModal" className="modal-container">
          <div className="relative w-full max-w-3xl max-h-screen px-8 mx-auto my-6">
            {uploadPercentage > -1 && (
              <div className="relative flex flex-col w-full p-4 border-0 rounded-md shadow-sm outline-none bg-primary focus:outline-none">
                <div>
                  <div className="mb-2 text-center label">
                    {uploadPercentage === 100 ? (
                      <div className="flex items-center justify-center">
                        <div>Processing</div>
                        <div className="ml-2">
                          <Spinner className="w-4 h-4" />
                        </div>
                      </div>
                    ) : (
                      <div>{uploadPercentage || 0}% Uploaded</div>
                    )}
                  </div>

                  <div className="relative pt-1">
                    <div className="flex h-2 mb-4 overflow-hidden text-xs rounded bg-nord5 dark:bg-nord1">
                      <div
                        style={{ width: `${uploadPercentage}%` }}
                        className="flex flex-col justify-center text-center transition-all duration-300 shadow-none text-nord6 whitespace-nowrap bg-nord15"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={showMediaModal} timeout={300} classNames="translucent-bg" unmountOnExit>
        <div className="translucent-overlay" />
      </CSSTransition>
      {children}
    </MediaUploadContext.Provider>
  )
}
