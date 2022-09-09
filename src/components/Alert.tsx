import React, { useEffect, useState } from 'react'
import { X } from './svg'

export const Alert = ({ title, children, color, handleClose = () => {}, closeable = true }) => {
  const [colorClasses, setColorClasses] = useState('')

  // TODO figure out why these classes are being purged (they're not applying)
  useEffect(() => {
    let _colorClasses = ''
    switch (color) {
      case 'green':
        _colorClasses = 'bg-nord14'
        break
      case 'red':
        _colorClasses = 'bg-nord11'
        break
      case 'blue':
        _colorClasses = 'bg-nord10'
        break
    }
    setColorClasses(_colorClasses)
  }, [color])

  return (
    <div
      className={`px-4 py-3 rounded-md relative text-nord6 shadow-sm ${colorClasses}`}
      role="alert"
    >
      <div className="flex flex-row items-center">
        <p className="text-sm font-black tracking-wider uppercase">{title}</p>
      </div>
      <div className="text-sm font-medium">{children}</div>
      {closeable && (
        <span
          className="absolute top-0 right-0 px-4 py-3"
          data-testid="closeModal"
          onClick={handleClose}
        >
          <X strokeWidth={2.5} size={20} role="button" />
        </span>
      )}
    </div>
  )
}
