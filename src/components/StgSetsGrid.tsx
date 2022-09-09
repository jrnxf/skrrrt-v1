import React, { FC } from 'react'
import { Stgs } from '@/types'
import { StgSetCard } from './StgSetCard'

type Props = {
  stg: Stgs
  showActions?: boolean
}
export const StgSetsGrid: FC<Props> = ({ stg, showActions = true }) => {
  if (stg?.sets?.length > 0) {
    return (
      <div className="grid w-full max-w-3xl grid-cols-1 mx-auto gap-y-6">
        {stg.sets.map((set) => (
          <StgSetCard stg={stg} key={set.id} set={set} routingEnabled showActions={showActions} />
        ))}
      </div>
    )
  } else {
    return null
  }
}
