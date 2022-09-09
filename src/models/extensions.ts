import { NextApiRequest as _NextApiRequest } from 'next'
import { Connection } from 'typeorm'

export interface NextApiRequest extends _NextApiRequest {
  db: Connection
}
