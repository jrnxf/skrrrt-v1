import moment from 'moment'
import { getRepository } from 'typeorm'
import { v4 } from 'uuid'
import { RefreshToken } from '@/models'

export class AuthService {
  static async createRefreshToken(userId: number): Promise<RefreshToken> {
    const refreshToken = getRepository<RefreshToken>('RefreshToken').create({
      token: v4(),
      token_expiry: moment().add(1, 'year').toDate(),
      user_id: userId,
    })

    return await getRepository<RefreshToken>('RefreshToken').save(refreshToken)
  }
}
