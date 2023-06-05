import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { green, red } from 'console-log-colors'
import { errorLogger, logger } from './shared/logger'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(green('database connected successfully'))

    app.listen(config.port, () => {
      logger.info(green(`server running on the port ${config.port}`))
    })
  } catch (error) {
    errorLogger.error(red('failed to connect database '), red(error))
  }
}
bootstrap()
