import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

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

export const signin= async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser=await User.findOne({email});
        if(!validUser) return next(errorHandler(404,'user not found!'));
        const ValidPassword=bcryptjs.compareSync(password,validUser.password);
        if(!ValidPassword) return next(errorHandler(401,'Wrong credentilas'));
        const token=jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {password:pass, ...restInfo}=validUser._doc;
        res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(restInfo);

         } catch (error) {
        next(error);
    }
};