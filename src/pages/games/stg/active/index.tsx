import {
  Alert,
  StgHistoryTable,
  StgResults,
  StgSetsGrid,
  StgSetsTable,
  StgStatusToggles,
  Menu,
  NextStgCountdown,
  Spinner,
  GameTypeToggles,
} from '@/components'
import {
  E_Stg_Statuses_Enum,
  Stgs,
  StgsWhereSubscriptionDocument,
  useStgsWhereQuery,
} from '@/types'
import { calculateWinner, STG_SET_DISPLAY_TYPES } from '@/utils'
import { SelectorIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse'

const ActiveStg = () => {
  const [showResults, setShowResults] = useState(true)
  const [displayType, setDisplayType] = useState(STG_SET_DISPLAY_TYPES.CARD)
  const [showStgHistory, setShowStgHistory] = useState(false)
  const queryVariables = {
    variables: {
      where: {
        status: {
          _eq: E_Stg_Statuses_Enum.Active,
        },
      },
    },
  }

  const { data, loading, subscribeToMore } = useStgsWhereQuery(queryVariables)

  useEffect(() => {
    try {
      const unsubFn = subscribeToMore({
        document: StgsWhereSubscriptionDocument,
        ...queryVariables,
        onError: () => null,
        updateQuery: (previousStore, { subscriptionData }) => {
          if (subscriptionData?.data?.stgs) {
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

  const activeStg = data?.stgs?.[0] as Stgs
  const orderedResults = calculateWinner(activeStg?.submissions)

  const NoStgAlert = () => (
    <div className="w-full max-w-md mx-auto">
      <Alert title="Not found" closeable={false} color="blue">
        <p>There is no active stg to display.</p>
      </Alert>
    </div>
  )

  return (
    <>
      <Head>
        <title>skrrrt | active stg</title>
      </Head>
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-between md:block">
          <div className="mb-4 md:absolute md:top-0 md:left-0">
            <NextStgCountdown />
          </div>
          <div className="flex flex-col items-end justify-center mb-3 md:items-center md:flex-row">
            <div className="flex items-center">
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
                      text: showResults ? 'hide results' : 'show results',
                      show: true,
                      handler: () => {
                        setShowResults(!showResults)
                      },
                    },
                    {
                      text: showStgHistory ? 'hide history' : 'show history',
                      show: true,
                      handler: () => {
                        setShowStgHistory(!showStgHistory)
                      },
                    },
                  ],
                  [
                    {
                      text: displayType === STG_SET_DISPLAY_TYPES.CARD ? 'table view' : 'card view',
                      show: true,
                      handler: () => {
                        setDisplayType(
                          displayType === STG_SET_DISPLAY_TYPES.CARD
                            ? STG_SET_DISPLAY_TYPES.TABLE
                            : STG_SET_DISPLAY_TYPES.CARD,
                        )
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
            <div className="w-full">
              <Collapse
                isOpened={(showResults && orderedResults && orderedResults.length > 0) || false}
              >
                {orderedResults && orderedResults.length > 0 && (
                  <div className="pb-4">
                    <div className="w-full max-w-5xl mx-auto overflow-auto rounded-lg shadow-sm scrollbar max-h-96">
                      <StgResults stgId={activeStg?.id} orderedResults={orderedResults} />
                    </div>
                  </div>
                )}
              </Collapse>
            </div>

            <div className="w-full">
              <Collapse isOpened={showStgHistory || false}>
                <div className="pb-4">
                  <div className="w-full max-w-5xl mx-auto overflow-auto rounded-lg shadow-sm scrollbar max-h-96">
                    <StgHistoryTable stg={activeStg} />
                  </div>
                </div>
              </Collapse>
            </div>
            {activeStg?.sets?.length > 0 ? (
              <>
                {displayType === STG_SET_DISPLAY_TYPES.CARD ? (
                  <StgSetsGrid stg={activeStg} />
                ) : (
                  <div className="w-full max-w-5xl mx-auto overflow-auto rounded-lg shadow-sm scrollbar max-h-96">
                    <StgSetsTable stg={activeStg} />
                  </div>
                )}
              </>
            ) : (
              <NoStgAlert />
            )}
          </>
        ) : (
          !loading && <NoStgAlert />
        )}
      </div>
    </>
  )
}

export default ActiveStg
