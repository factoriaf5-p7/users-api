import express, { Request, Response } from 'express';
import userRouter from './routes/user.route';
// const users = [
//     {
//         id:1,
//         name:'sara',
//         email:'sara@mail.com',
//         password:'12345'
//     }
// ]
const app = express();
app.use(express.json());
app.use(userRouter);


app.get('/',(req:Request, res: Response)=> res.send('hello world'));

// app.get('/users', (req:Request, res: Response)=> res.json(users));

const port = 3000;

app.listen(port,()=>console.log(`listening on ${port}`));