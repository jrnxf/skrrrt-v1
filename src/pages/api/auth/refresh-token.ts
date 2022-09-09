import { ERROR_TYPES, RefreshToken, NextApiRequest } from '@/models'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { COOKIES, signAuthJwt, setCookies } from '@/utils'
import moment from 'moment'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const refreshToken = req.cookies?.[COOKIES.AUTH.REFRESH_TOKEN]
    try {
      const matchingToken = await req.db.getRepository<RefreshToken>('RefreshToken').findOne({
        where: {
          token: refreshToken,
        },
        relations: ['user'],
      })

      if (!matchingToken) {
        // refresh token not found
        setCookies(res, [
          {
            name: COOKIES.AUTH.REFRESH_TOKEN,
            value: '',
            options: {
              path: '/',
              maxAge: -1, // delete the cookie since the token was not found
            },
          },
        ])
        throw { type: ERROR_TYPES.REFRESH_TOKEN_NOT_FOUND }
      }

      if (moment(matchingToken.token_expiry).isBefore(new Date())) {
        throw {
          type: ERROR_TYPES.REFRESH_TOKEN_EXPIRED,
        }
      }

      const accessToken = signAuthJwt(matchingToken.user)

      setCookies(res, [
        {
          name: COOKIES.AUTH.ACCESS_TOKEN,
          value: accessToken,
          options: {
            path: '/',
            expires: moment().add(75, 'seconds').toDate(),
            secure: true,
          },
        },
      ])
      return res.status(200).json({ accessToken })
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
