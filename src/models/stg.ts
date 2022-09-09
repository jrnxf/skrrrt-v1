import { StgSet } from '@/models/stg-set'
import { StgSubmission } from '@/models/stg-submission'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'stgs' })
export class Stg {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Column({ type: 'text', nullable: true })
  status: string

  @OneToMany(() => StgSet, (stgSet: StgSet) => stgSet.stg)
  sets: StgSet[]

  @OneToMany(() => StgSubmission, (stgSubmission: StgSubmission) => stgSubmission.stg)
  submissions: StgSubmission[]

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
