import { PostCard } from '@/components'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { addApolloState, initializeApollo } from '@/lib/apollo'
import {
  PostByIdQuery,
  PostByIdQueryDocument,
  PostByIdSubscriptionDocument,
  Posts,
  usePostByIdQuery,
} from '@/types'
import { Logger } from '@/middleware'
import { preferCdn } from '@/utils'

const PostPage: NextPage<{ post: Posts }> = () => {
  const router = useRouter()

  const { data, subscribeToMore } = usePostByIdQuery({
    variables: {
      id: Number(router.query.post_id),
    },
  })

  useEffect(() => {
    try {
      let unsubFn = () => {}

      if (data?.posts_by_pk?.id) {
        unsubFn = subscribeToMore({
          document: PostByIdSubscriptionDocument,
          variables: {
            id: data.posts_by_pk.id,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            return subscriptionData?.data?.posts_by_pk ? subscriptionData.data : previousStore
          },
        })
      }

      return () => {
        unsubFn?.()
      }
    } catch {
      //bad unsubscribe
    }
  }, [data, subscribeToMore])

  const post = data?.posts_by_pk
  return (
    <div>
      {post && (
        <Head>
          <title>skrrrt | post by {post?.posted_by?.full_name}</title>
          <meta
            property="og:title"
            content={`skrrrt ~ Post by ${post?.posted_by?.full_name} `}
            key="og:title"
          />
          <meta property="og:description" content={post?.body.slice(0, 100)} key="og:description" />
          <meta property="og:image" content={preferCdn(post?.posted_by?.avatar)} key="og:image" />
        </Head>
      )}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl overflow-y-auto scrollbar">
          {post ? (
            <PostCard post={post as Posts} />
          ) : (
            <div className="flex justify-center text-lg font-extrabold tracking-wider uppercase text-secondary">
              post not found
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostPage

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  Logger.info(`${ctx.req.method} ${ctx.req.url}`)

  const apolloClient = initializeApollo()

  await apolloClient.query<PostByIdQuery>({
    query: PostByIdQueryDocument,
    variables: {
      id: ctx.query.post_id,
    },
  })

  return addApolloState(apolloClient, {
    props: {},
  })
}
