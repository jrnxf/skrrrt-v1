import {
  E_Post_Tags_Enum,
  PostsWhereAggregateSubscriptionDocument,
  PostsWhereSubscriptionDocument,
  usePostsWhereAggregateQueryLazyQuery,
  usePostsWhereQueryLazyQuery,
} from '@/types'
import { useEffect, useState } from 'react'

export const usePosts = ({
  paginationLimit = 5,
  initialWhereClause = {},
  initialActiveTags = null,
}) => {
  const [posts, setPosts] = useState<any[]>([])
  const [limit, setLimit] = useState(paginationLimit)
  const [resultCount, setResultCount] = useState(0)
  const [whereClause] = useState<any>(initialWhereClause)
  const [activeTags, setActiveTags] = useState<E_Post_Tags_Enum[]>(initialActiveTags)

  useEffect(() => {
    let _whereClause: any = whereClause
    if (activeTags?.length > 0) {
      _whereClause = {
        post: {
          tags: {
            tag: {
              _in: activeTags,
            },
          },
        },
      }
    }
    fetchPosts({
      variables: {
        where: _whereClause,
        limit,
      },
    })

    fetchPostsAggregate({
      variables: {
        where: _whereClause,
      },
    })
  }, [whereClause, activeTags, limit])

  const [fetchPosts, { data, loading, subscribeToMore }] = usePostsWhereQueryLazyQuery()

  const [
    fetchPostsAggregate,
    { data: postsAggregateData, subscribeToMore: subscribeToMorePostsAggregateData },
  ] = usePostsWhereAggregateQueryLazyQuery()

  useEffect(() => {
    setLimit(paginationLimit)
  }, [activeTags])

  useEffect(() => {
    try {
      let unsubFn = () => {}
      if (subscribeToMore) {
        unsubFn = subscribeToMore({
          document: PostsWhereSubscriptionDocument,
          variables: {
            ...whereClause,
            limit,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            if (subscriptionData?.data?.v_posts_sorted) {
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
  }, [subscribeToMore, whereClause])

  useEffect(() => {
    setResultCount(postsAggregateData?.v_posts_sorted_aggregate.aggregate?.count || 0)
  }, [postsAggregateData])

  useEffect(() => {
    try {
      let unsubFn = () => {}
      if (subscribeToMorePostsAggregateData) {
        unsubFn = subscribeToMorePostsAggregateData({
          document: PostsWhereAggregateSubscriptionDocument,
          variables: {
            ...whereClause,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            if (subscriptionData?.data?.v_posts_sorted_aggregate) {
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
  }, [subscribeToMorePostsAggregateData, whereClause])

  useEffect(() => {
    if (data) {
      setPosts(data?.v_posts_sorted || [])
    }
  }, [data])

  return {
    activeTags,
    setActiveTags,
    limit,
    setLimit,
    resultCount,
    posts,
    loading,
    paginationLimit,
  }
}
