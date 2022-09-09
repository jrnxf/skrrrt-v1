import { useRef } from 'react'

export const useCountRenders = (componentName) => {
  const renders = useRef(1)
  console.log(`${componentName} has rendered ${renders.current++} time(s)`)
}
