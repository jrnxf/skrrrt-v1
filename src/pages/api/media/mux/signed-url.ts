import { Logger } from '@/middleware'
import { NextApiRequest } from '@/models'
import { MediaService } from '@/services'
import { COOKIES, extractJwtClaims } from '@/utils'
import { NextApiResponse } from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(Logger.request)
  .get(async (req, res) => {
    const decoded: { user: { id: string } } = extractJwtClaims(
      req.cookies[COOKIES.AUTH.ACCESS_TOKEN],
    )

    try {
      const response = await MediaService.getMuxSignedUrl(decoded?.user?.id)

      return res.status(200).json(response)
    } catch (e) {
      res.status(400).json(e)
    }
  })

export default handler
