import { ensureConnection, Logger } from '@/middleware'
import { NextApiRequest } from '@/models/extensions'
import { COOKIES, setCookies } from '@/utils'
import moment from 'moment'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    setCookies(res, [
      {
        name: COOKIES.AUTH.ACCESS_TOKEN,
        value: '',
        options: {
          path: '/',
          maxAge: -1,
        },
      },
      {
        name: COOKIES.AUTH.REFRESH_TOKEN,
        value: '',
        options: {
          path: '/',
          maxAge: -1,
        },
      },
    ])
    return res.status(200).json({ success: true })
  })
  .post(async (req, res) => {
    setCookies(res, [
      {
        name: COOKIES.AUTH.ACCESS_TOKEN,
        value: '',
        options: {
          path: '/',
          maxAge: -1,
        },
      },
      {
        name: COOKIES.AUTH.REFRESH_TOKEN,
        value: '',
        options: {
          path: '/',
          maxAge: -1,
        },
      },
    ])
    return res.status(200).json({ success: true })
  })

export default handler
