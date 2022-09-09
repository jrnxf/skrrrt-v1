import { User } from '@/models/user'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'chat_messages' })
export class ChatMessage {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'text', nullable: true })
  text: string

  @Column({ type: 'integer', nullable: true })
  author_id: number

  @ManyToOne(() => User, (user: User) => user.chat_messages)
  @JoinColumn({ name: 'author_id' })
  author: User

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
