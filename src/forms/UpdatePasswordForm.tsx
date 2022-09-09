import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { VideoDropzone } from '@/components'
import { Spinner } from '@/components/svg'
import { Input } from '.'

type Props = {
  handleSubmit: (data: any) => Promise<void>
}

export const UpdatePasswordForm: FC<Props> = ({ handleSubmit }) => {
  const methods = useForm()
  const { handleSubmit: rhfHandleSubmit, formState, getValues, watch } = methods

  let allValues = watch()
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={rhfHandleSubmit(handleSubmit)}>
          <div className="mb-1">
            <Input
              data-testid="password-input"
              label="Password"
              name="password"
              type="password"
              rules={{
                required: 'Password required',
              }}
              aria-label="password-input"
            />
          </div>
          <div className="mb-3">
            <Input
              data-testid="confirm-password-input"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              rules={{
                required: 'Password confirmation required',
                validate: (value) => value === watch('password') || "Passwords don't match!",
              }}
              aria-label="confirm-password-input"
            />
          </div>

          <div className="flex items-center justify-end">
            <button className="btn bg-nord7 flex items-center" type="submit">
              Update
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
