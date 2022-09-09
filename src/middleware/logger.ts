import { NextApiRequest } from '@/models/extensions'
import chalk from 'chalk'
import { getTimeToMs } from '@/utils'

export class Logger {
  static request = async (req: NextApiRequest, res, next) => {
    console.log(chalk.blue(`${getTimeToMs()} REQ ${req.method} ${req.url}`))
    return next()
  }

  static info = (...args) => console.log(chalk.green(`${getTimeToMs()} INFO -- `, ...args))
  static error = (...args) => console.log(chalk.red(`${getTimeToMs()} ERROR -- `, ...args))
}
