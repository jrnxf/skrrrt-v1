import { Stg, User } from '@/models'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { MuxVideo } from '@/models/base/mux-video'

@Entity({ name: 'stg_submissions' })
export class StgSubmission extends MuxVideo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'integer', nullable: true })
  stg_id: number

  @ManyToOne(() => Stg, (stg: Stg) => stg.submissions)
  @JoinColumn({ name: 'stg_id' })
  stg: Stg

  @Column({ type: 'integer', nullable: true })
  submitted_by_id: number

  @ManyToOne(() => User, (user: User) => user.stg_submissions)
  @JoinColumn({ name: 'submitted_by_id' })
  submitted_by: User

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
