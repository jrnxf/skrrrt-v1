import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models/extensions'
import { EventsService } from '@/services/events.service'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .post(async (req, res) => {
    const payload = req?.body
    try {
      await EventsService.processEvent(payload)
      res.status(200).json({
        success: true,
      })
    } catch (e) {
      console.error(e.message, e.stack)
      res.status(200).json({
        success: false,
      })
    }
  })

export default handler
