import Tippy from '@tippyjs/react'
import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { CSV_SEPARATOR, CSV_SEPARATOR_SPACE } from '@/utils'

type Props = {
  label?: string
  name: string
  items: string[]
  maxLength?: number
  placeholder?: string
  tippyText?: string
}
export const FreeTagInput: FC<Props> = ({
  label,
  name,
  items = [],
  maxLength = 100,
  placeholder,
  tippyText = null,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()

  const tags = watch(name)
    ?.split(CSV_SEPARATOR) // dont want the CSV_SEPATOR here bc I want to immediately trim the comma from the UI
    ?.filter((tag: string) => tag.trim() !== '')
  return (
    <div className="mt-2">
      {label && tippyText ? (
        <Tippy content={tippyText}>
          <label htmlFor={name} className="mr-2 label">
            {label}
          </label>
        </Tippy>
      ) : (
        <label htmlFor={name} className="mr-2 label">
          {label}
        </label>
      )}
      {tags.map((tag, idx) => (
        <span key={idx} className="mb-2 mr-2 chip bg-nord5 dark:bg-nord1">
          {tag}
        </span>
      ))}
      <input
        {...register(name)}
        name={name}
        type="text"
        className="w-full input bg-nord5 dark:bg-nord1 h-9"
        defaultValue={items.join(CSV_SEPARATOR_SPACE)}
        maxLength={maxLength}
        placeholder={placeholder}
      />
      {errors?.[name] && (
        <p className="mt-1 font-semibold tracking-wide lowercase text-sm text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
