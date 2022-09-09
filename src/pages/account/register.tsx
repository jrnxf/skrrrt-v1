import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Alert, KeyboardLink, Spinner } from '@/components'
import { useAuth } from '@/context'
import { Input } from '@/forms'
import { getErrorType, REGEX } from '@/utils'
import { ERROR_TYPES } from '@/models/enums/error-types.enum'

const Register = () => {
  const methods = useForm({
    reValidateMode: 'onChange',
  })

  const {
    handleSubmit,
    watch,
    formState,
    formState: { errors },
  } = methods
  const { register } = useAuth()
  const router = useRouter()
  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')
  const [alertBody, setAlertBody] = useState<JSX.Element | null | string>(null)

  const closeAndResetAlert = () => {
    setShowAlert(false)
    setAlertTitle('')
    setAlertBody('')
  }

  const onSubmit = async (data) => {
    const { full_name, username, email, password } = data
    setShowAlert(false)
    try {
      // register will send initial email verification on backend
      await register({ full_name, username, email, password })
      router.push('/account/login')
    } catch (e) {
      switch (getErrorType(e)) {
        case ERROR_TYPES.VALIDATION_ERROR:
          setAlertTitle('Validation Errors')
          setAlertBody(
            <ul>
              {e?.response?.data?.messages.map((m: string) => (
                <li key={m}>- {m}</li>
              ))}
            </ul>,
          )
          break
        case ERROR_TYPES.EMAIL_TAKEN:
          setAlertTitle('Email Unavailable')
          setAlertBody(`Email is already taken.`)
          break
        case ERROR_TYPES.USERNAME_TAKEN:
          setAlertTitle('Username Unavailable')
          setAlertBody(`Username is already taken.`)
          break
        default:
          setAlertTitle('Unknown Error')
          setAlertBody('An unknown error has occurred. Please contact a site admin.')
          break
      }
      setShowAlert(true)
    }
  }

  return (
    <>
      <Head>
        <title>skrrrt | register</title>
      </Head>

      <div>
        <div className="max-w-md mx-auto">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} onChange={closeAndResetAlert}>
              <div className="mb-4">
                <Input
                  label="Full Name"
                  name="full_name"
                  rules={{
                    required: 'Full name required',
                    // TODO next seems to see {L} in the regex below and thinks it's an object where L is not defined -- you may need to open an issue for this
                    // validate: (val) =>
                    //   val?.match(/[\p{L} -]/gu)?.join("") === val ||
                    //   "Full name contains invalid characters",
                  }}
                  errors={errors}
                  autoFocus
                  aria-label="full-name-input"
                />
              </div>
              <div className="mb-4">
                <Input
                  label="Username"
                  name="username"
                  // submit NEXT issue for below, in the meantime the current defined rules will be used (no whitespaces)
                  // rules={{
                  //   required: 'Username required',
                  //   // TODO next seems to see {L} in the regex below and thinks it's an object where L is not defined -- you may need to open an issue for this
                  //   validate: (val) =>
                  //     // @ts-ignore
                  //     val?.match(/[\p{L}]/gu)?.join('') === val ||
                  //     'Username contains invalid characters',
                  // }}
                  rules={{
                    required: 'Username required',
                    pattern: {
                      value: REGEX.NO_WHITESPACES,
                      message: 'Must not include any whitespaces',
                    },
                  }}
                  aria-label="username-input"
                  errors={errors}
                />
              </div>

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
                />
              </div>

              <div className="mb-4">
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

              <div className="mb-6">
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  rules={{
                    required: 'Password confirmation required',
                    validate: (value) => value === watch('password') || "Passwords don't match",
                  }}
                  aria-label="confirm-password-input"
                  errors={errors}
                />
              </div>

              <div className="mb-3 text-sm leading-5 uppercase label">
                By registering you are agreeing to the{' '}
                <Link href="/terms">
                  <span className="link-nord10 m-0.5" tabIndex={0}>
                    Terms of Use
                  </span>
                </Link>{' '}
                and{' '}
                <Link href="/privacy">
                  <span className="link-nord10" tabIndex={0}>
                    Privacy Policy
                  </span>
                </Link>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <button
                  className="flex items-center btn-nord7"
                  type="submit"
                  data-testid="register-page-register-button"
                >
                  Register
                  {formState.isSubmitting && (
                    <div className="ml-1">
                      <Spinner className="w-4 h-4" />
                    </div>
                  )}
                </button>
                <Link href="/account/login">
                  <button
                    type="button"
                    className="btn-nord9"
                    data-testid="register-page-login-button"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </FormProvider>

          {showAlert && (
            <div className="mt-4">
              <Alert color="red" title={alertTitle} handleClose={closeAndResetAlert}>
                {alertBody}
              </Alert>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Register
