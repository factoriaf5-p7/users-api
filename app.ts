import express, { Request, Response } from 'express';
import userRouter from './routes/user.route';

const app = express();

app.use(userRouter);

app.get('/',(req:Request, res: Response)=> res.send('hello world'));


const port = 3000;

app.listen(port,()=>console.log(`listening on ${port}`));