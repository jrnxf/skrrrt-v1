import { UsersService } from '@/services/users.service'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'
import jwt from 'jsonwebtoken'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { token } = req.query
      jwt.verify(token as string, process.env.JWT_SECRET)
      res.redirect(`/account/reset-password?success=true&token=${token}`)
    } catch (e) {
      console.error(e.message, e.stack)
      res.redirect(`/account/reset-password?success=false`)
    }
  })

export default handler
