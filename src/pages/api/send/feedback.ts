import { SendService } from '@/services/send.service'
import { ERROR_TYPES } from '@/models/enums/error-types.enum'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'
import axios from 'axios'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    try {
      const { email, feedback, attachment, build } = req.body
      try {
        await SendService.sendEmail(
          'colby@skrrrt.io',
          'feedback submission',
          `
        <div><b>From:</b> ${email}</div>
        <hr />
        <div><b>Body:</b> ${feedback}</div>
        ${attachment ? `<hr /><div><b>Attachment:</b> ${attachment}</div>` : ''}
        ${
          build ? `<hr /><div><b>Build:</b> <pre>${JSON.stringify(build, null, 2)}</pre></div>` : ''
        }
        `,
        )
        console.log(`Succesfully delivered feedback from ${email}`)
        return res.status(200).json({
          success: true,
        })
      } catch (error) {
        throw { type: ERROR_TYPES.EMAIL_SEND_ERROR }
      }
    } catch (e) {
      return res.status(400).json(e)
    }
  })

export default handler
