import { FullMessages, KeyboardLink, LikeCount } from '@/components'
import { useAuth, useUserActions } from '@/context'
import {
  Posts,
  useDeletePostByIdMutation,
  useInsertPostMessageMutation,
  useLikePostMessageMutation,
  useLikePostMutation,
  useUnlikePostMessageMutation,
  useUnlikePostMutation,
} from '@/types'
import { AUTH_STATES, CSV_SEPARATOR_SPACE, preferCdn } from '@/utils'
import { ArrowSmRightIcon, DotsHorizontalIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useToasts } from 'react-toast-notifications'
import { OembedCard, UserBanner, VideoPlayer } from '.'
import { HyperlinkAwareText } from './HyperlinkAwareText'
import { Menu } from './Menu'

export const PostCard = ({
  post,
  activeTags,
  handleTagClick = (tag: string) => {},
}: {
  post: Posts
  activeTags?: string[]
  handleTagClick?: (tag: string) => void
}) => {
  const { authdUser, authState, isAuthenticated } = useAuth() || {}
  const router = useRouter()
  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()
  const { addToast } = useToasts()
  const [deletePost] = useDeletePostByIdMutation()
  const [insertPostMessage] = useInsertPostMessageMutation()
  const [likePostMessage] = useLikePostMessageMutation()
  const [unlikePostMessage] = useUnlikePostMessageMutation()
  const { getUserResponse } = useUserActions()

  const handleSubmitPostMessage = async (message) => {
    const { id } = post

    if (message && id) {
      try {
        await insertPostMessage({
          variables: { post_id: id, text: message },
        })
      } catch (e) {
        console.error(e)
      }
    }
  }

  const handleLikePostMessage = async (message) => {
    if (isAuthenticated) {
      if (message.likes.some((like) => like?.liked_by_user_id === authdUser?.id)) {
        await unlikePostMessage({
          variables: {
            post_message_id: message.id,
          },
        })
      } else {
        await likePostMessage({
          variables: {
            post_message_id: message.id,
          },
        })
      }
    }
  }

  const handleLikePost = () => {
    if (authState !== AUTH_STATES.AUTHENTICATED) {
      addToast(`You must login to like posts.`, {
        appearance: 'info',
        autoDismiss: true,
      })
    } else if (post?.likes?.some((like) => like.liked_by_user_id === authdUser?.id)) {
      unlikePost({
        variables: {
          post_id: post.id,
        },
      })
    } else {
      likePost({
        variables: {
          post_id: post.id,
        },
      })
    }
  }

  const handleDeletePost = async () => {
    const response = await getUserResponse({
      question: 'Are you sure you want to delete this post?',
    })
    if (response.accepts) {
      await deletePost({
        variables: {
          post_id: post.id,
        },
      })
      router.push('/posts')
    }
  }

  if (!post) return null
  const routingEnabled = !router.asPath?.includes(post.id.toString())
  const isAuthdUsersPost = post.posted_by_id === authdUser?.id
  return (
    <>
      <div className="flex flex-col w-full rounded-lg shadow-sm bg-nord6 dark:bg-nord0">
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <UserBanner user={post.posted_by} date={post.created_at} />
            {isAuthdUsersPost && (
              <Menu
                triggerSlot={
                  <div className="flex items-center justify-center rounded-full h-7 w-7 dark:hover:bg-black-23">
                    <DotsHorizontalIcon className="w-5 h-5" />
                  </div>
                }
                items={[
                  [
                    {
                      text: 'edit post',
                      show: isAuthdUsersPost,
                      handler: () => {
                        router.push(`/posts/${post.id}/edit`)
                      },
                    },
                    {
                      text: 'delete post',
                      show: isAuthdUsersPost,
                      handler: handleDeletePost,
                    },
                  ],
                ]}
              />
            )}
          </div>
          {post.body && (
            <div className="px-2 py-1.5 whitespace-pre-wrap text-lg">
              <HyperlinkAwareText>{post.body?.trim()}</HyperlinkAwareText>
            </div>
          )}

          {post.video_playback_id && (
            <div>
              <VideoPlayer playbackId={post.video_playback_id} />
            </div>
          )}
          {post.image_url && (
            <img
              src={preferCdn(post.image_url)}
              alt="post attachment"
              className="mx-auto rounded-md max-h-96"
            />
          )}

          {post.oembed && (
            <div className="mt-2">
              <OembedCard oembed={post.oembed} />
            </div>
          )}

          <div className="flex items-end justify-between mt-1">
            {post.tags?.length > 0 && (
              <div className="flex flex-wrap flex-grow ">
                {post.tags?.map?.((tag, idx) => (
                  <span
                    key={idx}
                    className={`chip cursor-pointer lowercase mr-2 mt-2 ${
                      activeTags && activeTags.includes(tag.tag)
                        ? 'bg-nord15 text-nord6'
                        : 'bg-nord5 dark:bg-nord1'
                    }`}
                    onClick={() => handleTagClick(tag.tag)}
                  >
                    {tag.tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex items-center">
              <Tippy
                content={post.likes?.map((like) => like?.user?.full_name).join(CSV_SEPARATOR_SPACE)}
                disabled={post.likes?.length === 0}
              >
                <div className={routingEnabled && 'mr-2'}>
                  <LikeCount
                    likedByAuthdUser={post.likes?.some(
                      (like) => like.liked_by_user_id === authdUser?.id,
                    )}
                    likeCount={post.likes?.length}
                    aria-label="like-unlike-post"
                    handleLike={handleLikePost}
                  />
                </div>
              </Tippy>

              {routingEnabled && (
                <KeyboardLink href={`/posts/${post.id}`}>
                  <div className="flex items-center justify-center rounded-full cursor-pointer h-7 w-7 dark:hover:bg-nord1">
                    <ArrowSmRightIcon className="w-5 h-5" />
                  </div>
                </KeyboardLink>
              )}
            </div>
          </div>
        </div>

        <FullMessages
          messages={post?.messages}
          // @ts-ignore
          handleLikeMessage={handleLikePostMessage}
          handleSubmit={handleSubmitPostMessage}
        />
      </div>
    </>
  )
}
