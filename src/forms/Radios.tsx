import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label?: string
  options: string[]
}
export const Radios: React.FC<Props> = ({ name, label, options = [] }) => {
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    register(name)
    return () => {
      unregister(name)
    }
  }, [register, unregister, name])

  return (
    <div>
      <label htmlFor={name} className="mr-2 label text-sm">
        {label}
      </label>
      <div>
        {options.map((option, idx) => (
          <label className="inline-flex items-center mr-6" key={idx}>
            <input
              tabIndex={0}
              key={idx}
              {...register(name)}
              name={name}
              type="radio"
              defaultChecked={idx === 0}
              value={option}
              className="radio"
            />
            <span className="ml-2">{option || 'none'}</span>
          </label>
        ))}
      </div>
      {errors?.[name] && (
        <p className="mt-1 font-semibold tracking-wide lowercase text-sm text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
