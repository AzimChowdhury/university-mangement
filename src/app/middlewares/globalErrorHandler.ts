import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import config from '../../config'
import handleValidationError from '../../errors/handleValidationError'
import ApiError from '../../errors/ApiError'
import { errorLogger } from '../../shared/logger'

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalErrorHandler', error)
    : errorLogger.error('globalErrorHandler', error)

  let statusCode = 500
  let message = 'something went wrong'
  let errorMessage: IGenericErrorMessage[] = []

  if (error.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    ;(statusCode = simplifiedError.statusCode),
      (message = simplifiedError.message),
      (errorMessage = simplifiedError.errorMessage)
  } else if (error instanceof ApiError) {
    statusCode = error.statusCode
    ;(message = error.message),
      (errorMessage = error.message
        ? [{ path: '', message: error.message }]
        : [])
  } else if (error instanceof Error) {
    ;(message = error.message),
      (errorMessage = error.message
        ? [{ path: '', message: error.message }]
        : [])
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === 'production' ? undefined : error.stack,
  })
  next()
}

export default globalErrorHandler
