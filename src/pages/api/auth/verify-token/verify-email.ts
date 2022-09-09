import { UsersService } from '@/services/users.service'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { token } = req.query
      await UsersService.verifyEmailFromJwt(token as string)
      res.redirect(`/account/login?verification-success=true`)
    } catch (e) {
      console.error(e.message, e.stack)
      res.redirect(`/account/login?verification-success=false`)
    }
  })

export default handler
