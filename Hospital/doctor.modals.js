import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        lowercase: true,
        required: true,
    },
    salary:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experienceInYears:{
        type: Number,
        required: true,
        default:0
    },

    worksInHospital:{
        type: mongoose.Types.ObjectId,
        ref: "Hospital",
        required: true
    }

},{timestamps:true})

export const doctor= mongoose.model("doctor",doctor)