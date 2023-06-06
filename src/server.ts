import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { green, red } from 'console-log-colors'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})

let server: Server

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(green('database connected successfully'))

    server = app.listen(config.port, () => {
      logger.info(green(`server running on the port ${config.port}`))
    })
  } catch (error) {
    errorLogger.error(red('failed to connect database '), red(error))
  }

  process.on('unhandledRejection', err => {
    if (server) {
      server.close(() => {
        errorLogger.error(err)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
bootstrap()

process.on('SIGTERM', () => {
  logger.info('sigterm is received')
  if (server) {
    server.close()
  }
})
