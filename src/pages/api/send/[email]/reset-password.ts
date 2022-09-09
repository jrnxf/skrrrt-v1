import { ensureConnection, Logger } from '@/middleware'
import { ERROR_TYPES } from '@/models/enums/error-types.enum'
import { NextApiRequest } from '@/models/extensions'
import { LoggerService } from '@/services'
import { SendService } from '@/services/send.service'
import { UsersService } from '@/services/users.service'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { email } = req.query
      const user = await UsersService.getUserByEmail(email as string)

      if (user) {
        await SendService.sendResetPasswordEmail(email as string)
        return res.status(200).json({
          success: true,
        })
      } else {
        LoggerService.log(`Reset password email send error: ${ERROR_TYPES.SEND_EMAIL_ERROR}`)
        throw { type: ERROR_TYPES.SEND_EMAIL_ERROR }
      }
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
