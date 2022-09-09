import React from 'react'
import { Users } from '@/types'
import { Flag, UserAvatar, Facebook, Twitter, Instagram, Youtube, TikTok, Spotify } from '.'
import { classNames, getHometown } from '@/utils'
import { KeyboardLink } from './KeyboardLink'

type Props = {
  user: Users
  activeDisciplines?: any
  handleDisciplineClicked?: (d: string) => void
}

export const UserTile: React.FC<Props> = ({ user, activeDisciplines, handleDisciplineClicked }) => {
  const hometown = getHometown(user)

  if (!user) return null

  const Disciplines = () => (
    <div className="flex flex-row flex-wrap items-start font-medium">
      {user.disciplines?.map?.(({ discipline }) => {
        return (
          <span
            key={discipline}
            onClick={() => handleDisciplineClicked(discipline)}
            className={`chip mr-2 mb-2 cursor-pointer keyboard-focus-visible select-none ${
              activeDisciplines?.includes(discipline)
                ? 'bg-nord9 text-nord6'
                : 'bg-nord5 dark:bg-nord1'
            }`}
          >
            {discipline}
          </span>
        )
      })}
    </div>
  )
  return (
    <div className="p-4 overflow-hidden rounded-lg shadow-sm bg-nord6 dark:bg-nord0">
      <div className="flex pb-2">
        <div className="w-16 h-16 min-w-16 md:w-18 md:h-18 md:min-w-18">
          <UserAvatar user={user} initialsClasses="text-xl md:text-2xl bg-nord5 dark:bg-nord1" />
        </div>
        <div className="pl-3 md:pl-4">
          <div className="mr-2 text-xl font-black cursor-pointer md:text-2xl">
            <KeyboardLink
              href={`/users?username=${user.username}`}
              as={`/users/${user.username}`}
              scroll={false}
            >
              <div className="line-clamp-1">
                <span className={classNames(hometown && 'mr-3')}>{user.full_name}</span>
                {hometown && (
                  <span className="inline-flex">
                    <Flag location={hometown} />
                  </span>
                )}
              </div>
            </KeyboardLink>
            <div className="mt-1 md:pt-1.5">
              <Disciplines />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 mt-1 md:text-lg line-clamp-3">{user.bio}</div>
    </div>
  )
}
