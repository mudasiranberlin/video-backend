import e from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import {uploadOnCLoudinary} from "../utils/cloudinary.js" 
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= asyncHandler (async (req,res)=>{
    // res.status(200).json(
    //     {
    //         message:"Mudasir Is Good and Fine Everthing"
    //     })
    // step to register user from frontend but here we will get using postman
    // get user details from frontend
    //validation. check not empty
    // check if user already exists : check using username and email
    // check for images, check for avatar
    // upload them to cloudnary, avatar 
    // create user object - create entry in db
    //remove password and refresh token feild from response
    // check for user creation 
    // return res


    const {fullName,email,username,password}=req.body
    console.log("EMail",email);
    console.log("FullNmae",fullName);

    // if (fullName=="") {
    //     throw new ApiError(400,"Full Name is Required");
    // }
    // You can write like this for all or if you expert you can use this 

    if (
        [fullName,email,username,password].some((field)=>field?.trim() ==="")
    ) {
        throw new ApiError(400, "All feilds are Required");
        
    }

    const existedUser= await User.findOne({
        $or:[{ username },{ email }]
    })
    if (existedUser) {
        throw new ApiError(409,"User with email or Username is ALready existed");
    }
    
    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
    // const coverImageLocalPath=req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400,"Avatar File is Required");
    }

    const avatar= await uploadOnCLoudinary(avatarLocalPath)
    const coverImage= await uploadOnCLoudinary(coverImageLocalPath);
    // Avartar // not working //
    if (!avatar) {
        throw new ApiError(400,"Avatar file is Required")
    }
    const user= await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url||"",
        email,
        password,
        username: username.toLowerCase()
    })
    const createdUser= await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500,"Something went wrong while create user");
        
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser, "User Registered Sucessfully")
    )






})
export{
    registerUser,
}