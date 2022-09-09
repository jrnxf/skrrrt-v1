import { Stgs, Stg_Sets } from '@/types'
import { getHometown } from '@/utils'
import Tippy from '@tippyjs/react'
import { useRouter } from 'next/router'
import React, { FC, useMemo } from 'react'
import { Row, useFilters, useSortBy, useTable } from 'react-table'
import { Table } from '.'
import { Flag } from './Flag'

const landedBySortFn = (aRow: Row<Stg_Sets>, bRow: Row<Stg_Sets>, columnId: string) => {
  const aCount = aRow.original.submissions_where_landed_aggregate.aggregate.count
  const bCount = bRow.original.submissions_where_landed_aggregate.aggregate.count
  if (aCount < bCount) return 1
  else if (aCount > bCount) return -1
  else return 0
}

const caseInsensitiveSortFn = (aRow: Row, bRow: Row, columnId: string) => {
  const aVal = aRow.values?.[columnId]?.toLowerCase()
  const bVal = bRow.values?.[columnId]?.toLowerCase()
  if (aVal < bVal) return 1
  else if (aVal > bVal) return -1
  else return 0
}

type Props = {
  stg: Stgs
}

export const StgSetsTable: FC<Props> = ({ stg }) => {
  const router = useRouter()
  const columns = useMemo(
    () => [
      {
        Header: 'name',
        accessor: 'set_by.full_name',
        Cell: (data) => {
          const setBy = data.cell.row.original?.set_by
          const hometown = getHometown(setBy)
          return (
            <div className="flex items-center">
              {hometown && (
                <span className="mr-3">
                  <Flag location={hometown} dimensions="1.5em" />
                </span>
              )}
              <div className="truncate max-w-32">{data.cell.value}</div>
            </div>
          )
        },
        sortType: 'caseInsensitive',
        sortDescFirst: true,
      },
      {
        Header: 'set',
        accessor: 'title',
        sortType: 'caseInsensitive',
        sortDescFirst: true,
        Cell: (data) => {
          return <div className="truncate max-w-64">{data.cell.value}</div>
        },
      },
      {
        Header: 'instructions',
        accessor: 'instructions',
        sortType: 'caseInsensitive',
        sortDescFirst: true,
        Cell: (data) => {
          return <div className="truncate max-w-64">{data.cell.value}</div>
        },
      },
      {
        Header: 'Landed By',
        Cell: (data) => {
          const set: Stg_Sets = data.cell.row.original
          return (
            <Tippy
              content={set.submissions_where_landed
                ?.map((x) => x.submitted_by?.full_name)
                .join(', ')}
              // placement="left"
              disabled={set.submissions_where_landed?.length === 0}
            >
              <div className="cursor-pointer">
                {set.submissions_where_landed_aggregate.aggregate?.count} /{' '}
                {stg.players?.length - 1}
              </div>
            </Tippy>
          )
        },
        canSort: true,
        sortType: 'landedBy',
      },
    ],
    [stg.players],
  )

  const sortTypes = useMemo(
    () => ({
      landedBy: landedBySortFn,
      caseInsensitive: caseInsensitiveSortFn,
    }),
    [],
  )

  const routeTo = (set: Stg_Sets) => {
    set && router.push(`/games/stg/${stg.id}/sets/${set.id}`)
  }

  return (
    <Table
      data={stg.sets}
      columns={columns}
      sortTypes={sortTypes}
      getRowProps={(row) => ({
        onClick: () => {
          routeTo(row.original)
        },
      })}
    />
  )
}
