import { IsEmail, MinLength } from 'class-validator'
import { Unique } from 'typeorm'
import { User } from '@/models/user'

@Unique(['email'])
export class LoginInput implements Partial<User> {
  @IsEmail()
  email: string

  @MinLength(8, {
    message: 'Passwords must be longer than 8 characters',
  })
  password: string
}
