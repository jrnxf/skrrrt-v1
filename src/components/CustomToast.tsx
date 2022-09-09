import React from 'react'
import { useTheme } from '@/context'
import { classNames } from '@/utils'

export const CustomToast = ({ appearance, children, ...rest }) => {
  const { isDarkMode } = useTheme()

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div
        className={classNames(
          appearance === 'info' && 'bg-nord10',
          appearance === 'success' && 'bg-nord14',
          appearance === 'error' && 'bg-nord11',
          'font-semibold text-lg text-primary p-3 m-2 rounded-lg shadow',
        )}
      >
        {children}
      </div>
    </div>
  )
}
