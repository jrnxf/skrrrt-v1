import React, { useEffect, useState } from 'react'
import { StgSetCard, StgSubmissionCard, HeaderLine } from '@/components'
import {
  StgByIdSubscriptionDocument,
  Stgs as tStgs,
  Stg_Sets as tStg_Sets,
  Stg_Submissions as tStg_Submissions,
  useStgByIdQuery,
} from '@/types'
import { useRouter } from 'next/router'
import Head from 'next/head'

const StgUser = () => {
  const router = useRouter()

  const { stg_id, username } = router.query

  const { data, subscribeToMore } = useStgByIdQuery({
    variables: {
      id: Number(stg_id),
    },
  })

  const [stg, setStg] = useState<tStgs>()
  const [userSet, setUserSet] = useState<tStg_Sets>()
  const [userSubmissions, setUserSubmissions] = useState<tStg_Submissions[]>([])

  useEffect(() => {
    if (data?.stgs_by_pk) {
      subscribeToMore({
        document: StgByIdSubscriptionDocument,
        variables: {
          id: data?.stgs_by_pk?.id,
        },
        onError: () => null,
        updateQuery: (previousStore, { subscriptionData }) => {
          if (subscriptionData?.data?.stgs_by_pk) {
            return subscriptionData.data
          } else {
            return previousStore
          }
        },
      })
    }
  }, [data, subscribeToMore])

  useEffect(() => {
    setStg(data?.stgs_by_pk as tStgs)
    setUserSet(data?.stgs_by_pk?.sets.find((s) => s.set_by.username === username) as tStg_Sets)
    setUserSubmissions(
      data?.stgs_by_pk?.submissions.filter(
        (s) => s.submitted_by?.username === username,
      ) as tStg_Submissions[],
    )
  }, [data, username])

  if (!stg) return null

  return (
    <>
      <Head>
        <title>skrrrt | games</title>
      </Head>
      <div className="w-full max-w-3xl mx-auto">
        <div className="w-full ">
          {userSet && <StgSetCard stg={stg} set={userSet} routingEnabled />}
        </div>

        {userSubmissions && userSubmissions.length > 0 && (
          <>
            <div className="my-10">
              <HeaderLine text="Submissions" />
            </div>
            <div className="grid w-full max-w-3xl grid-cols-1 mx-auto gap-y-6">
              {userSubmissions.map((submission) => (
                <StgSubmissionCard submission={submission} routingEnabled />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default StgUser
