import React, { useEffect, useState } from 'react'
import { usePreviousStgQuery } from '@/types'
import { calculateWinner } from '@/utils'

export const useLastStgTopThree = () => {
  const { data } = usePreviousStgQuery()
  const [lastStgTopThree, setLastStgTopThree] = useState([])

  useEffect(() => {
    const previous = data?.stgs?.[0]
    setLastStgTopThree(calculateWinner(previous?.submissions)?.slice(0, 3) || [])
  }, [data])

  return lastStgTopThree
}
