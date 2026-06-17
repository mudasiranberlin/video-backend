import { v2 } from "cloudinary";
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.my_cloud_name, 
  api_key: process.env.my_key, 
  api_secret: process.env.my_secret
});

