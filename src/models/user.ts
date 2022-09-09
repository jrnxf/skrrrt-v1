import { ChatMessage, StgSet, StgSubmission, Post, RefreshToken } from '@/models'
import { IsEmail, IsOptional, Matches, MinLength } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number

  @Matches(/^[A-Za-z]+(-[A-Za-z]+)*$/, {
    message: 'Username only accepts letters and hyphens, and must start and end with a letter',
  })
  @Column({ type: 'text', nullable: true })
  username: string

  @Column({ type: 'text', nullable: true })
  full_name: string

  @IsOptional()
  @IsEmail()
  @Column({
    type: 'text',
    nullable: true,
    select: false,
  })
  email: string

  @Column({ type: 'text', nullable: true, select: false })
  @IsOptional()
  @MinLength(8)
  password: string

  @Column({
    type: 'boolean',
    nullable: false,
    select: false,
  })
  @IsOptional()
  verified_email: boolean

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  role: string

  token?: string

  @OneToMany(() => StgSet, (stgSets: StgSet) => stgSets.set_by)
  stg_sets: StgSet[]

  @OneToMany(() => StgSubmission, (stgSubmission: StgSubmission) => stgSubmission.submitted_by)
  stg_submissions: StgSubmission[]

  @OneToMany(() => Post, (post: Post) => post.posted_by)
  posts: Post[]

  @OneToMany(() => ChatMessage, (chatMessage: ChatMessage) => chatMessage.author)
  chat_messages: ChatMessage[]

  @OneToMany(() => RefreshToken, (refreshToken: RefreshToken) => refreshToken.user)
  refresh_tokens: RefreshToken[]

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date
}
