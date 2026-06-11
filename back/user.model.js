import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullNamae:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"Please Enter Valid Password"]
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String,
    },
    watchHistroy:[
        {
            type:mongoose.Types.ObjectId,
            ref:""
        }
    ]
},{timestamps:true})

export const User=mongoose.model("User",userSchema)