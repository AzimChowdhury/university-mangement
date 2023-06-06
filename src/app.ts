import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
import ApiError from './errors/ApiError'
import { SemesterRoute } from './app/modules/academicSemester/as.route'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application route
app.use('/api/v1/users/', UserRoutes)
app.use('/api/v1/academic-semesters', SemesterRoute)

//default
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // console.log(x)
  // throw new ApiError(400, 'hehe server crashed')
  // res.send('server running')
  throw new Error('err logger test')
  // Promise.reject(new Error('unhandled promise rejection'))
})

// global error handler
app.use(globalErrorHandler)

export default app
