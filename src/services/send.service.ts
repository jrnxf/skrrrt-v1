import aws from 'aws-sdk'
import jwt from 'jsonwebtoken'
import { ERROR_TYPES } from '@/models'

export class SendService {
  static async sendEmail(toEmail: any, subject: string, body: string): Promise<any> {
    console.log(`Sending email to ${toEmail}. Subject: ${subject}`, SendService.name)
    // Load the AWS SDK for Node.js
    // Set the region
    aws.config.update({ region: process.env.SKRRRT_AWS_REGION })

    // Create sendEmail params
    var params = {
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: body,
          },
        },
      },
      Source: 'colby@skrrrt.io' /* required */,
      ReplyToAddresses: ['colby@skrrrt.io'],
    }

    try {
      // Create the promise and SES service object
      // Handle promise's fulfilled/rejected states
      const data = await new aws.SES({
        apiVersion: '2010-12-01',
        region: process.env.SKRRRT_AWS_REGION,
        accessKeyId: process.env.SKRRRT_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.SKRRRT_AWS_SECRET_ACCESS_KEY,
      })
        .sendEmail(params)
        .promise()
      return data
    } catch (e) {
      console.error(e, e.stack, SendService.name)
      throw e // let auth service handle this and delete the user to free up the account
    }
  }

  static async sendEmailVerificationEmail(email: string) {
    try {
      const signedVerifyEmailToken = jwt.sign({ email }, process.env.JWT_SECRET)
      const url = `${process.env.APP_URL}/api/auth/verify-token/verify-email?token=${signedVerifyEmailToken}`

      const html = `
        <div>
          <p>Finalize your registration by clicking <a href="${url}">here</a>. You'll be glad you did.</p>
          <img src="https://media.giphy.com/media/5wWf7GR2nhgamhRnEuA/giphy-downsized.gif" />
        </div>`

      return await SendService.sendEmail(email, 'skrrrt - email verification ✅', html)
    } catch {
      throw {
        type: ERROR_TYPES.EMAIL_SEND_ERROR,
      }
    }
  }

  static async sendResetPasswordEmail(email: string) {
    const resetPasswordToken = jwt.sign({ email }, process.env.JWT_SECRET)
    const url = `${process.env.APP_URL}/api/auth/verify-token/reset-password?token=${resetPasswordToken}`

    const html = `
            <div>
              <p>Reset your password by clicking <a href="${url}">here</a>. If you did not attempt to reset your password, contact a site admin as soon as possible.</p>
            </div>`
    return await SendService.sendEmail(email, 'skrrrt - reset password 🔐', html)
  }
}
