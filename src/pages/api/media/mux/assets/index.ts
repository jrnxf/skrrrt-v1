import { MediaService } from '@/services/media.service'
import nc from 'next-connect'
import { Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest, ERROR_TYPES } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(Logger.request)
  .get(async (req, res) => {
    try {
      const idsOnly = req.query.idsOnly === 'true'
      let response: any = await MediaService.getAllMuxAssets()
      if (idsOnly) {
        response = response.map((asset) => asset.id)
      }
      res.status(200).json(response)
    } catch (e) {
      res.status(400).json({ type: ERROR_TYPES.MUX_ERROR, message: e })
    }
  })
  .delete(async (req, res) => {
    try {
      const correctPassword = req.query.password === 'prettyplease'

      if (!correctPassword) {
        res.status(400).json({ type: ERROR_TYPES.INVALID_CREDENTIALS })
      }

      let response = await MediaService.deleteAllMuxAssets()
      res.status(200).json(response)
    } catch (e) {
      res.status(400).json({ type: ERROR_TYPES.MUX_ERROR, message: e })
    }
  })

export default handler
