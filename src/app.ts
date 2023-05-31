import express, { Application, NextFunction, Request, Response } from 'express';

const app: Application = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('server running')
})

export default app;