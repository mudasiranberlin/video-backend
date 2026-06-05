import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    password:{
        unique:true,
        type:String,
        required:[true,"Please Enter The Password"]
    }
},{timestamps:true})

export const user=mongoose.model("user",userSchema);