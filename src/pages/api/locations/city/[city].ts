import { LocationsService } from '@/services/locations.service'
import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const { city } = req.query
      const response = await LocationsService.getMatchingCities(city as string)
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
