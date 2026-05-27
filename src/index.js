import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { MulterError } from "multer";

dotenv.config({
    path:'./.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`Server is Running at Port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo db Connection failed",err);
})











// import express from "express"
// const app =express()
//  //First Approach connect Db
//  ( async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error",error);
//             throw error
            
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is Listening on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error("Error",error);
//         throw err
        
        
//     }
//  })()
