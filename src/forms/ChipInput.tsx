import React, { FC, useCallback, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import classnames from 'classnames'
import { CSV_SEPARATOR } from '@/utils'

type Props = {
  label?: string
  subLabel?: string
  name: string
  maxTags?: number
  tagOptions: string[]
  rules?: any
}
export const ChipInput: FC<Props> = ({
  label,
  subLabel,
  name,
  maxTags,
  tagOptions,
  rules = {},
}) => {
  const {
    register,
    unregister,
    setValue,
    formState: { errors },
    getValues,
    trigger,
    watch,
  } = useFormContext()

  let chosenTags = watch(name)?.split(CSV_SEPARATOR)

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

  const handleTagClick = (clickedTag) => {
    const currentFormValue = getValues()[name]
    const currentTags = currentFormValue.split(CSV_SEPARATOR)

    if (currentFormValue === '') {
      setValue(name, clickedTag)
    } else if (currentTags?.includes(clickedTag)) {
      setValue(name, currentTags.filter((t) => t !== clickedTag).join(CSV_SEPARATOR))
    } else if (maxTags && currentTags.length < maxTags) {
      setValue(name, [...currentTags, clickedTag].join(CSV_SEPARATOR))
    }
    trigger(name)
  }

  return (
    <div>
      {label && (
        <label htmlFor={name} className="mr-2 label">
          {label}
          {subLabel && <span className="ml-1 text-sm">{subLabel}</span>}
        </label>
      )}
      <div>
        {tagOptions?.map((tag, idx) => (
          <span
            key={idx}
            className={classnames(
              'chip mr-2 mb-2 keyboard-focus-visible cursor-pointer select-none lowercase',
              chosenTags?.includes(tag) ? 'bg-nord15 text-nord6' : 'bg-nord5 dark:bg-nord1',
            )}
            onClick={() => handleTagClick(tag)}
            onKeyPress={() => handleTagClick(tag)}
            tabIndex={0}
          >
            {tag}
          </span>
        ))}
      </div>
      <input {...register(name)} name={name} type="text" className="hidden input" />
      {errors?.[name] && (
        <p className="mt-1 text-sm font-semibold tracking-wide lowercase text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
