import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    fullNamae:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    avatar:{
        type:String
    },
    password:{
        type:String,
        required:[true,"Please Enter Valid Password"]
    },
    coverImage:{
        type:String
    },
    
},{timestamps:true})

export const User=mongoose.model("User",userSchema)