import nc from 'next-connect'
import { COOKIES, setCookies, signAuthJwt } from '@/utils'
import moment from 'moment'
import { SendService, UsersService, AuthService, LoggerService } from '@/services'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { ERROR_TYPES, NextApiRequest, User, RegisterInput } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    const registerInput: RegisterInput = req.body
    let user: User
    try {
      if (!(await UsersService.isEmailAvailable(registerInput.email))) {
        LoggerService.log(`User registration error: ${ERROR_TYPES.EMAIL_TAKEN}`)

        throw {
          type: ERROR_TYPES.EMAIL_TAKEN,
        }
      }

      if (!(await UsersService.isUsernameAvailable(registerInput.username))) {
        LoggerService.log(`User registration error: ${ERROR_TYPES.USERNAME_TAKEN}`)
        throw {
          type: ERROR_TYPES.USERNAME_TAKEN,
        }
      }

      user = await UsersService.registerUser(registerInput)

      await SendService.sendEmailVerificationEmail(registerInput.email)

      const token = signAuthJwt(user)
      const refreshToken = await AuthService.createRefreshToken(user.id)

      setCookies(res, [
        // {
        //   name: COOKIES.AUTH.IS_AUTHENTICATED,
        //   value: 'true',
        //   options: {
        //     path: '/',
        //     expires: moment().add(1, 'year').toDate(),
        //     secure: true,
        //   },
        // },
        {
          name: COOKIES.AUTH.ACCESS_TOKEN,
          value: token,
          options: {
            path: '/',
            expires: moment().add(75, 'seconds').toDate(),
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
    } catch (e) {
      const oneMinuteAgo = moment().subtract(1, 'minute').toDate()
      // if the user was created within the last minute the it is okay
      // to delete them. (extra security measure so we don't accidentally
      // delete a real user)
      if (user && user.created_at > oneMinuteAgo) {
        // free up the user
        await UsersService.deleteUserById(user.id)
        console.log(
          'An error during registration. The newly registered user was deleted to prevent orphaning',
        )
      }
      return res.status(400).json(e)
    }
  })

export default handler
