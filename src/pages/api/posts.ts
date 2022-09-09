import { ensureConnection, Logger } from '@/middleware'
import { Post } from '@/models'
import { NextApiRequest } from '@/models/extensions'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req: NextApiRequest, res) => {
    const posts = await req.db.getRepository<Post>('Post').find({})
    res.status(200).json({ posts })
  })

export default handler
