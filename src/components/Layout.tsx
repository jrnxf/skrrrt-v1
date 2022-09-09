import { useClickawayListener } from '@/hooks'
import Head from 'next/head'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Navbar } from './Navbar'

export const Layout = ({ children }) => {
  const [mobileNavToggled, setMobileNavToggled] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const handleCloseMobileSidebar = useCallback(() => {
    if (mobileNavToggled && window.innerWidth > 1024) {
      setMobileNavToggled(false)
    }
  }, [mobileNavToggled])

  useClickawayListener(sidebarRef, () => {
    setMobileNavToggled(false)
  })

  useEffect(() => {
    window.addEventListener('resize', handleCloseMobileSidebar)
  }, [handleCloseMobileSidebar])

  return (
    <>
      <div className="flex flex-col min-h-screen break-words">
        <div className="fixed top-0 z-40 w-full">
          <Navbar />
        </div>
        <main className="flex flex-row flex-grow pt-20 mb-4">
          <div id="layout-content" className="flex flex-col w-full px-3 pb-1 mx-auto">
            <div className="relative flex-grow">{children}</div>
          </div>
        </main>
      </div>
    </>
  )
}
