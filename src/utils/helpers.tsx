import { User } from '@/models/user'
import { E_User_Locations_Enum } from '@/types'
import axios from 'axios'
import { CookieSerializeOptions, serialize } from 'cookie'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import { NextApiResponse } from 'next'
import converter from 'number-to-words'
import { COOKIES } from './constants'
import { useCookie } from 'next-cookie'
import { Logger } from '@/middleware'

export const preprocessText = (str) => {
  let firstInstanceOfNewLine = null
  if (!str) return ''
  str = str
    .trim()
    .split('')
    .map((x, idx) => {
      if (x === '\n') {
        if (firstInstanceOfNewLine === null) {
          firstInstanceOfNewLine = idx
        } else if (firstInstanceOfNewLine && idx - firstInstanceOfNewLine! > 1) {
          return null
        }
      } else {
        firstInstanceOfNewLine = null
      }
      return x
    })
    .filter((x) => x !== null)
    .join('')
  return str
}

/**
 * swaps the origin of an asset url with that of its CDN counterpart
 * @param url
 * @returns the same url with the CDN as the origin
 */
export const preferCdn = (url?: string | null): string => {
  if (!url) return ''
  return url.replace(new URL(url).origin, 'https://d21ywshxutk0x0.cloudfront.net')
}

/**
 * atob is a native javascript method to decode base64 encoded text
 * the item in position 1 of the split jwt is the base64 encoded payload
 * @param jwt
 */
export const extractJwtClaims = (jwt) => {
  try {
    const claims = JSON.parse(Buffer.from(jwt?.split('.')[1], 'base64').toString('binary'))
    return claims
  } catch (e) {
    return null
  }
}

export const calculateWinner = (submissions) => {
  if (!submissions || submissions.length === 0) return
  const dict = {}

  for (let submission of submissions) {
    const player = submission?.submitted_by

    if (dict.hasOwnProperty(player?.id)) {
      dict[player?.id] = {
        player,
        sets_landed: dict[player?.id].sets_landed + 1,
        last_submitted_at:
          dict[player?.id].last_submitted_at < new Date(submission.created_at)
            ? new Date(submission.created_at)
            : dict[player?.id].last_submitted_at,
      }
    } else {
      dict[player?.id] = {
        player,
        sets_landed: 1,
        last_submitted_at: new Date(submission.created_at),
      }
    }
  }

  const orderedResults = Object.values(dict)
    .sort((a: any, b: any) => {
      if (a.sets_landed === b.sets_landed) {
        return a.last_submitted_at - b.last_submitted_at
      } else {
        return b.sets_landed - a.sets_landed
      }
    })
    .map((r: any, idx: number) => ({
      ...r,
      rank: converter.toOrdinal(idx + 1),
      last_submitted_at: r.last_submitted_at.toISOString(),
    }))

  return orderedResults
}

export const getInitials = (full_name) =>
  full_name
    ?.split(' ')
    ?.reduce((acc, curr) => (acc += curr[0]), '')
    ?.substring(0, 2)

export const log = (text, color = 'black') =>
  console.log(`%c ${text}`, `color: ${color}; font-weight: bold;`)

export const isProduction = () => {
  return [process.env.NODE_ENV, process.env.NEXT_PUBLIC_RUN_AGAINST].includes('production')
}

/**
 * this method takes place on the server so it needs to know where it's been
 * deployed to (preview url, dev url, prod url, etc). Sometimes we may want to
 * be seeing prod data while running locally but also hit our local api, in which
 * case we can set a command line variable RUNNING_LOCAL to 'true'
 */
export const getApiDomain = () => (isProduction() ? `https://${process.env.VERCEL_URL}` : '')

export const truncateAfter = (text, n) => (text?.length > n ? text.slice(0, n) + '...' : text)
export const pluralize = (n, singularForm, pluralForm) => (n === 1 ? singularForm : pluralForm)
export const getErrorType = (error) => error?.response?.data?.type

export const getHometown = (user) => getUserLocationType(user, E_User_Locations_Enum.Hometown)
export const getCurrentLocation = (user) => getUserLocationType(user, E_User_Locations_Enum.Current)

export const getUserLocationType = (user, type) => {
  return user?.locations?.find((l) => l.type === type)
}

// @ts-ignore
export const fetcher = async (url) => {
  const res = await fetch(url)

  // if the status code is not 200-299 we still want to try to parse and throw it
  if (!res.ok) {
    const error = new Error('An error occurred while fetching data')

    // @ts-ignore
    error.info = await res.json()
    // @ts-ignore
    error.status = res.status
    throw error
  }

  return res.json()
}

export const scrollToBottomOfWindow = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior,
  })
}

/**
 *
 * @param {*} bufferHeight number of pixels considered to be close
 */
export const isNearBottomOfWindow = (bufferHeight) => {
  const { innerHeight, scrollY } = window
  const { scrollHeight } = document.body
  return scrollHeight <= innerHeight + scrollY + bufferHeight
}

export const setCookies = (
  res: NextApiResponse,
  cookies: {
    name: string
    value: any
    options: CookieSerializeOptions
  }[],
) => {
  let cookieList = []

  for (let { name, value, options } of cookies) {
    const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value)
    cookieList.push(serialize(name, String(stringValue), options))
  }

  res.setHeader('set-cookie', cookieList)
}

export const signAuthJwt = (user: User): string => {
  if (!user) return ''

  const { id, username, full_name, email, role } = user
  const namespace = 'https://hasura.io/jwt/claims'
  return jwt.sign(
    {
      user: {
        id,
        username,
        full_name,
        email,
      },
      [namespace]: {
        'x-hasura-default-role': 'user',
        // do some custom logic to decide allowed roles
        'x-hasura-allowed-roles': Array.from(new Set(['user', role?.toLowerCase()])),
        'x-hasura-user-id': user.id.toString(),
      },
    },
    process.env.JWT_SECRET,
    {
      // 1 year #TODO look up the JWT expired issue with hasura, it's definitely not expired...
      expiresIn: '14d', // 2 weeks
    },
  )
}

export const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

export const classNames = (...args: any) => args.filter(Boolean).join(' ')

export const parseAndSetCookies = (ctx, array) => {
  const cookie = useCookie(ctx)
  for (let string of array) {
    const arr = string.split(';')
    const options = {}
    const key = arr[0].split('=')[0]
    const value = arr[0].split('=')[1]
    arr.shift()
    for (let option of arr) {
      let key = option.split('=')[0].slice(1)
      let value = option.split('=')[1]
      if (key === 'Path') key = 'path'
      else if (key === 'Expires') (key = 'expires'), (value = new Date(value))
      else if (key === 'HttpOnly') (key = 'httpOnly'), (value = true)
      options[key] = value
    }
    if (value !== '') cookie.set(key, value, options)
    else cookie.remove(key)
  }
}

export const getTimeToMs = () => moment().format('h:mm:ss:SSS')

export const ssrAuthCheck = async (ctx: any) => {
  const cookies = ctx?.req?.cookies

  try {
    const accessToken = cookies?.[COOKIES.AUTH.ACCESS_TOKEN]
    if (accessToken) {
      jwt.verify(accessToken, process.env.JWT_SECRET)
      return {
        user: extractJwtClaims(accessToken)?.user,
      }
    }
  } catch (err) {
    // The provided access token was invalid. Will attempt to generate access token from refresh token
  }

  const refreshToken = cookies?.[COOKIES.AUTH.REFRESH_TOKEN]
  if (!refreshToken) {
    // No refresh token found
    return {}
  }

  // Refresh token was found. Beginning refresh
  const response = await axios.post(`${getApiDomain()}/api/auth/refresh-token`, null, {
    headers: {
      // You have to expressly send cookies since servers dont do this, only browsers
      cookie: `${COOKIES.AUTH.REFRESH_TOKEN}=${refreshToken}`,
    },
  })

  const accessToken = response?.data?.accessToken
  if (!accessToken) {
    // Token refresh did not return an access token. Server-side authentication failed
    return {}
  }

  // Successfully acquired access token from token refresh
  const cookiesToBeSet = response?.headers?.['set-cookie']
  parseAndSetCookies(ctx, cookiesToBeSet)

  return {
    user: extractJwtClaims(accessToken)?.user,
  }
}
