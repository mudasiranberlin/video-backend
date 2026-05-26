const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}

// const asyncHandler = (fun) =>{()=>{}} //both are same
// const asyncHandler = (fun) =>()=>{} ////both are same
// const asyncHandler = (fun) =>async ()=>{} ////both are same


// // First way

// const asyncHandler =(fn)=>async (req,res,next)=>{

//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         resizeBy.status(error.code||500).json(
//             {
//                 success:false,
//                 message:err.message
//             }
//         )
//     }
// }