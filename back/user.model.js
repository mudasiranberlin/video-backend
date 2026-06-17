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

userSchema.pre("save", async function (next) {
    if(!this.isModdified("password"))return next();
    this.password=bcrypt.hash(this.password,10)
    next();
})
userSchema.methods.isPasswordCorrect =async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccesstoken= function () {
    jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullNamae:this.fullNamae
        },
        process.env.AccesstokenSecret,
        {
            expiresIn:process.env.AccesstokenExpiry
        }
    )
    
}

userSchema.methods.generateRefreshtoken= function () {
    jwt.sign(
        {
            _id:this._id,
            email:this.email, 
        },
        process.env.AccesstokenSecret,
        {
            expiresIn:process.env.AccesstokenExpiry
        }
    )
    
}

userSchema.methods.generateRefreshtoken= function () {
    
}

export const User =mongoose.model("User",userSchema)
