import { Request, Response } from "express";
import userModel from '../models/user.model';

export const getUserController = (req:Request, res:Response)=>{
    const result = userModel.findAll()
    // res.send('hello from the controller');
    res.json(result);
}

export const sendUserController = (req:Request, res:Response)=>{
    console.log(req.body);

    const user = req.body;
    const result = userModel.createUser(user);
    res.json(result);
}