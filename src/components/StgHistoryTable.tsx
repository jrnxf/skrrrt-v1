import moment from 'moment'
import { useRouter } from 'next/router'
import React, { FC, useMemo } from 'react'
import { Table } from '.'
import { Stgs, Stg_Submissions } from '@/types'

type Props = {
  stg: Stgs
}
export const StgHistoryTable: FC<Props> = ({ stg }) => {
  const router = useRouter()

  const columns = useMemo(
    () => [
      {
        Header: 'Rider',
        accessor: 'submitted_by.full_name',
      },
      {
        Header: 'Set',
        accessor: 'set_landed.title',
        Cell: ({ value }) => <div className="block w-40 truncate">{value}</div>,
      },
      {
        Header: 'Submission Time',
        accessor: 'created_at',
        Cell: ({ value }) => moment(value).format('MMM Do, h:mm:ssa'),
      },
    ],
    [],
  )
  const routeTo = (submission: Stg_Submissions) => {
    submission &&
      router.push(
        `/games/stg/${stg.id}/sets/${submission.set_landed.id}/submissions/${submission.id}`,
      )
  }

  return (
    <Table
      data={stg?.submissions || []}
      columns={columns}
      getRowProps={(row) => ({
        onClick: () => {
          routeTo(row.original)
        },
      })}
    />
  )
}
