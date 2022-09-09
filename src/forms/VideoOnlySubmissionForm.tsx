import { Spinner, VideoDropzone } from '@/components'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

export const VideoOnlySubmissionForm = ({
  handleSubmit,
}: {
  handleSubmit: (data: any) => Promise<void>
}) => {
  const methods = useForm({
    defaultValues: {
      file: null,
    },
  })

  const { handleSubmit: rhfHandleSubmit, formState, trigger } = methods

  const handleOnDrop = (file) => {
    trigger(['file'])
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={rhfHandleSubmit(handleSubmit)} className="w-full">
        <div className="mb-4">
          <VideoDropzone handleOnDrop={handleOnDrop} name="file" />
        </div>

        <div className="flex items-center justify-end">
          <button
            data-testid="game-set-form-submit"
            className="flex items-center btn bg-nord7"
            type="submit"
          >
            Upload
            {formState.isSubmitting && (
              <div className="ml-1">
                <Spinner className="w-4 h-4" />
              </div>
            )}
          </button>
        </div>
      </form>
    </FormProvider>
  )
}
