import React from 'react'
import { Users } from '@/types'
import { Flag, UserAvatar, Facebook, Twitter, Instagram, Youtube, TikTok, Spotify } from '.'
import { getHometown } from '@/utils'
import { useRouter } from 'next/router'

type Props = {
  user: Users
  activeDisciplines?: any
  handleDisciplineClicked?: (d: string) => void
}

export const UserTile2: React.FC<Props> = ({
  user,
  activeDisciplines,
  handleDisciplineClicked,
}) => {
  const router = useRouter()
  const hometown = getHometown(user)

  if (!user) return null

  return (
    <div className="rounded-2xl shadow-sm bg-nord5 dark:bg-nord1 p-4 overflow-hidden flex flex-col justify-between">
      <div className="pb-2 flex flex-col items-center">
        <div className="h-32 w-32 min-w-32 mb-2">
          <UserAvatar user={user} initialsClasses="text-xl bg-nord4 dark:bg-nord2" />
        </div>
        <div>
          <span
            className="font-black text-lg mr-2 cursor-pointer"
            onClick={() => router.push(`/users/${user.username}`)}
          >
            <span className="mr-3">{user.full_name}</span>
            {hometown && (
              <span className="inline-flex">
                <Flag location={hometown} scale={1} />
              </span>
            )}
          </span>
          <div className="flex flex-row justify-start">
            {user?.socials?.twitter && (
              <a
                href={user.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <Twitter />
              </a>
            )}

            {user?.socials?.instagram && (
              <a
                href={user.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <Instagram />
              </a>
            )}

            {user?.socials?.facebook && (
              <a
                href={user.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <Facebook />
              </a>
            )}

            {user?.socials?.tiktok && (
              <a
                href={user.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <TikTok />
              </a>
            )}

            {user?.socials?.youtube && (
              <a
                href={user.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <Youtube />
              </a>
            )}

            {user?.socials?.spotify && (
              <a
                href={user.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 my-2 z-10"
              >
                <Spotify />
              </a>
            )}
          </div>
        </div>
      </div>
      {/* <div className="line-clamp-3 whitespace-pre-wrap">{user.bio}</div> */}
      <div className="flex flex-row flex-wrap items-center justify-center font-medium">
        {user.disciplines?.map?.(({ discipline }) => {
          return (
            <span
              key={discipline}
              onClick={() => handleDisciplineClicked(discipline)}
              className={`chip-sm mr-2 mt-2 cursor-pointer keyboard-focus-visible select-none ${
                activeDisciplines?.includes(discipline)
                  ? 'bg-purple-14 text-nord6'
                  : 'bg-nord4 dark:bg-nord2'
              }`}
            >
              {discipline}
            </span>
          )
        })}
      </div>
    </div>
  )
}
