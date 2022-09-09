import { FullMessages, StgSetCard, StgSubmissionCard, HeaderLine, Select } from '@/components'
import { useAuth, useUserActions } from '@/context'
import {
  E_Stg_Statuses_Enum,
  Stgs,
  StgSubmissionByIdQueryDocument,
  StgSubmissionByIdSubscriptionDocument,
  Stg_Sets,
  Stg_Submissions,
  useDeleteStgSubmissionByIdMutation,
  useStgSubmissionByIdQuery,
  useInsertStgSubmissionMessageMutation,
  useLikeStgSubmissionMessageMutation,
  useUnlikeStgSubmissionMessageMutation,
} from '@/types'
import { SUBMISSION_CARD_VIEW_TYPES, preprocessText } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const StgSubmission = () => {
  const router = useRouter()
  const { stg_id, set_id, submission_id, view } = router.query
  const { data, subscribeToMore } = useStgSubmissionByIdQuery({
    variables: {
      id: Number(submission_id),
    },
  })

  const { getUserResponse } = useUserActions()
  const { authdUser, isAuthenticated } = useAuth()
  const [likeStgSubmissionMessage] = useLikeStgSubmissionMessageMutation()
  const [unlikeStgSubmissionMessage] = useUnlikeStgSubmissionMessageMutation()
  const [insertStgSubmissionMessage] = useInsertStgSubmissionMessageMutation()
  const [deleteStgSubmission] = useDeleteStgSubmissionByIdMutation()

  const [viewType, setViewType] = useState<SUBMISSION_CARD_VIEW_TYPES | undefined>(
    router.query?.view === SUBMISSION_CARD_VIEW_TYPES.SET
      ? SUBMISSION_CARD_VIEW_TYPES.SET
      : SUBMISSION_CARD_VIEW_TYPES.MESSAGES,
  )
  const handleDeleteStgSubmission = async () => {
    const response = await getUserResponse({
      question:
        'Are you sure you want to delete your submission? Remember that timestamps of submissions decide tiebreakers, so only re-upload if your current submission was uploaded by mistake or is invalid for any reason.',
    })
    if (response.accepts) {
      await deleteStgSubmission({
        variables: {
          id: Number(submission_id),
        },
      })
      router.push(`/games/stg/${stg_id}/sets/${set_id}`)
    }
  }

  const handleLikeMessage = (message) => {
    if (isAuthenticated) {
      if (message.likes.some((like) => like?.liked_by_user_id === authdUser?.id)) {
        unlikeStgSubmissionMessage({
          variables: {
            stg_submission_message_id: message.id,
          },
        })
      } else {
        likeStgSubmissionMessage({
          variables: {
            stg_submission_message_id: message.id,
          },
        })
      }
    }
  }

  useEffect(() => {
    if (router.query?.view && router.query.view !== viewType) {
      // @ts-ignore
      setViewType(router.query.view)
    }
  }, [router])

  useEffect(() => {
    try {
      let unsubFn = () => {}
      if (data?.stg_submissions_by_pk) {
        unsubFn = subscribeToMore({
          document: StgSubmissionByIdSubscriptionDocument,
          variables: {
            id: data?.stg_submissions_by_pk?.id,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            if (subscriptionData?.data?.stg_submissions_by_pk) {
              return subscriptionData.data
            } else {
              return previousStore
            }
          },
        })
      }
      return () => {
        unsubFn?.()
      }
    } catch {
      // bad unsubscribe
    }
  }, [data, subscribeToMore])

  const handleSubmit = async (_data) => {
    const { message } = _data

    const text = preprocessText(message)
    if (text) {
      try {
        await insertStgSubmissionMessage({
          variables: { stg_submission_id: Number(submission_id), text },
          update: (store, { data: _data }) => {
            if (!data?.stg_submissions_by_pk || !_data) return
            const cachedSubmissionData: any = store.readQuery({
              query: StgSubmissionByIdQueryDocument,
              variables: {
                id: data?.stg_submissions_by_pk.id,
              },
            })
            store.writeQuery({
              query: StgSubmissionByIdQueryDocument,
              variables: {
                id: data?.stg_submissions_by_pk.id,
              },
              data: {
                stg_submissions: [
                  {
                    ...cachedSubmissionData.stg_submissions_by_pk,
                    messages: [
                      ...cachedSubmissionData.stg_submissions_by_pk.messages,
                      _data.insert_stg_submission_messages_one,
                    ],
                  },
                ],
              },
            })
          },
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const submission = data?.stg_submissions_by_pk

  if (!submission) return null

  return (
    <>
      <Head>
        <title>skrrrt | submission</title>
      </Head>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl overflow-y-auto scrollbar">
          <StgSubmissionCard
            submission={submission as Stg_Submissions}
            routingEnabled={false}
            manageStgSubmissionSlot={
              <>
                {data?.stg_submissions_by_pk?.stg?.status === E_Stg_Statuses_Enum.Active &&
                  data?.stg_submissions_by_pk?.submitted_by_id === authdUser?.id && (
                    <div className="flex justify-center my-2">
                      <button className="mx-1 btn bg-nord11" onClick={handleDeleteStgSubmission}>
                        delete submission
                      </button>
                    </div>
                  )}
              </>
            }
          />

          <div className="my-10">
            <HeaderLine text="Set" />
          </div>
          <StgSetCard
            stg={submission.stg as Stgs}
            set={submission.set_landed as Stg_Sets}
            routingEnabled
          />
        </div>
      </div>
    </>
  )
}

export default StgSubmission
