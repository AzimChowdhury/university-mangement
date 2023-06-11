import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
import ApiError from './errors/ApiError';
import { SemesterRoute } from './app/modules/academicSemester/as.route';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application route
app.use('/api/v1/', routes);

//default
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // console.log(x)
  // throw new ApiError(400, 'hehe server crashed')
  res.send('server running');
  // throw new Error('err logger test');
  // Promise.reject(new Error('unhandled promise rejection'))
});

// global error handler
app.use(globalErrorHandler);

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API not found',
      },
    ],
  });
});

export default app;
