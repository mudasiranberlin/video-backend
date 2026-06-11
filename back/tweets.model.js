import mongoose from "mongoose";

const TweetSchema= new mongoose.Schema({

    owner:{
        type:mongoose.Types.ObjectId,
        ref:""
    },
    content:{
        type:String,
    }

},{timestamps:true})

export const Tweet= mongoose.model("Tweet",TweetSchema)