import mongoose from "mongoose";
const CommentSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    video:{
        type:mongoose.Types.ObjectId,
        ref:"Videos"
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"Owner"
    }

},{timestamps:true})

export const comment= mongoose.model("comment",CommentSchema)