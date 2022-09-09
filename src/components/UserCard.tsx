import React from 'react'
import { Facebook, Instagram, MapPin, Twitter, Youtube } from '@/components'
import Link from 'next/link'
import { Spotify, TikTok } from './svg'
import { E_User_Locations_Enum, Users } from '@/types'
import { getHometown, truncateAfter } from '@/utils/helpers'
import { Flag } from './Flag'
import { UserAvatar } from './UserAvatar'

export const UserCard = ({ user }: { user: Users }) => {
  if (!user) return null

  const hometown = getHometown(user)

  return (
    <div className="w-full mx-auto user-card">
      <div className="user-avatar">
        <UserAvatar user={user} initialsClasses="text-8xl" />
      </div>
      <div className="front">
        <div className="flex flex-row items-center justify-center">
          <h3 className="text-sm font-bold tracking-wide">{truncateAfter(user?.full_name, 25)}</h3>
          <div className="ml-3">
            <Flag
              location={hometown}
              // placement="top"
              dimensions="1em"
            />
          </div>
        </div>
      </div>

      <div className="background">
        <div className="flex flex-col items-center inside">
          <div className="flex flex-row items-start my-1 text-lg font-black">
            <h3 className="mr-2px">{truncateAfter(user?.full_name, 20)}</h3>
            <div className="ml-3">
              <Flag
                location={hometown}
                // placement="top"
                dimensions="1.3em"
              />
            </div>
            {/* {user.id !== authdUser?.id && (
              <div
                ref={favoriteUserRef}
                id="favorite-user-trigger"
                className="flex flex-col items-center justify-center cursor-pointer select-none text-nord15"
                onClick={handleFavoriteClicked}
              >
                <Star fill={`${user?.liked_users?.some(like => like.liked_by_user_id === authdUser?.id) ? 'currentColor' : 'transparent'}`} />
              </div>
            )} */}
          </div>
          {user?.locations?.find((l) => l.type === E_User_Locations_Enum.Current)
            ?.formatted_address && (
            <div className="flex flex-row items-center justify-center text-sm font-semibold text-nord4 dark:text-nord2">
              <MapPin className="h-4 mr-px" />
              <p>
                {truncateAfter(
                  user?.locations?.find((l) => l.type === E_User_Locations_Enum.Current)
                    ?.formatted_address,
                  30,
                )}
              </p>
            </div>
          )}

          <Link href={`/users/${user.username}`}>
            <button className="my-1 btn bg-nord7">View</button>
          </Link>

          <div className="flex flex-row justify-center">
            {user?.socials?.twitter && (
              <a
                href={user.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <Twitter />
              </a>
            )}

            {user?.socials?.instagram && (
              <a
                href={user.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <Instagram />
              </a>
            )}

            {user?.socials?.facebook && (
              <a
                href={user.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <Facebook />
              </a>
            )}

            {user?.socials?.tiktok && (
              <a
                href={user.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <TikTok />
              </a>
            )}

            {user?.socials?.youtube && (
              <a
                href={user.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <Youtube />
              </a>
            )}

            {user?.socials?.spotify && (
              <a
                href={user.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="m-2"
              >
                <Spotify />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
