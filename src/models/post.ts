import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from '@/models'
import { MuxVideo } from '@/models/base/mux-video'

@Entity({ name: 'posts' })
export class Post extends MuxVideo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'integer', nullable: true })
  posted_by_id: number

  @ManyToOne(() => User, (user: User) => user.posts)
  @JoinColumn({ name: 'posted_by_id' })
  posted_by: User

  @Column({ type: 'text', nullable: true })
  body: string

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
