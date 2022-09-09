import {
  FullMessages,
  HyperlinkAwareText,
  KeyboardLink,
  LikeCount,
  Menu,
  UserAvatar,
  UserBanner,
  VideoPlayer,
} from '@/components'
import { useAuth, useUserActions } from '@/context'
import {
  E_Stg_Statuses_Enum,
  Stgs,
  Stg_Sets,
  useDeleteStgPlayerMutation,
  useDeleteUpcomingStgSetMutation,
  useInsertStgSetMessageMutation,
  useLikeStgSetMessageMutation,
  useLikeStgSetMutation,
  useUnlikeStgSetMessageMutation,
  useUnlikeStgSetMutation,
} from '@/types'
import { AUTH_STATES, classNames, CSV_SEPARATOR_SPACE } from '@/utils'
import { ArrowSmRightIcon, DotsHorizontalIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'

type Props = {
  set: Stg_Sets
  stg: Stgs
  allowSubmissions?: boolean
  showSubmissionCount?: boolean
  routingEnabled: boolean
  naked?: boolean
  showActions?: boolean
}

export const StgSetCard = ({ set, stg }: Props) => {
  const router = useRouter()
  const { authdUser, authState, isAuthenticated } = useAuth() || {}
  const { addToast } = useToasts()
  const { getUserResponse } = useUserActions()

  const [insertStgSetMessage] = useInsertStgSetMessageMutation()
  const [likeStgSetMessage] = useLikeStgSetMessageMutation()
  const [unlikeStgSetMessage] = useUnlikeStgSetMessageMutation()

  const [likeStgSet] = useLikeStgSetMutation()
  const [unlikeStgSet] = useUnlikeStgSetMutation()

  const [deleteStgSet] = useDeleteUpcomingStgSetMutation()
  const [deleteStgPlayer] = useDeleteStgPlayerMutation()

  const [deleted, setDeleted] = useState(false)

  const handleDeleteStgSet = async () => {
    const response = await getUserResponse({
      question: 'Are you sure you want to delete this set?',
    })
    if (response.accepts) {
      setDeleted(true)
      await Promise.all([deleteStgSet(), deleteStgPlayer()])
      router.push(`/games/stg/upcoming`)
    }
  }

  const handleLikeSetMessage = (message) => {
    if (isAuthenticated) {
      if (message.likes?.some((like) => like?.liked_by_user_id === authdUser?.id)) {
        unlikeStgSetMessage({
          variables: {
            stg_set_message_id: message.id,
          },
        })
      } else {
        likeStgSetMessage({
          variables: {
            stg_set_message_id: message.id,
          },
        })
      }
    }
  }

  const handleSubmitSetMessage = async (message) => {
    if (message && set) {
      try {
        await insertStgSetMessage({
          variables: { stg_set_id: set.id, text: message },
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleLikeStgSet = async () => {
    if (authState !== AUTH_STATES.AUTHENTICATED) {
      addToast(`You must login to like sets.`, {
        appearance: 'info',
        autoDismiss: true,
      })
    } else if (set?.likes?.some((like) => like.liked_by_user_id === authdUser?.id)) {
      await unlikeStgSet({
        variables: {
          stg_set_id: set.id,
        },
      })
    } else {
      await likeStgSet({
        variables: {
          stg_set_id: set.id,
        },
      })
    }
  }

  if (!set || deleted) return null

  const setIsPublic = stg?.status !== E_Stg_Statuses_Enum.Upcoming
  const routingEnabled = !router.asPath?.includes(set.id.toString())
  // const isAuthdUsersSet = set.set_by_id === authdUser?.id
  // const setIsSubmittableForUser =
  //   set.set_by_id !== authdUser?.id && // set is not the authd users
  //   stg.players?.some((player) => player.player_id === authdUser?.id) && // authdUser is playing in the stg
  //   stg.status === E_Stg_Statuses_Enum.Active
  // const authdUserAlreadySubmitted = set.submissions_where_landed?.some(
  //   (sub) => sub.submitted_by_id === authdUser?.id,
  // )

  return (
    <>
      <div className="flex flex-col w-full rounded-lg shadow-sm bg-nord6 dark:bg-nord0">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <UserBanner user={set.set_by} date={set.created_at} />
            <Menu
              triggerSlot={
                <div className="flex items-center justify-center rounded-full h-7 w-7 dark:hover:bg-nord1">
                  <DotsHorizontalIcon className="w-5 h-5" />
                </div>
              }
              items={[
                [
                  {
                    text: 'delete',
                    show: set.set_by_id === authdUser?.id,
                    handler: handleDeleteStgSet,
                  },
                  {
                    text: 'upload submission',
                    show:
                      set.set_by_id !== authdUser?.id && // set is not the authd users
                      stg.players?.some((player) => player.player_id === authdUser?.id) && // authdUser is playing in the stg
                      stg.status === E_Stg_Statuses_Enum.Active &&
                      !set.submissions_where_landed?.some(
                        (sub) => sub.submitted_by_id === authdUser?.id,
                      ),
                    handler: () => router.push(`/games/stg/${set.stg_id}/sets/${set.id}/submit`),
                  },
                  {
                    text: 'view submission',
                    show:
                      set.set_by_id !== authdUser?.id && // set is not the authd users
                      stg.players?.some((player) => player.player_id === authdUser?.id) && // authdUser is playing in the stg
                      stg.status === E_Stg_Statuses_Enum.Active &&
                      set.submissions_where_landed?.some(
                        (sub) => sub.submitted_by_id === authdUser?.id,
                      ),
                    handler: () =>
                      router.push(
                        `/games/stg/${set.stg_id}/sets/${set.id}/submissions/${
                          set.submissions_where_landed.find(
                            (sub) => sub.submitted_by_id === authdUser?.id,
                          )!.id
                        }`,
                      ),
                  },
                ],
              ]}
            />
          </div>
          <VideoPlayer playbackId={set.video_playback_id} />
          <div className="px-1 mt-2 mb-1">
            <div className="flex items-start justify-between">
              <p className="pr-2 mb-1 text-xl label overflow-wrap-anywhere">{set.title}</p>
              <div className="flex items-center">
                <div className={routingEnabled && 'mr-2'}>
                  <Tippy
                    content={set.likes
                      .map((like) => like?.user?.full_name)
                      .join(CSV_SEPARATOR_SPACE)}
                    disabled={set.likes.length === 0}
                  >
                    <div>
                      <LikeCount
                        likedByAuthdUser={set.likes?.some(
                          (like) => like.liked_by_user_id === authdUser?.id,
                        )}
                        likeCount={set.likes?.length}
                        aria-label="like-unlike-set"
                        handleLike={handleLikeStgSet}
                      />
                    </div>
                  </Tippy>
                </div>

                {routingEnabled && (
                  <KeyboardLink href={`/games/stg/${set.stg_id}/sets/${set.id}`}>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full cursor-pointer dark:hover:bg-nord1">
                      <ArrowSmRightIcon className="w-5 h-5" />
                    </div>
                  </KeyboardLink>
                )}
              </div>
            </div>
            <p className="overflow-wrap-anywhere text-secondary">
              <HyperlinkAwareText>{set.instructions}</HyperlinkAwareText>
            </p>
          </div>

          {setIsPublic && (
            <div
              className={classNames(
                'flex items-start px-1',
                set.submissions_where_landed.length > 0 ? 'mt-6 justify-between' : 'justify-end',
              )}
            >
              {set.submissions_where_landed.length > 0 && (
                <div className="flex flex-col">
                  <p className="font-extrabold tracking-wider uppercase text-secondary">
                    Landed By
                  </p>

                  <div className="flex flex-wrap">
                    {set.submissions_where_landed.map((submission) => (
                      <div className="w-12 h-12 mt-2 mr-2" key={submission.id}>
                        <UserAvatar
                          user={submission.submitted_by}
                          initialsClasses="text-sm bg-nord5 dark:bg-nord1"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {setIsPublic && (
          <FullMessages
            messages={set?.messages || []}
            // @ts-ignore
            handleLikeMessage={handleLikeSetMessage}
            handleSubmit={handleSubmitSetMessage}
          />
        )}
      </div>
    </>
  )
}
