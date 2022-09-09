import React, { FC, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { classNames } from '@/utils'

type Props = {
  label?: string
  type?: string
  name: string
  rules?: any
  placeholder?: string
  autoFocus?: boolean
  hasIcon?: boolean
  [x: string]: any
}

export const Input: FC<Props> = ({
  label,
  type = 'text',
  name,
  rules,
  placeholder,
  hasIcon = false,
  autoFocus = false,
  ...rest
}) => {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext()

  const handleFormRegistration = useCallback(() => {
    if (rules) register(name, rules)
    else register(name)

    return () => {
      unregister(name)
    }
  }, [register, unregister, name, rules])

  useEffect(() => {
    handleFormRegistration()
  }, [handleFormRegistration])

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="text-sm label">
          {label}
        </label>
      )}
      <input
        className={classNames(
          'px-3 py-2 rounded-md border-0 text-lg w-full bg-nord6 dark:bg-nord0 focus:outline-none outline-none',
          hasIcon
            ? ' focus:ring-0'
            : 'shadow-sm focus-visible:ring-3 focus-visible:ring-nord15 focus-visible:ring-opacity-50',
        )}
        name={name}
        id={name}
        type={type || 'text'}
        {...register(name)}
        autoFocus={autoFocus}
        maxLength={100}
        placeholder={placeholder}
        {...rest}
      />
      {errors?.[name] && (
        <p className="mt-0.5 font-semibold tracking-wide lowercase text-xs text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
