export class LoggerService {
  static log(message: string, data: any = null) {
    let context = `${message}\n${JSON.stringify(data)}`
  }
}
