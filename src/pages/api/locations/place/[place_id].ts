import { LocationsService } from '@/services'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { User, NextApiRequest } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { place_id } = req.query
      const place = await LocationsService.getPlaceByPlaceId(place_id as string)
      return res.status(200).json(place)
    } catch (e) {
      const message = e.response.data.error_message
      console.error(message, e.stack)
      res.status(400).json({
        message,
      })
    }
  })

export default handler
