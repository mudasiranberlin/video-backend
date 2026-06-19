import { v2 } from "cloudinary";
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.my_cloud_name, 
  api_key: process.env.my_key, 
  api_secret: process.env.my_secret
});

const uploadCloudnary = async(localFilePath)=>{
    try {
        if (!localFilePath) return null
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("File has been uploaded on cloudnary",
        response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }
}