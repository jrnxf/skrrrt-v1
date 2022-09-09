import moment from 'moment'
import Link from 'next/link'
import React, { FC } from 'react'
import { Stg_Submissions } from '@/types'

type Props = {
  stgId: string
  submissions: Stg_Submissions[]
}
export const StgHistory: FC<Props> = ({ stgId, submissions }) => (
  <ul className="max-h-96 overflow-x-auto mx-auto scrollbar max-w-3xl w-full p-4">
    {submissions.map((submission, idx) => (
      <li key={idx} className="text-sm text-secondary tracking-wide font-semibold py-2 flex">
        <span className="mr-1">{submissions.length - idx})</span>
        <Link
          href={`/games/stg/${stgId}/sets/${submission.set_landed.id}/submissions/${submission.id}`}
        >
          <div>
            {submission.submitted_by.full_name} submitted for{' '}
            {submission.set_landed.set_by.full_name}{' '}
            {moment(submission.created_at).format('[on] MMM Do [at] h:mm:ssa')}
          </div>
        </Link>
      </li>
    ))}
  </ul>
)
