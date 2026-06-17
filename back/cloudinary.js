import { v2 } from "cloudinary";
import fs from "fs"

cloudinary.config({ 
  cloud_name: 'my_cloud_name', 
  api_key: 'my_key', 
  api_secret: 'my_secret'
});

const uploadCloudnary =async(localFilePath)=>{
    try {
        if (!localFilePath) return
        //upload
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded sucessfully
        console.log("File is Uploaded on cloudinary",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved temporay file 
    }
}