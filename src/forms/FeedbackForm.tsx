import { Spinner } from '@/components/svg'
import { Posts } from '@/types'
import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, Textarea } from '.'
import { FileDropzone } from '@/components'
import { useAuth } from '@/context'

type Props = {
  handleSubmit: (data: any) => any
}
export const FeedbackForm: FC<Props> = ({ handleSubmit }) => {
  const { authdUser } = useAuth()
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      file: null,
      email: authdUser?.email || '',
      feedback: '',
    },
  })

  const { handleSubmit: rhfHandleSubmit, formState, trigger } = methods

  const handleOnDrop = () => {
    trigger(['file'])
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={rhfHandleSubmit(handleSubmit)} className="w-full">
        <div className="mb-3">
          <Input
            data-testid="email-input"
            label="Email"
            name="email"
            rules={{
              required: 'Email required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email',
              },
            }}
          />
        </div>
        <div className="mb-3">
          <Textarea
            label="Feedback"
            name="feedback"
            rows={10}
            rules={{
              required: 'Feedback required',
            }}
          />
        </div>

        <div className="mb-3">
          <FileDropzone
            required={false}
            handleOnDrop={handleOnDrop}
            name="file"
            label="attachment"
          />
        </div>

        <div className="flex items-center justify-end my-4">
          <button
            data-testid="post-form-submit"
            className="flex items-center btn bg-nord7"
            type="submit"
          >
            Send
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
