import Link from 'next/link'
import React, { FC } from 'react'
import { classNames } from '@/utils'
import { useRouter } from 'next/router'

type Props = {
  href: string
  children: JSX.Element | string
  fullWidth?: boolean
  [x: string]: any
}
export const KeyboardLink: FC<Props> = ({ href, children, fullWidth = false, ...rest }) => {
  const router = useRouter()
  return (
    <Link href={href} passHref {...rest}>
      <span
        role="link"
        className={classNames('rounded-md keyboard-focus-visible', fullWidth && 'w-full')}
        tabIndex={0}
        onKeyPress={() => router.push(href)}
      >
        {children}
      </span>
    </Link>
  )
}
