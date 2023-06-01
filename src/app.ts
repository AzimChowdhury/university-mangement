import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/user.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route

app.use('/api/v1/users/', userRouter)

//default
app.get('/', (req: Request, res: Response) => {
  res.send('server running successfully')
})

export default app
