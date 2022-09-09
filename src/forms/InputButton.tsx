import { PlusIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

export const InputButton = ({ handleUpdate, maxLength = 50, placeholder = '', ...rest }) => {
  const [value, setValue] = useState<string>('')
  return (
    <div className="relative flex items-center w-full">
      <input
        className="w-full px-3 py-2 text-base leading-tight border-0 rounded shadow-sm text-primary bg-nord6 dark:bg-nord0 keyboard-focus-visible"
        type={'text'}
        value={value}
        onChange={(e) => setValue(e.target.value as string)}
        maxLength={maxLength}
        placeholder={placeholder}
        {...rest}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            handleUpdate(value)
            setValue('')
          }
        }}
      />
      <button
        className="absolute rounded-md cursor-pointer right-2 keyboard-focus-visible"
        type="button"
        onClick={() => {
          handleUpdate(value)
          setValue('')
        }}
      >
        <PlusIcon className="w-5 h-5" />
      </button>
    </div>
  )
}
