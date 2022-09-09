import nc from 'next-connect'
import { ensureConnection, Logger } from '@/middleware'
import { NextApiResponse } from 'next'
import { NextApiRequest } from '@/models'
import pkg from 'package.json'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(ensureConnection, Logger.request)
  .get(async (req, res) => {
    res.status(200).json({
      sha: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
      env: process.env.NODE_ENV || 'unknown',
      version: pkg.version || 'unknown',
    })
  })

export default handler
