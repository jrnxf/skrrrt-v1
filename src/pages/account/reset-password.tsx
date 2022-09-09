import { Alert } from '@/components'
import { useAuth } from '@/context'
import { ProvideEmailForm, UpdatePasswordForm } from '@/forms'
import { getErrorType, extractJwtClaims } from '@/utils'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ERROR_TYPES } from '@/models'

const ResetPassword = () => {
  const router = useRouter()
  const resetPasswordToken = router.query.token as string
  const tokenVerificationSuccess = router.query.success as string

  const { resetPassword, sendResetPasswordEmail, sendEmailVerificationEmail } = useAuth()
  const [userEmail, setUserEmail] = useState()

  useEffect(() => {
    if (resetPasswordToken) {
      const decoded = extractJwtClaims(resetPasswordToken)

      if (decoded.email) {
        setUserEmail(decoded.email)
      }
    }
  }, [resetPasswordToken])
  const [showAlert, setShowAlert] = useState(false)
  const [alertTitle, setAlertTitle] = useState('')
  const [alertBody, setAlertBody] = useState<JSX.Element | null | string>(null)

  const onUpdatePasswordSumbit = async (data) => {
    const { password } = data
    try {
      await resetPassword({ password, resetPasswordToken })
      router.push('/')
    } catch (e) {
      console.error(e)
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
        case ERROR_TYPES.PASSWORD_TOO_SHORT:
          setAlertTitle('Password too short')
          setAlertBody(<p>Password must be at least 8 characters</p>)
          break
        case ERROR_TYPES.UNVERIFIED_EMAIL:
          setAlertTitle('Unverified Email')
          setAlertBody(
            <p>
              Click{' '}
              <span
                onClick={async () => {
                  await sendEmailVerificationEmail(userEmail)
                }}
                className="underline cursor-pointer"
              >
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

  const onProvideEmailSubmit = async (data) => {
    const { email } = data
    try {
      await sendResetPasswordEmail(email)
    } catch (e) {
      console.error(e)
    }
  }

  const closeAndResetAlert = () => {
    setShowAlert(false)
    setAlertTitle('')
    setAlertBody('')
  }

  return (
    <div className="max-w-md mx-auto">
      {tokenVerificationSuccess === 'false' ? (
        <Alert color="red" title="Unknown Error" closeable={false}>
          <p>
            Looks like something went wrong
            <span role="img" aria-label="sad face">
              😔
            </span>
          </p>
          <p>Please try again and contact an admin if the error persists.</p>
        </Alert>
      ) : null}
      {resetPasswordToken ? (
        <>
          <div className="mb-2">
            <Alert color="green" title="almost there" closeable={false}>
              <p>Enter your new password and you're good to go</p>
            </Alert>
          </div>
          <UpdatePasswordForm handleSubmit={onUpdatePasswordSumbit} />
        </>
      ) : (
        <>
          <div className="mb-2">
            <Alert color="blue" title="password reset" closeable={false}>
              <p>You'll receive a link to reset your password in your email.</p>
            </Alert>
          </div>
          <ProvideEmailForm handleSubmit={onProvideEmailSubmit} />
        </>
      )}
      {showAlert && (
        <div className="mt-3">
          <Alert color="red" title={alertTitle} handleClose={closeAndResetAlert}>
            {alertBody}
          </Alert>
        </div>
      )}
    </div>
  )
}

export default ResetPassword
