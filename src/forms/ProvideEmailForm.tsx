import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { VideoDropzone } from '@/components'
import { Spinner } from '@/components/svg'
import { Input } from '.'

type Props = {
  handleSubmit: (data: any) => Promise<void>
}

export const ProvideEmailForm: FC<Props> = ({ handleSubmit }) => {
  const methods = useForm()
  const { handleSubmit: rhfHandleSubmit, formState, getValues, watch } = methods

  let allValues = watch()
  return (
    <FormProvider {...methods}>
      <form onSubmit={rhfHandleSubmit(handleSubmit)}>
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
        <div className="flex items-center justify-end">
          <button className="flex items-center btn bg-nord7" type="submit">
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
