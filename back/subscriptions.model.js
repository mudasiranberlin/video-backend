import mongoose from "mongoose";

const SubscriptionSchema= new mongoose.Schema({
    subscriber:{
        type:mongoose.Types.ObjectId,
        ref:""
    }


},{timestamps:true})

export const Subscription =mongoose.model("Subscription",SubscriptionSchema)