import { Unique } from 'typeorm'
import { LoginInput } from '@/models/base/login-input'

@Unique(['username'])
export class RegisterInput extends LoginInput {
  full_name: string
  username: string
}
