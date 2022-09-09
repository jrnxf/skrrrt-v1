import { useWindowSize } from '@react-hook/window-size'
import React, { FC, useEffect, useRef } from 'react'
import StackGrid from 'react-stack-grid'

type Props = {
  children: any
  fullWidth?: boolean
  customColumnWidth?: string
  customGutters?: number
  appearDelay?: number
}
export const Grid: FC<Props> = ({
  children,
  fullWidth = false,
  customColumnWidth = undefined,
  customGutters = 25,
  appearDelay = 0,
}) => {
  const ANIMATION_DURATION = 400
  const [windowWidth] = useWindowSize()
  const grid = useRef(null)

  const resizeGrid = () => {
    if (grid.current) {
      setInterval(() => {
        grid.current.updateLayout()
      }, ANIMATION_DURATION + 100) // 100 is a guess for buffer
    }
  }

  useEffect(resizeGrid, [children, windowWidth])

  if (children.length === 0) return null
  return (
    <StackGrid
      gridRef={(r) => (grid.current = r)}
      columnWidth={
        customColumnWidth
          ? customColumnWidth
          : fullWidth
          ? '100%'
          : windowWidth >= 1536
          ? '25%'
          : windowWidth >= 1280
          ? '33.33%'
          : windowWidth >= 1024
          ? '50%'
          : '100%'
      }
      duration={ANIMATION_DURATION}
      gutterWidth={customGutters}
      gutterHeight={customGutters}
      monitorImagesLoaded
      appearDelay={appearDelay}
    >
      {children}
    </StackGrid>
  )
}
