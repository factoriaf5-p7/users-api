import { Request, Response } from "express";
import user from '../models/user.model';

export const getUserController = (req:Request, res:Response)=>{
    const result = user.findAll()
    // res.send('hello from the controller');
    res.json(result);
}