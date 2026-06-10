import mongoose from "mongoose";

const MedcineSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    dosage:{
        type:String,
        required:true
    },
    stockQuantty:{
        type:Number,
        required:true
    },
    expir


},{timestamps:true})

export const Medcine= mongoose.model("Medcine",MedcineSchema)