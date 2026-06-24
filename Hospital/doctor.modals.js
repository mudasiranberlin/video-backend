import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        
    }

},{timestamps:true})

export const doctor= mongoose.model("doctor",doctor)




import mongoose, { Types } from "mongoose";

const doctorSchema= new mongoose.Schema({
    name:{
        
    },
    salary:{
        
    },
    qualification:{
       
    },
    experienceInYears:{
       
    },
    worksInHospital:[
        
