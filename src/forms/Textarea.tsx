import React, { FC, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

type Props = {
  name: string
  label?: string
  onChange?: (e) => void
  rules?: any
  optional?: boolean
  placeholder?: string
  autoFocus?: boolean
  rows?: number
  maxLength?: number
}

export const Textarea: FC<Props> = ({
  name,
  label,
  placeholder,
  rules,
  onChange,
  autoFocus,
  rows = 5,
  optional = false,
  maxLength = 10000,
}) => {
  const {
    register,
    unregister,
    formState: { errors },
    getValues,
  } = useFormContext()

  const defaultValue = getValues()?.name

  const handleOnChange = (e) => {
    if (onChange) {
      onChange(e)
    }
  }

  const handleFormRegistration = useCallback(() => {
    if (rules) {
      register(name, rules)
    } else {
      register(name)
    }
    return () => {
      unregister(name)
    }
  }, [register, unregister, name, rules])

  useEffect(() => {
    handleFormRegistration()
  }, [handleFormRegistration])

  return (
    <div>
      {label && (
        <label htmlFor={name} className="text-sm label">
          {label}
          {optional && <span className="italic"> - optional</span>}
        </label>
      )}
      <TextareaAutosize
        id={name}
        name={name}
        autoFocus={autoFocus}
        minRows={rows}
        placeholder={placeholder}
        className="w-full textarea bg-nord6 dark:bg-nord0"
        defaultValue={defaultValue}
        {...register(name)}
        maxLength={maxLength}
        onChange={handleOnChange}
      />
      {errors?.[name] && (
        <p className="font-semibold tracking-wide lowercase text-sm text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
