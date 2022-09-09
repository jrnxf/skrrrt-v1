import moment from 'moment'
import { getRepository, LessThan } from 'typeorm'
import { ChatMessage } from '@/models'

export class ChatService {
  static async deleteOldMessages(): Promise<number> {
    const oneWeekAgo = moment().subtract(1, 'week').toDate()
    const result = await getRepository<ChatMessage>('ChatMessage').delete({
      created_at: LessThan(oneWeekAgo),
    })
    return result.affected
  }
}
