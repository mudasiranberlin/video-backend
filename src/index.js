 import mongoose from "mongoose";
 import { DB_NAME } from "./constants";

 const connectDB=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MOngoDB Connected !! DB HOST: ${connectionInstance}`);
        
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1)
    }
 }







 
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
