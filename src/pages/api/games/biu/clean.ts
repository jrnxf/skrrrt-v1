import { ensureConnection, Logger } from '@/middleware'
import { NextApiRequest } from '@/models/extensions'
import { ChatService } from '@/services'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      const affected = await ChatService.deleteOldMessages()
      const message = `${affected} chat message(s) deleted`
      return res.status(200).json({
        success: true,
        message,
      })
    } catch (e) {
      console.error(e.message, e.stack)
      res.status(200).json({
        success: false,
      })
    }
  })

export default handler
