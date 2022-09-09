// entities
import {
  ChatMessage,
  NextApiRequest,
  Post,
  RefreshToken,
  Stg,
  StgSet,
  StgSubmission,
  User,
} from '@/models'
import { NextApiResponse } from 'next'
import { Connection, getConnectionManager, getConnectionOptions } from 'typeorm'

const entities = [ChatMessage, StgSet, StgSubmission, Stg, User, Post, RefreshToken]

const entitiesHaveChanged = (prevEntities: any[], newEntities: any[]): boolean => {
  if (prevEntities.length !== newEntities.length) {
    // entities differ in length
    return true
  }
  for (let i = 0; i < prevEntities.length; i++) {
    if (prevEntities[i] !== newEntities[i]) {
      // entities differ in values
      return true
    }
  }
  // entities are the same
  return false
}

const updateConnectionEntities = async (connection: Connection, entities: any[]) => {
  if (!entitiesHaveChanged(connection.options.entities, entities)) return // do nothing

  // Building new entity metadata and synchronizing
  // @ts-ignore
  connection.options.entities = entities

  // @ts-ignore
  connection.buildMetadatas() // this is a protected method in the TypeOrm API that builds metadatas for all registered classes inside the connection.

  if (connection.options.synchronize) {
    await connection.synchronize()
  }
}

export const ensureConnection = async (req: NextApiRequest, _res: NextApiResponse, next) => {
  try {
    const connectionManager = getConnectionManager()
    const CONNECTION_NAME = 'default'

    if (connectionManager.has(CONNECTION_NAME)) {
      req.db = connectionManager.get(CONNECTION_NAME)

      if (!req.db.isConnected) {
        await req.db.connect()
      }
    } else {
      // Connection not found. Creating...
      const connectionOptions = await getConnectionOptions()
      req.db = await connectionManager
        .create({
          ...connectionOptions,
          entities: Object.values(entities),
        })
        .connect()
    }
  } catch (err) {
    console.log('An error occurred connecting to the database')
    console.log(err)
  }

  return next()
}
