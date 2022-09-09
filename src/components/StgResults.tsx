import moment from 'moment'
import { useRouter } from 'next/router'
import converter from 'number-to-words'
import React, { useMemo } from 'react'
import { getHometown } from '@/utils'
import { Flag } from './Flag'
import { Table } from '.'

export const StgResults = ({ stgId, orderedResults }) => {
  const router = useRouter()

  const columns = useMemo(
    () => [
      {
        Header: 'Rank',
        accessor: 'rank',
      },
      {
        Header: 'Rider',
        accessor: (row) => {
          const hometown = getHometown(row.player)
          return (
            <div className="flex items-center">
              {hometown && (
                <span className="mr-3">
                  <Flag
                    location={hometown}
                    dimensions="1.5em"
                    // placement="right"
                  />
                </span>
              )}
              {row.player.full_name}
            </div>
          )
        },
      },

      {
        Header: 'Sets Landed',
        accessor: 'sets_landed',
      },
      {
        Header: 'Last Submission',
        accessor: 'last_submitted_at',
        Cell: ({ value }) => moment(value).format('MMM Do, h:mm:ssa'),
      },
    ],
    [],
  )
  return (
    <Table
      data={orderedResults}
      columns={columns}
      getRowProps={(row) => ({
        onClick: () => {
          router.push(`/games/stg/${stgId}/users/${row.original.player.username}`)
        },
      })}
    />
  )
}
