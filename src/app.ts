import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users/', userRouter)

//default
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('server running')
})

// global error handler
app.use(globalErrorHandler)

export default app
