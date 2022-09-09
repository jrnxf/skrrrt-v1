import { HeartIcon } from '@heroicons/react/outline'
import React, { FC } from 'react'
import { useToasts } from 'react-toast-notifications'
import { useAuth } from '@/context'

type Props = {
  likedByAuthdUser: boolean
  likeCount: number
  handleLike: () => void
  [x: string]: any
}
export const LikeCount: FC<Props> = ({ handleLike, likedByAuthdUser, likeCount = 0, ...rest }) => {
  const { isAuthenticated } = useAuth()
  const { addToast } = useToasts()

  const handler = () => {
    if (!isAuthenticated) {
      addToast(`You must login to like content.`, {
        appearance: 'info',
        autoDismiss: true,
      })
    } else {
      handleLike()
    }
  }
  return (
    <div
      className="flex items-center font-medium tracking-wider cursor-pointer select-none keyboard-focus-visible"
      onClick={handler}
      onKeyPress={handler}
      tabIndex={0}
      {...rest}
    >
      <HeartIcon
        className="w-[21px] h-[21px] text-nord11"
        fill={likedByAuthdUser ? 'currentColor' : 'transparent'}
      />
      <span className="ml-[2px]">{likeCount}</span>
    </div>
  )
}
