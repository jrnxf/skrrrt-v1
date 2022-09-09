import React, { FC, useEffect, useState } from 'react'
import { Alert } from '@/components'
import { useAuth, useMediaUpload } from '@/context'
import { StgSetForm } from '@/forms'
import {
  AuthdUserFragment,
  useInsertStgPlayerMutation,
  useInsertStgSetMutation,
  useUpcomingStgQuery,
} from '@/types'
import { useRouter } from 'next/router'
import Head from 'next/head'

const JoinStg: FC = () => {
  const { authdUser, authState, isAuthenticated } = useAuth()
  const router = useRouter()
  const [insertStgSet] = useInsertStgSetMutation()
  const [insertStgPlayer] = useInsertStgPlayerMutation()
  const { uploadVideoToMux } = useMediaUpload()
  const { data } = useUpcomingStgQuery()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)

    const { file, title, instructions } = formData
    try {
      const upcomingStg = data?.stgs[0]

      if (upcomingStg && data && uploadVideoToMux && file && file?.type?.includes('video')) {
        const { video_asset_id, video_playback_id, success } = await uploadVideoToMux({
          file,
        })

        if (success) {
          await Promise.all([
            insertStgSet({
              variables: {
                stg_id: upcomingStg.id,
                title,
                instructions,
                video_asset_id,
                video_playback_id,
              },
            }),
            insertStgPlayer({
              variables: {
                stg_id: upcomingStg.id,
              },
            }),
          ])
        }

        router.push(`/games/stg/upcoming`)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/account/login?redirect=/games/stg/join')
    }
  }, [isAuthenticated, authState])

  if (!authdUser) return null
  else {
    return (
      <>
        <Head>
          <title>skrrrt | join stg</title>
        </Head>
        <div className="flex flex-row justify-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center w-full">
            {(authdUser as AuthdUserFragment)?.is_registered_for_upcoming_stg && !isSubmitting ? (
              <div className="w-full">
                <Alert color="red" title="Already registered" closeable={false}>
                  You're already registered for this game.
                </Alert>
              </div>
            ) : (
              <>
                <StgSetForm handleSubmit={handleSubmit} existingStgSet={null} />
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default JoinStg
