import { useEffect } from 'react'

export const useClickawayListener = (ref, cb) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref?.current?.contains(event.target)) {
        cb()
      }
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchend', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchend', listener)
    }
  }, [ref, cb])
}
