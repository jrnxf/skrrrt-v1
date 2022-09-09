import { useAuth, useUserActions } from '@/context'
import { useDeleteMessageByIdMutation } from '@/types'
import { classNames, CSV_SEPARATOR_SPACE, preprocessText } from '@/utils'
import { DotsHorizontalIcon, HeartIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Moment from 'react-moment'
import { TextareaAutosize } from '@/forms'
import { HyperlinkAwareText, LikeCount, Menu, UserAvatar } from '@/components'

export const FullMessages = ({ handleLikeMessage, messages, handleSubmit }) => {
  const { authdUser } = useAuth()
  const router = useRouter()
  const [deleteMessageById] = useDeleteMessageByIdMutation()
  const { getUserResponse } = useUserActions()

  const handleDeleteMessage = async (message) => {
    if (message.author_id === authdUser?.id) {
      const response = await getUserResponse({
        question: 'Are you sure you want to delete this message?',
      })
      if (response.accepts) {
        await deleteMessageById({
          variables: {
            id: message.id,
          },
        })
      }
    }
  }

  return (
    <div
      className={classNames(
        messages.length === 0 ? 'px-4 py-4' : 'px-4 pb-4',
        'flex flex-col w-full border-t-2 border-dotted border-nord5 dark:border-nord1',
      )}
    >
      {messages.length > 0 && (
        <div className="relative flex flex-col py-2">
          {messages.map((message, idx) => (
            <div key={idx}>
              <div className="mb-2">
                <div className="flex flex-row mt-3 align-top">
                  <div className="flex-shrink-0 w-12 h-12 mr-3">
                    <UserAvatar
                      user={message.author}
                      initialsClasses="bg-nord5 dark:bg-nord1 sm:text-base text-xs"
                    />
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <div className="flex justify-between w-full">
                      <div
                        tabIndex={0}
                        className="keyboard-focus-visible"
                        onClick={() => router.push(`/users/${message.author.username}`)}
                        onKeyPress={() => router.push(`/users/${message.author.username}`)}
                      >
                        <div className={`text-primary text-lg font-bold overflow-wrap-anywhere`}>
                          {message.author.full_name}
                        </div>
                        <div className="mb-1 text-xs font-medium text-secondary">
                          <Moment fromNow interval={15000}>
                            {message.created_at}
                          </Moment>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className={message.author_id === authdUser?.id && 'mr-2'}>
                          <Tippy
                            content={message.likes
                              .map((like) => like?.user?.full_name)
                              .join(CSV_SEPARATOR_SPACE)}
                            disabled={message.likes.length === 0}
                          >
                            <div>
                              <LikeCount
                                likedByAuthdUser={message.likes?.some(
                                  (like) => like.liked_by_user_id === authdUser?.id,
                                )}
                                likeCount={message.likes?.length}
                                handleLike={() => handleLikeMessage(message)}
                                aria-label="like-unlike-message"
                              />
                            </div>
                          </Tippy>
                        </div>

                        {message.author_id === authdUser?.id && (
                          <div className="flex flex-col w-full">
                            <Menu
                              triggerSlot={
                                <div className="flex items-center justify-center w-6 h-6 rounded-full dark:hover:bg-nord1">
                                  <DotsHorizontalIcon className="w-5 h-5" />
                                </div>
                              }
                              items={[
                                [
                                  {
                                    text: 'delete',
                                    show: true,
                                    handler: () => {
                                      handleDeleteMessage(message)
                                    },
                                  },
                                ],
                              ]}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="px-3 py-2 text-lg whitespace-pre-wrap rounded-b-lg rounded-tr-lg shadow-sm overflow-wrap-anywhere bg-nord5 dark:bg-nord1">
                      <HyperlinkAwareText>{message.text}</HyperlinkAwareText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <TextareaAutosize handleSubmit={handleSubmit} />
    </div>
  )
}
