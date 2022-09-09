import React, { useEffect, useState } from 'react'
import { Alert } from '@/components'
import { useAuth, useMediaUpload, useUserActions } from '@/context'
import { StgSubmissionForm } from '@/forms'
import {
  Stg_Submissions,
  useDeleteStgSubmissionByIdMutation,
  useStgSetByIdQuery,
  useInsertStgSubmissionMutation,
} from '@/types'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { v4 } from 'uuid'

const UploadStgSubmission: React.FC = () => {
  const router = useRouter()
  const { stg_id, set_id } = router.query

  const { authdUser } = useAuth()
  const [authdUserExistingSubmission, setAuthdUserExistingSubmission] = useState<Stg_Submissions>()
  const [insertStgSubmission] = useInsertStgSubmissionMutation()
  const [deleteStgSubmission] = useDeleteStgSubmissionByIdMutation()
  const { uploadVideoToMux, uploadInProgress } = useMediaUpload()
  const { data, loading } = useStgSetByIdQuery({
    variables: {
      id: Number(set_id),
    },
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const { getUserResponse } = useUserActions()

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)
    const { file } = formData

    try {
      if (data && uploadVideoToMux && file && file?.type?.includes('video')) {
        const { video_asset_id, video_playback_id, success } = await uploadVideoToMux({
          file,
        })

        if (success) {
          await insertStgSubmission({
            variables: {
              stg_id: Number(stg_id),
              stg_set_id: Number(set_id),
              video_asset_id,
              video_playback_id,
            },
          })

          // router.push(`/games/stg/${stg_id}/sets/${set_id}/submissions/${id}`) #TODO fix this
          router.push(`/games/stg/${stg_id}/sets/${set_id}`)
        }
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    setAuthdUserExistingSubmission(
      data?.stg_sets_by_pk?.submissions_where_landed.find(
        (submission) => submission.submitted_by_id === authdUser?.id,
      ) as Stg_Submissions,
    )
  }, [data, authdUser])

  const handleDeleteStgSubmission = async () => {
    const response = await getUserResponse({
      question: 'Are you sure you want to delete the submission?',
    })
    if (response.accepts) {
      await deleteStgSubmission({
        variables: {
          id: authdUserExistingSubmission?.id,
        },
      })
      // router.push(`/games/stg/${stg_id}/sets/${stg_set_id}`)
    }
  }

  if (loading || !authdUser) return null

  return (
    <>
      <Head>
        <title>skrrrt | stg submit</title>
      </Head>
      <div className="flex flex-row justify-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center w-full">
          {data?.stg_sets_by_pk?.stg?.players.some(
            (player) => player.player_id === authdUser?.id,
          ) ? (
            <>
              {!!authdUserExistingSubmission && !uploadInProgress && !isSubmitting ? (
                <div className="flex flex-col items-center w-full mb-4">
                  <Alert color="red" title="Careful" closeable={false}>
                    <p>
                      You've already submitted for this set. To re-upload you'll need to delete your
                      current submission first.
                    </p>
                    <p>
                      Remember that timestamps of submissions decide tiebreakers, so only re-upload
                      if your current submission was uploaded by mistake or is invalid for any
                      reason.
                    </p>
                  </Alert>

                  <button className="my-4 btn bg-nord11" onClick={handleDeleteStgSubmission}>
                    delete submission
                  </button>
                </div>
              ) : (
                <StgSubmissionForm handleSubmit={handleSubmit} />
              )}
            </>
          ) : (
            <Alert color="red" title="Nice try" closeable={false}>
              <p>
                Hard to submit for a game you're not playing in, eh?{' '}
                <span role="img" aria-label="winky face">
                  😉
                </span>
              </p>
            </Alert>
          )}
        </div>
      </div>
    </>
  )
}

export default UploadStgSubmission
