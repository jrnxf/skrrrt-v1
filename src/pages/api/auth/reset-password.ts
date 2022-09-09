import { ensureConnection, Logger } from '@/middleware'
import { ResetPasswordInput, NextApiRequest } from '@/models'
import { UsersService } from '@/services'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    const { token, password } = req.body as ResetPasswordInput

    try {
      await UsersService.resetPassword(token, password)
      return res.status(200).json({ success: true })
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
