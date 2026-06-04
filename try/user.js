import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Enter the Correct Password"]
    }

},{timestamps:true});

export const user=mongoose.model("User",userSchema)