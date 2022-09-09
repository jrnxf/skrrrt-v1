import { Stg, User } from '@/models'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { MuxVideo } from '@/models/base/mux-video'

@Entity({ name: 'stg_sets' })
export class StgSet extends MuxVideo {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'integer', nullable: true })
  stg_id: number

  @ManyToOne(() => Stg, (stg: Stg) => stg.sets)
  @JoinColumn({ name: 'stg_id' })
  stg: Stg

  @Column({ type: 'integer', nullable: true })
  set_by_id: number

  @ManyToOne(() => User, (user: User) => user.stg_sets)
  @JoinColumn({ name: 'set_by_id' })
  set_by: User

  @Column({ type: 'text', nullable: true })
  title: string

  @Column({ type: 'text', nullable: true })
  instructions: string

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
