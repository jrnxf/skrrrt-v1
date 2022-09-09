import { ensureConnection, Logger } from '@/middleware'
import { NextApiRequest } from '@/models/extensions'
import { User } from '@/models/user'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    const users = await req.db.getRepository<User>('User').find({})

    let duplicateUsernames = false

    const dict = {}
    for (let u of users.map((u) => u.username)) {
      if (dict.hasOwnProperty(u)) {
        dict[u] = dict[u] + 1
        duplicateUsernames = true
      } else {
        dict[u] = 1
      }
    }

    res
      .status(200)
      .json({ count: users.length, duplicateUsernames, users: users.map((u) => u.username) })
  })

export default handler
