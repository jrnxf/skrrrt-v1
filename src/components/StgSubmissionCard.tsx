import { FullMessages, KeyboardLink, LikeCount, Menu } from '@/components'
import { useAuth, useUserActions } from '@/context'
import {
  StgSubmissionByIdQueryDocument,
  Stg_Submissions,
  useDeleteStgSubmissionByIdMutation,
  useInsertStgSubmissionMessageMutation,
  useLikeStgSubmissionMessageMutation,
  useLikeStgSubmissionMutation,
  useUnlikeStgSubmissionMessageMutation,
  useUnlikeStgSubmissionMutation,
} from '@/types'
import { AUTH_STATES, CSV_SEPARATOR_SPACE } from '@/utils'
import { ArrowSmRightIcon, DotsHorizontalIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import moment from 'moment'
import { useRouter } from 'next/router'
import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { UserBanner } from './UserBanner'
import { VideoPlayer } from './VideoPlayer'

type Props = {
  submission: Stg_Submissions
  routingEnabled: boolean
  manageStgSubmissionSlot?: any
  showSetTitle?: boolean
}
export const StgSubmissionCard: React.FC<Props> = ({ submission, showSetTitle = true }) => {
  const [likeStgSubmission] = useLikeStgSubmissionMutation()
  const [unlikeStgSubmission] = useUnlikeStgSubmissionMutation()
  const { addToast } = useToasts()
  const router = useRouter()

  const { getUserResponse } = useUserActions()
  const { authdUser, authState, isAuthenticated } = useAuth()
  const [likeStgSubmissionMessage] = useLikeStgSubmissionMessageMutation()
  const [unlikeStgSubmissionMessage] = useUnlikeStgSubmissionMessageMutation()
  const [insertStgSubmissionMessage] = useInsertStgSubmissionMessageMutation()
  const [deleteStgSubmission] = useDeleteStgSubmissionByIdMutation()

  const handleSubmitSubmissionMessage = async (message) => {
    if (message && submission) {
      try {
        await insertStgSubmissionMessage({
          variables: { stg_submission_id: submission.id, text: message },
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleLikeSubmissionMessage = (message) => {
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

  const handleLikeStgSubmission = () => {
    if (authState !== AUTH_STATES.AUTHENTICATED) {
      addToast(`You must login to like submissions.`, {
        appearance: 'info',
        autoDismiss: true,
      })
    } else if (submission?.likes?.some((like) => like.liked_by_user_id === authdUser?.id)) {
      unlikeStgSubmission({
        variables: {
          stg_submission_id: submission.id,
        },
      })
    } else {
      likeStgSubmission({
        variables: {
          stg_submission_id: submission.id,
        },
      })
    }
  }

  const handleDeleteStgSubmission = async () => {
    const response = await getUserResponse({
      question: 'Are you sure you want to delete the submission?',
    })
    if (response.accepts) {
      await deleteStgSubmission({
        variables: {
          id: submission?.id,
        },
      })
      // router.push(`/games/stg/${stg_id}/sets/${stg_set_id}`)
    }
  }

  if (!submission) return null
  const routingEnabled = !router.asPath?.includes(submission.id.toString())
  const isAuthdUsersSubmission = submission.submitted_by_id === authdUser?.id
  return (
    <>
      <div className="flex flex-col w-full rounded-lg shadow-sm bg-nord6 dark:bg-nord0">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <UserBanner user={submission.submitted_by} date={submission.created_at} />
            {isAuthdUsersSubmission && (
              <Menu
                triggerSlot={
                  <div className="flex items-center justify-center rounded-full h-7 w-7 dark:hover:bg-black-23">
                    <DotsHorizontalIcon className="w-5 h-5" />
                  </div>
                }
                items={[
                  [
                    {
                      text: 'delete',
                      show: isAuthdUsersSubmission,
                      handler: handleDeleteStgSubmission,
                    },
                  ],
                ]}
              />
            )}
          </div>

          <VideoPlayer playbackId={submission.video_playback_id} />
          <div className="mt-2">
            {showSetTitle && (
              <p className="mb-1 text-xl label overflow-wrap-anywhere">
                {submission.set_landed.title}
              </p>
            )}

            <div className="flex items-start justify-between">
              <p className="tracking-wide text-secondary">
                {moment(submission.created_at).format('MMM Do [@] h:mm:ssa')}
              </p>
              <div className="flex items-center">
                <div className={routingEnabled && 'mr-2'}>
                  <Tippy
                    content={submission.likes
                      .map((like) => like?.user?.full_name)
                      .join(CSV_SEPARATOR_SPACE)}
                    disabled={submission.likes.length === 0}
                  >
                    <div>
                      <LikeCount
                        likedByAuthdUser={submission.likes?.some(
                          (like) => like.liked_by_user_id === authdUser?.id,
                        )}
                        likeCount={submission.likes?.length}
                        aria-label="like-unlike-set"
                        handleLike={handleLikeStgSubmission}
                      />
                    </div>
                  </Tippy>
                </div>

                {routingEnabled && (
                  <KeyboardLink
                    href={`/games/stg/${submission.stg_id}/sets/${submission.set_landed.id}/submissions/${submission.id}`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer dark:hover:bg-nord1">
                      <ArrowSmRightIcon className="w-5 h-5" />
                    </div>
                  </KeyboardLink>
                )}
              </div>
            </div>
          </div>
        </div>
        <FullMessages
          messages={submission?.messages || []}
          // @ts-ignore
          handleLikeMessage={handleLikeSubmissionMessage}
          handleSubmit={handleSubmitSubmissionMessage}
        />
      </div>
    </>
  )
}
