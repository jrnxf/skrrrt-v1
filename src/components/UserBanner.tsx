import Tippy from '@tippyjs/react'
import moment from 'moment'
import React from 'react'
import Moment from 'react-moment'
import { KeyboardLink } from '.'
import { UserAvatar } from './UserAvatar'

export const UserBanner = ({
  user,
  date = null,
}: {
  user: any
  date?: Date | null
  tabIndex?: number
  size?: string
}) => {
  if (!user) return null
  return (
    <KeyboardLink href={`/users/${user.username}`}>
      <div className="inline-flex items-center rounded-md cursor-pointer keyboard-focus-visible">
        <div className="flex-shrink-0 w-12 h-12">
          <UserAvatar user={user} initialsClasses="bg-nord5 dark:bg-nord1 text-xl" />
        </div>
        <div className="flex flex-col items-start ml-3">
          <div className="font-extrabold mb-0.5 overflow-wrap-anywhere text-nord0 dark:text-nord6">
            {user?.full_name}
          </div>
          {date && (
            <div className="text-sm font-semibold text-secondary">
              <Tippy content={moment(date).format('MMM Do [@] h:mm:ssa')}>
                <div>
                  <Moment fromNow interval={15000}>
                    {date}
                  </Moment>
                </div>
              </Tippy>
            </div>
          )}
        </div>
      </div>
    </KeyboardLink>
  )
}
