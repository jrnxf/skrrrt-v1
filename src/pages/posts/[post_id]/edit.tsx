import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { CSV_SEPARATOR } from '@/utils'
import { useAuth } from '@/context'
import { PostForm } from '@/forms'
import {
  E_Post_Tags_Enum,
  Posts,
  useDeletePostTagsByPostIdMutation,
  useInsertPostTagsMutation,
  usePostByIdQuery,
  useUpdatePostByIdMutation,
} from '@/types'
import Head from 'next/head'

const EditPost = () => {
  const router = useRouter()
  const { post_id } = router.query
  const { authdUser } = useAuth()

  const [accessGranted, setAccessGranted] = useState(false)

  const [updatePostById] = useUpdatePostByIdMutation()
  const [deletePostTagsByPostId] = useDeletePostTagsByPostIdMutation()
  const [insertPostTags] = useInsertPostTagsMutation()

  const { data } = usePostByIdQuery({
    variables: {
      id: Number(post_id),
    },
  })

  useEffect(() => {
    const postedById = data?.posts_by_pk?.posted_by_id
    if (postedById) {
      if (postedById === authdUser?.id) {
        setAccessGranted(true)
      } else {
        setAccessGranted(false)
        router.push('/access-denied')
      }
    }
  }, [data, router, authdUser])

  const onSubmit = async (data) => {
    let { body, tags } = data
    tags = tags?.split(CSV_SEPARATOR)
    if (tags.length > 0) {
      await deletePostTagsByPostId({
        variables: {
          post_id: Number(post_id),
        },
      })
      await insertPostTags({
        variables: {
          objects: tags.map((tag) => ({
            post_id,
            tag: tag as E_Post_Tags_Enum,
          })),
        },
      })
    }

    try {
      await updatePostById({
        variables: {
          post_id: Number(post_id),
          body,
        },
      })

      router.push('/posts')
    } catch (e) {
      console.error(e)
    }
  }

  if (!accessGranted) return null
  return (
    <>
      <Head>
        <title>skrrrt | edit post</title>
      </Head>
      <div className="flex flex-row justify-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center w-full">
          <PostForm
            handleSubmit={onSubmit}
            existingPost={data?.posts_by_pk as Posts}
            attachmentInput={false}
          />
        </div>
      </div>
    </>
  )
}

export default EditPost
