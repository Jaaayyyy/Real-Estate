import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { errorHandler } from "../utils/error.js";

export const signup = async(req,res,next)=>{
    const {username,email,password}=req.body;
    const hashedpassword=bcryptjs.hashSync(password,10);
    const newUser =new User({username,email,password:hashedpassword});
    try {
        await newUser.save();
        res.status(201).json('User created succesfully');
        
    } catch (error) {
       next(error);
    }
   
};