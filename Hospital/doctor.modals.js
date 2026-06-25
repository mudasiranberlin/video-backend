import mongoose from "mongoose";

const doctorScheme = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        required:true
    },
    salary:{
        type: String,
        required: true,
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true,
        default:0
    },
    worksinhospital:{
        type: mongoose.Types.ObjectId,
        ref: "Video",
        required: true
    }

},{timestamps:true})

export const Doctor =mongoose.model("Doctor",doctorScheme) 
