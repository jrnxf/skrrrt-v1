import { ensureConnection, Logger } from '@/middleware'
import { ERROR_TYPES, NextApiRequest, User } from '@/models'
import { AuthService, LoggerService, UsersService } from '@/services'
import { COOKIES, setCookies, signAuthJwt } from '@/utils'
import bcrypt from 'bcryptjs'
import moment from 'moment'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    try {
      let user: User

      let { email, password } = req.body

      user = await UsersService.getUserWithPasswordByEmail(email)

      if (user) {
        const isCorrectPassword = await bcrypt.compare(password, user.password) // the salt is incorporated into the hash (as plain text). That's how .compare can truly do a comparison

        if (!isCorrectPassword) {
          LoggerService.log(`User login error: ${ERROR_TYPES.INVALID_CREDENTIALS}`)
          throw { type: ERROR_TYPES.INVALID_CREDENTIALS }
        }

        if (!user.verified_email) {
          LoggerService.log(`User login error: ${ERROR_TYPES.UNVERIFIED_EMAIL}`)

          throw { type: ERROR_TYPES.UNVERIFIED_EMAIL }
        }

        const token = signAuthJwt(user)

        const refreshToken = await AuthService.createRefreshToken(user.id)

        setCookies(res, [
          {
            name: COOKIES.AUTH.ACCESS_TOKEN,
            value: token,
            options: {
              path: '/',
              expires: moment().add(5, 'minutes').toDate(),
              secure: true,
            },
          },
          {
            name: COOKIES.AUTH.REFRESH_TOKEN,
            value: refreshToken.token,
            options: {
              path: '/',
              // path: '/api/auth/refresh-token',
              // ^^ this didn't work with ssr because I need this cookie
              // sent in the context of my SSR pages
              expires: moment().add(1, 'year').toDate(),
              httpOnly: true,
              secure: true,
            },
          },
        ])

        return res.status(200).json(user)
      } else {
        LoggerService.log(`User login error: ${ERROR_TYPES.INVALID_CREDENTIALS}`)
        throw { type: ERROR_TYPES.INVALID_CREDENTIALS }
      }
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
