import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, Textarea } from '.'
import { Stg_Sets } from '@/types'
import { Alert, VideoDropzone, VideoPlayer } from '@/components'
import { Spinner } from '@/components/svg'

export const StgSetForm = ({
  handleSubmit,
  existingStgSet = null,
}: {
  handleSubmit: (data: any) => Promise<void>
  existingStgSet: Stg_Sets | null
}) => {
  const methods = useForm({
    defaultValues: {
      file: null,
      title: existingStgSet?.title || '',
      instructions: existingStgSet?.instructions || '',
    },
  })
  const { handleSubmit: rhfHandleSubmit, formState, setValue, getValues, trigger } = methods

  const handleOnDrop = (file) => {
    if (getValues().title === '') {
      setValue('title', file?.name?.slice(0, file.name.lastIndexOf('.')))
    }
    trigger(['file', 'title'])
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={rhfHandleSubmit(handleSubmit)} className="w-full">
        <div className="mb-4">
          {existingStgSet ? (
            <VideoPlayer playbackId={existingStgSet?.video_playback_id} />
          ) : (
            <VideoDropzone handleOnDrop={handleOnDrop} name="file" />
          )}
        </div>

        <div className="mb-4">
          <Input
            label="Title"
            name="title"
            placeholder="treyflip, doubleflip, combo, etc."
            rules={{
              required: 'Title required',
            }}
          />
        </div>

        <div className="mb-4">
          <Textarea
            label="Instructions"
            optional
            name="instructions"
            placeholder="sym, asym, switch, fakie, etc."
          />
        </div>

        {!existingStgSet && (
          <div className="mb-4">
            <Alert color="blue" title="Rules 📋" closeable={false}>
              For a set to be considered valid it must adhere to the following guidelines:
              <ul className="pl-8 list-disc">
                <li>Filmed within the past week. No clip recycling.</li>
                <li>Flatground tricks only. No use of stairs, rails, etc.</li>
                <li>Provide relevant instructions where possible.</li>
                <li>
                  No unnecessary hops! This includes hops on tire. Your set ends when you hop or
                  roll out.
                </li>
                <li>No edits. Please trim clips to size if necessary.</li>
              </ul>
              <p className="mt-1 italic">
                Failure to meet these guidelines could invalidate your set!
              </p>
            </Alert>
          </div>
        )}

        <div className="flex items-center justify-end">
          <button
            data-testid="game-set-form-submit"
            className="flex items-center btn bg-nord7"
            type="submit"
          >
            {existingStgSet ? 'Update' : 'Upload'}
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
