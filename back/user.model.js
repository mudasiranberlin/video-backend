import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullNamae:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
    },
    avatar:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,"Please Enter Valid Password"]
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String,
    },
    watchHistroy:[
        {
            type:mongoose.Types.ObjectId,
            ref:""
        }
    ],
    refreshToken:{
        type:String
    }
},{timestamps:true})

userSchema.pre("save",function (next) {
    if (this.isModified("password")) return next();
    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken =function () {
    jwt.sign(
        {
            _id=this._id,
            email=this.email,
            username=this.username,
            fullNamae=this.fullNamae
        },
        process.env.generateAccessToken,
        {
            expiresIn:process.env.Access_token_Expiry
        }
    )
    
}
userSchema.methods.generateAccessToken =function () {

    jwt.sign(
        {
            _id=this._id,
        },
        process.env.generateAccessToken,
        {
            expiresIn:process.env.Access_token_Expiry
        }
    )
    
}

export const User =mongoose.model("User",userSchema)
