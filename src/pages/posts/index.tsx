import { Menu, MultiSelect, PostCard, Spinner } from '@/components'
import { usePosts } from '@/hooks'
import { E_Post_Tags_Enum, Posts as tPosts, usePostTagOptionsQuery } from '@/types'
import { CSV_SEPARATOR } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

const Posts = () => {
  const router = useRouter()

  const {
    posts,
    activeTags,
    limit,
    setActiveTags,
    setLimit,
    resultCount,
    loading: postsLoading,
    paginationLimit: postsPaginationLimit,
  } = usePosts({
    initialActiveTags:
      ((router.query.t as string)?.split(CSV_SEPARATOR) as E_Post_Tags_Enum[]) || [],
  })

  const [displayedPosts, setDisplayedPosts] = useState<any>([])

  const { data: tagOptions } = usePostTagOptionsQuery()

  const handleTagClick = (clickedTag) => {
    if (activeTags?.includes(clickedTag)) {
      setActiveTags(activeTags.filter((t) => t !== clickedTag))
    } else {
      setActiveTags([...activeTags, clickedTag])
    }
  }

  useEffect(() => {
    setDisplayedPosts(posts?.map((view_post) => view_post.post) || [])
  }, [posts])

  const [sentryRef] = useInfiniteScroll({
    loading: postsLoading,
    hasNextPage: (displayedPosts?.length || 0) < resultCount,
    onLoadMore: () => setLimit(limit + postsPaginationLimit),
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 800px 0px',
  })

  return (
    <>
      <Head>
        <title>skrrrt | posts</title>
        <meta property="title" content={`skrrrt ~ posts`} key="title" />
        <meta property="og:title" content={`skrrrt ~ posts`} key="og:title" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-end justify-center mb-3 md:flex-row">
          <div className="flex flex-col items-end justify-center w-full max-w-2xl md:flex-row">
            <div className="mb-2 md:mb-0">
              <MultiSelect
                label="tags"
                items={tagOptions?.e_post_tags?.map((tag) => tag.type) || []}
                activeItems={activeTags}
                itemClicked={handleTagClick}
                handleBackspace={() => {
                  if (activeTags?.length > 0) {
                    setActiveTags((at) => at.slice(0, at.length - 1))
                  }
                }}
              />
            </div>

            <div className="ml-2 sm:ml-4">
              <Menu
                triggerSlot={
                  <div className="inline-flex items-center justify-center w-full px-2 py-2 font-medium rounded-md shadow-sm bg-nord6 dark:bg-nord0 focus:outline-none min-h-9">
                    <div className="mx-2 select-none label">actions</div>
                    <SelectorIcon
                      className="w-4 h-4 text-nord4 dark:text-nord2"
                      aria-hidden="true"
                    />
                  </div>
                }
                items={[
                  [
                    {
                      text: 'create post',
                      show: true,
                      handler: () => {
                        router.push('/posts/create')
                      },
                    },
                  ],
                ]}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mx-auto gap-y-4">
          {displayedPosts?.map((post) => (
            <PostCard
              key={post.id}
              activeTags={activeTags}
              post={post as tPosts}
              handleTagClick={handleTagClick}
            />
          ))}
        </div>
        <div ref={sentryRef}>
          {postsLoading && (
            <div className="flex justify-center my-4">
              <Spinner className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Posts
