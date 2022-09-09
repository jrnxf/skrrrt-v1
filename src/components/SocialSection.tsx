import moment from 'moment'
import React, { FC } from 'react'
import {
  Briefcase,
  Facebook,
  Gift,
  Home,
  Instagram,
  MapPin,
  Twitter,
  Youtube,
  Spotify,
  TikTok,
} from '@/components'
import { InfoCard } from './InfoCard'

type Props = {
  hometown?: string
  current_location?: string
  profession?: string | null
  birthday?: string
  socials?: any
}

export const SocialSection: FC<Props> = ({ socials }) => (
  <>
    {[
      socials?.twitter,
      socials?.instagram,
      socials?.youtube,
      socials?.facebook,
      socials?.tiktok,
    ].some((x) => !!x) && (
      <div className="mb-4">
        <InfoCard title="Social">
          {[
            socials?.twitter,
            socials?.instagram,
            socials?.facebook,
            socials?.tiktok,
            socials?.youtube,
          ].some((x) => !!x) && (
            <div className="flex flex-row flex-wrap justify-start py-2">
              {socials?.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <Twitter className="w-7 h-7" />
                </a>
              )}

              {socials?.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <Instagram className="w-7 h-7" />
                </a>
              )}

              {socials?.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <Facebook className="w-7 h-7" />
                </a>
              )}

              {socials?.tiktok && (
                <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="mr-4">
                  <TikTok className="w-7 h-7" />
                </a>
              )}

              {socials?.youtube && (
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <Youtube className="w-7 h-7" />
                </a>
              )}

              {socials?.spotify && (
                <a href={socials.spotify} target="_blank" rel="noopener noreferrer">
                  <Spotify className="w-7 h-7" />
                </a>
              )}
            </div>
          )}
        </InfoCard>
      </div>
    )}
  </>
)
