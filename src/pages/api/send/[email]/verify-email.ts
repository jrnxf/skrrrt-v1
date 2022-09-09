import { ensureConnection, Logger } from '@/middleware'
import { ERROR_TYPES, NextApiRequest } from '@/models'
import { SendService, UsersService } from '@/services'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { email } = req.query
      const user = await UsersService.getUserByEmail(email as string)

      if (!user.verified_email) {
        await SendService.sendEmailVerificationEmail(email as string)
        return res.status(200).json({
          success: true,
        })
      } else {
        throw { type: ERROR_TYPES.EMAIL_ALREADY_VERIFIED }
      }
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
