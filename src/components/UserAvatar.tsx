import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { classNames, getInitials, preferCdn } from '@/utils/helpers'

type Props = {
  user: any
  imageClasses?: string
  routingEnabled?: boolean
  initialsClasses?: string
}
export const UserAvatar: FC<Props> = ({
  user,
  initialsClasses = '',
  imageClasses = '',
  routingEnabled = true,
}) => {
  const [errorLoadingAvatar, setErrorLoadingAvatar] = useState(false)
  const router = useRouter()

  if (!user) return null
  return (
    <>
      {!!user?.avatar && !errorLoadingAvatar ? (
        <img
          alt={user?.full_name}
          src={preferCdn(user?.avatar)}
          className={classNames(
            'rounded-full object-cover w-full h-full cursor-pointer shadow-sm',
            imageClasses,
          )}
          onError={() => {
            setErrorLoadingAvatar(true)
          }}
          onClick={() =>
            routingEnabled &&
            router.push(`/users?username=${user.username}`, `/users/${user.username}`)
          }
        />
      ) : (
        <div
          className={classNames(
            'rounded-full font-bold flex justify-center items-center w-full h-full cursor-pointer uppercase shadow-sm',
            initialsClasses,
          )}
          onClick={() => {
            if (routingEnabled) {
              router.push(`/users?username=${user.username}`, `/users/${user.username}`)
            }
          }}
        >
          <div>{getInitials(user?.full_name)}</div>
        </div>
      )}
    </>
  )
}
