import express from 'express';
const app:Application = express();
const port = 5000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('server running')
})

app.listen(port, () => {
    console.log(`server running on the port ${port}`);
})