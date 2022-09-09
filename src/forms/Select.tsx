import React, { FC, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  label?: string
  name: string
  options: string[]
  handleChange?: () => void
  rules?: any
  defaultValue?: any
}

export const Select: FC<Props> = ({
  label,
  name,
  handleChange,
  options,
  rules,
  defaultValue = null,
}) => {
  const { register, unregister } = useFormContext()

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
    <>
      {label && (
        <label htmlFor={name} className="label text-sm">
          {label}
        </label>
      )}

      <select
        className="bg-nord6 dark:bg-nord0"
        name={name}
        {...register(name)}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {Object.values(options)?.map((o, idx) => (
          <option value={o} key={idx}>
            {o}
          </option>
        ))}
      </select>
    </>
  )
}
