import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAuth } from '@/context'
import { StgSetForm } from '@/forms'
import { Stg_Sets, useStgSetByIdQuery, useUpdateStgSetMutation } from '@/types'

const EditStgSet = () => {
  const router = useRouter()
  const { stg_id, set_id } = router.query
  const { authdUser } = useAuth()

  const [accessGranted, setAccessGranted] = useState(null)

  const [updateStgSet] = useUpdateStgSetMutation()

  const { data } = useStgSetByIdQuery({
    variables: {
      id: Number(set_id),
    },
  })

  useEffect(() => {
    const setById = data?.stg_sets_by_pk?.set_by_id
    if (setById) {
      if (setById === authdUser?.id) {
        setAccessGranted(true)
      } else {
        setAccessGranted(false)
        router.push('/access-denied')
      }
    }
  }, [data, router, authdUser])

  const onSubmit = async (data) => {
    const { title, instructions } = data
    try {
      await updateStgSet({ variables: { title, instructions } })
      router.push(`/games/stg/${stg_id}/sets/${set_id}`)
    } catch (e) {
      console.error(e)
    }
  }

  if (accessGranted === null) return null
  if (accessGranted === false) return <p>access denied</p>
  return (
    <>
      <Head>
        <title>skrrrt | edit set</title>
      </Head>
      <div className="flex flex-row justify-center max-w-3xl mx-auto">
        <div className="flex flex-col items-center w-full">
          <StgSetForm handleSubmit={onSubmit} existingStgSet={data?.stg_sets_by_pk as Stg_Sets} />
        </div>
      </div>
    </>
  )
}

export default EditStgSet
