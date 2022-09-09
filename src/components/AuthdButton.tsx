import Link from 'next/link'
import React from 'react'
import { Login } from '@/components'

type Props = {
  text: string
  isAuthenticated: boolean
  successTo?: string
  failTo: string
  [x: string]: any
  icon?: any
}

export const AuthdButton: React.FC<Props> = ({
  text,
  successTo,
  failTo,
  isAuthenticated,
  icon,
  ...rest
}) => {
  return (
    <>
      {isAuthenticated ? (
        successTo ? (
          <Link href={successTo} passHref>
            <button {...rest}>
              {text}
              {icon && <div>{icon}</div>}
            </button>
          </Link>
        ) : (
          <button {...rest}>
            {text}
            {icon && <div>{icon}</div>}
          </button>
        )
      ) : (
        <Link href={`/account/login?redirect=${failTo}`} passHref {...rest}>
          <button {...rest}>
            <div className="flex items-center">
              <div>{text}</div>
              <Login className="ml-1" />
            </div>
          </button>
        </Link>
      )}
    </>
  )
}
