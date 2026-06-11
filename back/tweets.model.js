import mongoose from "mongoose";

const TweetSchema= new mongoose.Schema({

    

},{timestamps:true})

export const Tweet= mongoose.model("Tweet",TweetSchema)