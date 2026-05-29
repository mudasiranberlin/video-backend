import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.model";

export const verifyJWT =asyncHandler(async(req,resizeBy,next)=>{
    const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer","")
    if (!token) {
        throw new ApiError(401,"Unathorized Request");
    }
    const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

    const user= await User.findById(decodedToken?._id).select("-password -refreshToken")
    if (!user) {
        throw new ApiError(401,"Invalid Access Token");

        // Start new  49:27
        
    }
}) 
