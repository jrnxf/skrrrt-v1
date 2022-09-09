import React, { FC, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useFormContext } from 'react-hook-form'
import { classNames } from '../utils'
import { Upload } from './svg'

type Props = {
  name: string
  label?: string
  required?: boolean
  handleOnDrop?: (file: any) => any
}

export const FileDropzone: FC<Props> = ({ name, label, required = true, handleOnDrop }) => {
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useFormContext()

  const file = watch(name)

  const onDrop = useCallback(
    (acceptedFiles) => {
      const [file] = acceptedFiles
      if (file) {
        setValue(name, file, { shouldDirty: true })
        if (handleOnDrop) {
          handleOnDrop(file) // mostly used to event the name of the file in case the consuming form wants to set the value of another filed from it
        }
      }
    },
    [setValue, name, handleOnDrop],
  )

  const onDropRejected = useCallback(
    (rejectedFiles) => {
      const [rejectedFileObj] = rejectedFiles

      switch (rejectedFileObj.errors[0].code) {
        case 'file-too-large':
          setError(name, {
            message: 'Files must be smaller than 100mb',
          })
          break
        case 'file-invalid-type':
          setError(name, {
            message: 'Only image and video files are supported',
          })
          break
        default:
          setError(name, {
            message: 'An unknown error occurred. Please contact a site admin.',
          })
      }
    },
    [name, setError],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: ['video/*', 'image/*'],
    maxSize: 100000000,
  })

  useEffect(() => {
    if (required) {
      register(name, {
        required: 'File required',
      })
    } else {
      register(name)
    }

    return () => {
      unregister(name)
    }
  }, [register, unregister, name, required])

  return (
    <div className="w-full">
      {label && <label className="text-sm label">{label}</label>}
      <div
        {...getRootProps()}
        className="w-full h-32 rounded-md cursor-pointer bg-nord5 dark:bg-nord1 text-nord4 dark:text-nord2 focus:outline-none focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 hover:ring-3 hover:ring-purple-11 hover:ring-opacity-50"
      >
        <input name={name} {...getInputProps()} />
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm label">{file?.name || 'Drag file here or click to select'}</p>
          <Upload className={classNames(isDragActive && 'pulse', 'text-nord2 dark:text-nord4')} />
        </div>
      </div>
      {errors?.[name] && (
        <p className="text-sm font-semibold tracking-wide lowercase text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
