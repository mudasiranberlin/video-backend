import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    username:{
        typeof:String,
        lowercase:true,
        unique:true,
        required:true
    },
    email:{
        typeof:String,
        lowercase:true,
        unique:true,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    


},{timestamps:true})

export const user=mongoose.model("user",userSchema);
