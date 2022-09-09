import { ensureConnection, Logger } from '@/middleware'
import { NextApiRequest } from '@/models/extensions'

import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    res.status(200).json({ ...req.cookies })
  })

export default handler
