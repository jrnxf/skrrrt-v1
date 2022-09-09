import React, { FC, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from '@/components'
import { useFormContext } from 'react-hook-form'

type Props = {
  name: string
  label?: string
  required?: boolean
  handleOnDrop?: (file: any) => any
}

export const VideoDropzone: FC<Props> = ({ name, label, required = true, handleOnDrop }) => {
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
    setError,
    trigger,
  } = useFormContext()

  const file = watch(name)
  const onDrop = useCallback(
    (acceptedFiles) => {
      const [file] = acceptedFiles
      if (file) {
        setValue(name, file, { shouldDirty: true })
        trigger(name)
        if (handleOnDrop) {
          handleOnDrop(file) // mostly used to event the name of the file in case the consuming form wants to set the value of another filed from it
        }
      }
    },
    [name, trigger, setValue, handleOnDrop],
  )

  useEffect(() => {
    if (required) {
      register(name, {
        required: 'Video required',
      })
    } else {
      register(name)
    }

    return () => {
      unregister(name)
    }
  }, [register, unregister, name, required])

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
            message: 'Only video files are supported.',
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
    accept: 'video/*',
    maxSize: 100000000, // 100mb
  })

  return (
    <div className="w-full">
      {label && <label className="label text-sm">{label}</label>}
      <div
        {...getRootProps()}
        className="w-full h-32 border-2 border-dotted rounded-md shadow-sm cursor-pointer bg-nord5 dark:bg-nord1 border-nord1 dark:border-nord5 text-nord4 dark:text-nord2 focus:outline-none focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 hover:ring-3 hover:ring-purple-11 hover:ring-opacity-50"
      >
        <input name={name} {...getInputProps()} />

        <div className="flex flex-col items-center justify-center h-full">
          <p className="label text-sm">{file?.name || 'Drag video file here or click to select'}</p>
          <Upload className={isDragActive ? 'pulse' : ''} />
        </div>
      </div>
      {errors?.[name] && (
        <p className="mt-1 font-semibold tracking-wide lowercase text-sm text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
