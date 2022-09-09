import nc from 'next-connect'
import { IncomingForm } from 'formidable'
import { MediaService } from '@/services/media.service'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    try {
      const form = new IncomingForm({ multiples: false })

      const data: any = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err)
          resolve({ fields, files })
        })
      })

      const { prefix } = req.query
      const response = await MediaService.uploadFileToS3(data?.files.file, prefix as string)
      return res.status(200).json(response)
    } catch (e) {
      const message = e.response.data.error_message
      console.error(message, e.stack)
      res.status(400).json({
        message,
      })
    }
  })

export default handler
