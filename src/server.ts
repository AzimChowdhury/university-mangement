import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { green, red } from 'console-log-colors'

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(green('database connected successfully'))

    app.listen(config.port, () => {
      console.log(green(`server running on the port ${config.port}`))
    })
  } catch (error) {
    console.log(red('failed to connect database '), red(error))
  }
}
bootstrap()
