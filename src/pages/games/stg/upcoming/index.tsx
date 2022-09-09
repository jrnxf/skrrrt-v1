import {
  Alert,
  StgSetsGrid,
  StgStatusToggles,
  Grid,
  HeaderLine,
  Menu,
  NextStgCountdown,
  Spinner,
  UserTile,
  GameTypeToggles,
} from '@/components'
import { useAuth } from '@/context'
import {
  E_Stg_Statuses_Enum,
  Stgs,
  StgsWhereSubscriptionDocument,
  useStgsWhereQuery,
  Users as tUsers,
} from '@/types'
import { MINIMUM_NUMBER_OF_RIDERS_STG } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const UpcomingStg = () => {
  const { authdUser, isAdmin } = useAuth()
  const router = useRouter()
  const [stg, setStg] = useState<Stgs>()

  let queryVariables = {
    variables: {
      where: {
        status: {
          _eq: E_Stg_Statuses_Enum.Upcoming,
        },
      },
    },
  }
  const { data, loading, subscribeToMore } = useStgsWhereQuery({
    ...(queryVariables as any),
    context: {
      headers: {
        'X-Hasura-Role': authdUser?.role,
      },
    },
  })

  useEffect(() => {
    try {
      const unsubFn = subscribeToMore({
        document: StgsWhereSubscriptionDocument,
        ...queryVariables,
        context: {
          headers: {
            'X-Hasura-Role': authdUser?.role,
          },
        },
        onError: () => null,
        updateQuery: (previousStore, { subscriptionData }) => {
          if (subscriptionData?.data?.stgs) {
            //TODO it seems like the subscribeToMore doesnt actually send the headers I want? sets is overriden to empty array here
            return subscriptionData.data
          } else {
            return previousStore
          }
        },
      })
      return () => {
        unsubFn?.()
      }
    } catch {
      // bad unsubscribe
    }
  }, [subscribeToMore, data, queryVariables])

  useEffect(() => setStg(data?.stgs?.[0] as Stgs), [data])

  const authdUserSet = stg?.sets?.find((s) => s?.set_by_id === authdUser?.id)

  const NoStgAlert = () => (
    <div className="w-full max-w-md mx-auto">
      <Alert title="Not found" closeable={false} color="blue">
        <p>There is no upcoming stg to display.</p>
      </Alert>
    </div>
  )

  return (
    <>
      <Head>
        <title>skrrrt | upcoming game</title>
      </Head>
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between md:block">
          <div className="mb-4 md:absolute md:top-0 md:right-0">
            <NextStgCountdown />
          </div>
          <div className="flex flex-col items-end justify-center mb-3 md:items-center md:flex-row">
            <div className="flex items-center">
              {/* <div>
              <GameTypeToggles />
            </div> */}
              <div className="ml-2 sm:ml-4">
                <StgStatusToggles />
              </div>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-4">
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
                      text: 'join game',
                      show: !authdUserSet,
                      handler: () => {
                        router.push('/games/stg/join')
                      },
                    },
                    {
                      text: 'view set',
                      show: !!authdUserSet,
                      handler: () => {
                        if (authdUserSet) {
                          router.push(`/games/stg/${stg.id}/sets/${authdUserSet?.id}`)
                        }
                      },
                    },
                  ],
                ]}
              />
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center my-4">
            <Spinner className="w-4 h-4" />
          </div>
        )}

        {data ? (
          <>
            {data.stgs.length === 0 ? (
              <div className="w-full my-10">
                <NoStgAlert />
              </div>
            ) : (
              <div className="flex flex-col w-full">
                <div className="w-full">
                  {stg && stg.players?.length > 0 ? (
                    <>
                      <div className="mb-6">
                        <HeaderLine
                          text="Lineup"
                          subtext={`${
                            stg.players.length || 0
                          }/${MINIMUM_NUMBER_OF_RIDERS_STG} riders needed ${
                            stg.players.length < MINIMUM_NUMBER_OF_RIDERS_STG ? '🚨' : '✅'
                          }`}
                        />
                      </div>

                      {stg?.players?.length > 0 && (
                        <div className="grid grid-cols-1 mx-auto gap-y-4">
                          {stg?.players?.map((stg_player, idx) => (
                            <UserTile key={idx} user={stg_player.player as tUsers} />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="w-full max-w-md mx-auto">
                      <Alert color="blue" title="No lineup" closeable={false}>
                        <p>This game has no registered riders</p>
                      </Alert>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          !loading && <NoStgAlert />
        )}
        {isAdmin && stg && (
          <div className="w-full">
            <div className="my-10">
              <HeaderLine text="Sets" subtext="(admin only)" />
            </div>
            <StgSetsGrid stg={stg} showActions={false} />
          </div>
        )}
      </div>
    </>
  )
}

export default UpcomingStg
