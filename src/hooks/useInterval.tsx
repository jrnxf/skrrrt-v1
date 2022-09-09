import { useEffect, useRef } from 'react'

type Delay = number | null
type TimerHandler = (...args: any[]) => void

export const useInterval = (callback: TimerHandler, delay: Delay) => {
  const savedCallbackRef = useRef<TimerHandler>()

  // remember the latest callback if it changes
  useEffect(() => {
    savedCallbackRef.current = callback
  }, [callback])

  // set up the interval
  useEffect(() => {
    const handler = (...args: any[]) => savedCallbackRef.current!(...args)
    if (delay === null) {
      // don't schedule if no delay is specified
      return
    } else {
      const intervalId = setInterval(handler, delay)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [delay])
}
