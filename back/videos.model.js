import mongoose from "mongoose";

const videoSchema= new mongoose.Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:""
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    duration:{
        type:Number
    },
    views:{
        type:Number
    },
    isPublished:{
        Boolean:false
    }

},{timestamps:true})

export const Video= mongoose.model("Video",videoSchema);