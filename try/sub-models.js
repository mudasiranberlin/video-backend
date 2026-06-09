import mongoose from "mongoose";

const subTodoSchema= new mongoose.Schema({

    content:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }

},{timestamps})



export const Todo= mongoose.model("Todo",subTodoSchema)