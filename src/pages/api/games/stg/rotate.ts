import nc from 'next-connect'
import { StgService } from '@/services'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    try {
      await StgService.rotate()
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
