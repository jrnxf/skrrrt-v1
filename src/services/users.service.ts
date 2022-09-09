import bcrypt from 'bcryptjs'
import { getRepository } from 'typeorm'
import jwt from 'jsonwebtoken'
import { User } from '@/models/user'
import { validate } from 'class-validator'
import { ERROR_TYPES } from '@/models'

export class UsersService {
  static async getAllUsers(): Promise<User[]> {
    return await getRepository<User>('User').find({})
  }

  static async getUserById(id: number): Promise<User> {
    const user = await getRepository<User>('User').findOne({ id })
    if (user) return user
    else throw { type: ERROR_TYPES.UNVERIFIED_EMAIL }
  }

  static async getUserByUsername(username: string): Promise<User> {
    const user = await getRepository<User>('User').findOne({ username })
    if (user) return user
    else throw { type: ERROR_TYPES.UNVERIFIED_EMAIL }
  }

  static async getUserByEmail(email: string): Promise<User> {
    email = email.toLowerCase()
    const user = await getRepository<User>('User')
      .createQueryBuilder()
      // I specifically need password returned so that I can check sent in password against it
      .addSelect('User.email')
      .addSelect('User.verified_email')
      .where({
        email,
      })
      .getOne()
    if (user) return user
    else throw { type: ERROR_TYPES.INVALID_CREDENTIALS }
  }

  static async getUserWithPasswordByEmail(email: string): Promise<User> {
    email = email.toLowerCase()
    const user = await getRepository<User>('User')
      .createQueryBuilder()
      // I specifically need password returned so that I can check sent in password against it
      .addSelect('User.password')
      .addSelect('User.email')
      .addSelect('User.verified_email')
      .where({
        email,
      })
      .getOne()
    if (user) return user
    else throw { type: ERROR_TYPES.INVALID_CREDENTIALS }
  }

  static async isEmailAvailable(email: string): Promise<Boolean> {
    email = email.toLowerCase()
    const user = await getRepository<User>('User').findOne({ email })
    return !user
  }

  static async isUsernameAvailable(username: string): Promise<Boolean> {
    const user = await getRepository<User>('User').findOne({ username })
    return !user
  }

  static async registerUser(registerInput: any): Promise<User> {
    const { full_name, username, email, password } = registerInput

    const user = getRepository<User>('User').create({
      full_name,
      username,
      email: email.toLowerCase(),
      password,
      role: 'user',
      created_at: new Date(),
      updated_at: new Date(),
    })

    // NOTE: I want to perform validation against the unhashed password, but I don't actually save this
    const errors = await validate(user)

    if (errors.length > 0) {
      throw {
        type: ERROR_TYPES.VALIDATION_ERROR,
        messages: errors.flatMap((e) => Object.values(e.constraints).map((c) => c)),
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 12)
      user.password = hashedPassword
      const registeredUser = await getRepository<User>('User').save(user)
      return registeredUser
    }
  }

  static async resetPassword(token: string, newPassword: string): Promise<User> {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded?.email) {
      const user = await this.getUserByEmail(decoded.email)

      user.password = newPassword
      // NOTE: I want to perform validation against the unhashed password, but I don't actually save this
      const errors = await validate(user)
      if (errors.length > 0) {
        throw {
          type: ERROR_TYPES.VALIDATION_ERROR,
          messages: errors.flatMap((e) => Object.values(e.constraints).map((c) => c)),
        }
      } else {
        const hashedPassword = await bcrypt.hash(newPassword, 12)
        user.password = hashedPassword
        return await getRepository<User>('User').save(user)
      }
    } else {
      throw {
        type: ERROR_TYPES.RESET_PASSWORD_ERROR,
      }
    }
  }

  static async validateJwt(token: string) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET)
      if (decoded?.email) {
        const user = await this.getUserByEmail(decoded.email)
        if (user) {
          return true
        }
      }
      return false
    } catch (e) {
      console.error(e.message, e.stack)
      return false
    }
  }

  static async verifyEmailFromJwt(token: string): Promise<User> {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded?.email) {
      const user = await this.getUserByEmail(decoded.email)
      user.verified_email = true
      console.log(`Email verified for ${user.full_name}`)
      return await getRepository<User>('User').save(user)
    } else {
      throw {
        type: ERROR_TYPES.VERIFY_EMAIL_ERROR,
      }
    }
  }

  static async getUserFromJwt(token: string): Promise<User> {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET)
    if (decoded?.email) {
      return await this.getUserByEmail(decoded.email)
    } else {
      return null
    }
  }

  /**
   * DANGEROUS
   */
  static async deleteUserById(userId: number) {
    // return await getRepository<User>('User').delete(userId)
  }
}
