import React, { FC, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload } from '@/components'
import { useFormContext } from 'react-hook-form'
import { useMediaUpload } from '@/context'
import { classNames } from '@/utils'

type Props = {
  name: string
  label?: string
  handleOnDrop?: (file: any) => any
  required?: boolean
}
export const ImageDropzone: FC<Props> = ({ name, label, required = false, handleOnDrop }) => {
  const {
    register,
    unregister,
    setValue,
    watch,
    formState: { errors },
    setError,
  } = useFormContext()
  const file = watch(name)

  const { uploadFileToS3 } = useMediaUpload()

  const onDrop = useCallback(
    async (acceptedFiles) => {
      const [file] = acceptedFiles
      if (file && uploadFileToS3) {
        const { url } = await uploadFileToS3({
          file,
          prefix: 'media/',
        })

        setValue(name, url, { shouldDirty: true })
        if (handleOnDrop) {
          handleOnDrop(file) // mostly used to event the name of the file in case the consuming form wants to set the value of another filed from it
        }
      }
    },
    [setValue, name, handleOnDrop, uploadFileToS3],
  )

  const onDropRejected = useCallback(
    (rejectedFiles) => {
      const [rejectedFileObj] = rejectedFiles

      switch (rejectedFileObj.errors[0].code) {
        case 'file-too-large':
          setError(name, {
            message: 'Images must be smaller than 20mb',
          })
          break
        case 'file-invalid-type':
          setError(name, {
            message: 'Only image uploads are supported',
          })
          break
        default:
          setError(name, {
            message: 'An unknown error occurred. Please contact a site admin.',
          })
      }
    },
    [setError, name],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: 'image/*',
    maxSize: 20000000, // 20mb
  })

  useEffect(() => {
    if (required) {
      register(name, {
        required: 'Image required',
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
        className="w-full h-32 rounded-md shadow-sm cursor-pointer bg-nord6 dark:bg-nord0 text-secondary focus:outline-none focus:ring-3 focus:ring-purple-11 focus:ring-opacity-50 hover:ring-3 hover:ring-purple-11 hover:ring-opacity-50"
      >
        <input name={name} {...getInputProps()} />

        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm label">{file?.name || 'Drag image here or click to select'}</p>
          <Upload className={classNames(isDragActive && 'pulse', 'text-nord2 dark:text-nord4')} />
        </div>
      </div>
      {errors?.[name] && (
        <p className="mt-1 text-sm font-semibold tracking-wide lowercase text-nord11">
          {errors[name].message.toString()}
        </p>
      )}
    </div>
  )
}
