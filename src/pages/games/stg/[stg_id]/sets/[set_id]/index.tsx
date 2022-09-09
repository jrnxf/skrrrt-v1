import { Alert, HeaderLine, StgSetCard, StgSubmissionCard } from '@/components'
import { useAuth, useUserActions } from '@/context'
import { useVariableUpdated } from '@/hooks'
import {
  E_Stg_Statuses_Enum,
  Stgs,
  StgSetByIdSubscriptionDocument,
  Stg_Sets,
  useDeleteStgPlayerMutation,
  useDeleteUpcomingStgSetMutation,
  useInsertStgSetMessageMutation,
  useLikeStgSetMessageMutation,
  useStgSetByIdQuery,
  useUnlikeStgSetMessageMutation,
} from '@/types'
import { STG_SET_CARD_VIEW_TYPES } from '@/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const StgSet = () => {
  const router = useRouter()
  const [viewType, setViewType] = useState<STG_SET_CARD_VIEW_TYPES | undefined>(
    router.query?.view === STG_SET_CARD_VIEW_TYPES.SUBMISSIONS
      ? STG_SET_CARD_VIEW_TYPES.SUBMISSIONS
      : STG_SET_CARD_VIEW_TYPES.MESSAGES,
  )

  useVariableUpdated(viewType)
  const { authdUser, isAuthenticated } = useAuth()
  const { getUserResponse } = useUserActions()

  const [insertStgSetMessage] = useInsertStgSetMessageMutation()
  const [likeStgSetMessage] = useLikeStgSetMessageMutation()
  const [unlikeStgSetMessage] = useUnlikeStgSetMessageMutation()

  const [deleteStgSet] = useDeleteUpcomingStgSetMutation()
  const [deleteStgPlayer] = useDeleteStgPlayerMutation()
  const [deleted, setDeleted] = useState(false)

  const { data, loading, subscribeToMore } = useStgSetByIdQuery({
    variables: {
      id: Number(router.query.set_id),
    },
  })

  useEffect(() => {
    if (router.query?.view && router.query.view !== viewType) {
      // @ts-ignore
      setViewType(router.query.view)
    }
  }, [router])

  useEffect(() => {
    try {
      let unsubFn = () => {}
      if (set?.id) {
        unsubFn = subscribeToMore({
          document: StgSetByIdSubscriptionDocument,
          variables: {
            id: data.stg_sets_by_pk.id,
          },
          onError: () => null,
          updateQuery: (previousStore, { subscriptionData }) => {
            return subscriptionData?.data ? subscriptionData.data : previousStore
          },
        })
      }
      return () => {
        unsubFn?.()
      }
    } catch {
      // bad unsubscribe
    }
  }, [data, subscribeToMore])

  const set = data?.stg_sets_by_pk
  const setIsPublic = set?.stg?.status !== E_Stg_Statuses_Enum.Upcoming

  if (loading || deleted) return null
  if (set) {
    return (
      <>
        <Head>
          <title>skrrrt | set</title>
        </Head>
        <div className="flex flex-col items-center max-w-3xl mx-auto">
          <div className="w-full overflow-y-auto scrollbar">
            {set?.stg?.status === E_Stg_Statuses_Enum.Upcoming &&
            set?.set_by_id !== authdUser?.id ? (
              <div>
                <Alert title="Set Hidden" closeable={false} color="red">
                  <p>This set will remain hidden until the game is active.</p>
                </Alert>
              </div>
            ) : (
              <StgSetCard
                allowSubmissions
                stg={data.stg_sets_by_pk.stg as Stgs}
                set={data.stg_sets_by_pk as Stg_Sets}
                routingEnabled={false}
                showSubmissionCount={false}
                showActions={set?.stg?.status !== E_Stg_Statuses_Enum.Upcoming}
              />
            )}

            {setIsPublic && (
              <>
                <div className="my-10">
                  <HeaderLine text="Submissions" />
                </div>

                {set.submissions_where_landed?.length > 0 ? (
                  <div className="w-full">
                    <div className="grid w-full grid-cols-1 mx-auto gap-y-4">
                      {data.stg_sets_by_pk.submissions_where_landed.map((submission) => (
                        <div key={submission.id}>
                          {/* @ts-ignore */}
                          <StgSubmissionCard submission={submission} showSetTitle={false} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-md mx-auto">
                    <Alert title="No submissions" closeable={false} color="blue">
                      <p>There are no submissions for this set</p>
                    </Alert>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className="flex justify-center text-lg font-extrabold tracking-wider uppercase text-secondary">
        set not found
      </div>
    )
  }
}

export default StgSet
