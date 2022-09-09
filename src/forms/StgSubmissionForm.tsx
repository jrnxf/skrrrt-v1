import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { VideoDropzone } from '@/components'
import { Spinner } from '@/components/svg'

type Props = {
  handleSubmit: (data: any) => Promise<void>
}

export const StgSubmissionForm: FC<Props> = ({ handleSubmit }) => {
  const methods = useForm()
  const { handleSubmit: rhfHandleSubmit, formState } = methods

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={rhfHandleSubmit(handleSubmit)} className="w-full">
          <div className="mb-4">
            <VideoDropzone name="file" />
          </div>
          <div className="flex items-center justify-end">
            <button
              data-testid="game-submission-form-submit"
              className="btn bg-nord7 flex items-center"
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
    </>
  )
}
