import { Alert, KeyboardLink, Spinner } from '@/components'
import { useAuth } from '@/context'
import { Input } from '@/forms'
import { ERROR_TYPES } from '@/models/enums/error-types.enum'
import { getErrorType } from '@/utils'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

const Login = () => {
  const router = useRouter()
  const [verificationSuccess] = useState(router.query?.['verification-success'] || null)

  const methods = useForm({
    reValidateMode: 'onChange',
  })

  const {
    handleSubmit,
    formState: { errors },
    formState,
    getValues,
  } = methods

  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')
  const [alertBody, setAlertBody] = useState<JSX.Element | null | string>(null)

  const { login, sendEmailVerificationEmail } = useAuth()

  const resendVerificationEmail = async () => {
    const { email } = getValues()
    if (email) {
      try {
        sendEmailVerificationEmail(email)
        setShowAlert(false)
      } catch (e) {
        setAlertTitle('Unable to Resend')
        setAlertBody(
          'An error occurred trying to resend email verification. Please contact a site admin.',
        )
      }
    }
  }

  const onSubmit = async (data) => {
    const { email, password } = data
    try {
      await login({ email, password })
    } catch (e) {
      switch (getErrorType(e)) {
        case ERROR_TYPES.INVALID_CREDENTIALS:
          setAlertTitle('Invalid Credentials')
          setAlertBody(<p>Please double check your email and password</p>)
          break
        case ERROR_TYPES.UNVERIFIED_EMAIL:
          setAlertTitle('Unverified Email')
          setAlertBody(
            <p>
              Click{' '}
              <span onClick={resendVerificationEmail} className="underline cursor-pointer">
                here
              </span>{' '}
              to resend verification
            </p>,
          )
          break
        default:
          setAlertTitle('Unknown Error')
          setAlertBody('An unknown error has occurred. Please contact a site admin.')
          break
      }
      setShowAlert(true)
    }
  }

  const closeAndResetAlert = () => {
    setShowAlert(false)
    setAlertTitle('')
    setAlertBody('')
  }

  return (
    <>
      <Head>
        <title>skrrrt | login</title>
      </Head>
      <div className="max-w-md mx-auto">
        {verificationSuccess === 'true' ? (
          <Alert color="green" title="Email verified" closeable={false}>
            Now just login and you're good to go{' '}
            <span role="img" aria-label="rock on">
              🤘🏼
            </span>
          </Alert>
        ) : verificationSuccess === 'false' ? (
          <Alert color="red" title="Unknown Error" closeable={false}>
            <p>
              An error occurred verifying your email{' '}
              <span role="img" aria-label="sad face">
                😔
              </span>
            </p>
            <p>Please try again and contact an admin if the error persists.</p>
          </Alert>
        ) : null}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} onChange={closeAndResetAlert}>
            <div className="mb-4">
              <Input
                label="Email"
                name="email"
                rules={{
                  required: 'Email required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Invalid email',
                  },
                }}
                aria-label="email-input"
                errors={errors}
                autoFocus
              />
            </div>
            <div className="mb-6">
              <Input
                label="Password"
                name="password"
                type="password"
                rules={{
                  required: 'Password required',
                }}
                aria-label="password-input"
                errors={errors}
              />
            </div>
            <div className="flex flex-row-reverse justify-between mb-3">
              <button
                data-testid="login-page-login-button"
                className="flex items-center btn-nord7"
                type="submit"
              >
                <span>Login</span>
                {formState.isSubmitting && (
                  <div className="ml-1">
                    <Spinner className="w-4 h-4" />
                  </div>
                )}{' '}
              </button>
              <Link href="/account/register">
                <button className="btn-nord9" data-testid="login-page-register-button">
                  Register
                </button>
              </Link>
            </div>
            <div className="mt-2">
              <div className="text-sm uppercase label">
                <Link href="/account/reset-password">
                  <span className="link-nord10" tabIndex={0}>
                    Reset Password
                  </span>
                </Link>
              </div>
            </div>
          </form>
        </FormProvider>

        {showAlert && (
          <div className="mt-3">
            <Alert color="red" title={alertTitle} handleClose={closeAndResetAlert}>
              {alertBody}
            </Alert>
          </div>
        )}
      </div>
    </>
  )
}

export default Login
