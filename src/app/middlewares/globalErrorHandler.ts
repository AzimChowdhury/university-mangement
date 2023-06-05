import { NextFunction, Request, Response } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import config from '../../config'

const globalErrorHandler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'something went wrong'
  let errorMessage: IGenericErrorMessage[] = []

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error.stack : undefined,
  })
  next()
}

export default globalErrorHandler
