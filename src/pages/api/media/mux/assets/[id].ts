import { MediaService } from '@/services/media.service'
import nc from 'next-connect'
import { Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest, ERROR_TYPES } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(Logger.request)
  .get(async (req, res) => {
    try {
      const response = await MediaService.getMuxAsset(req.query.id as string)
      res.status(200).json({
        response,
      })
    } catch (e) {
      res.status(400).json({ type: ERROR_TYPES.MUX_ERROR, message: e })
    }
  })

export default handler
