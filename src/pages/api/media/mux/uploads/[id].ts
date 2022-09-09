import { MediaService } from '@/services/media.service'
import nc from 'next-connect'
import { Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(Logger.request)
  .get(async (req, res) => {
    try {
      const response = await MediaService.getMuxUpload(req.query.id as string)
      res.status(200).json({
        response,
      })
    } catch (e) {
      console.error(e)
      res.status(200).json({
        success: false,
      })
    }
  })

export default handler
