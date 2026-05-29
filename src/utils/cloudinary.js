import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCLoudinary= async (localFilePath)=>{
    try {
        if (!localFilePath) return null
        //upload the file
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded sucessfully
        // console.log("File is Uploaded on Cloudinary",response.url);
        fs.unlinkSync(localFilePath);
        return response;

        
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCLoudinary}
