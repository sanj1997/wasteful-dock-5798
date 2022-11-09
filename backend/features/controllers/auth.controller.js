const UserModel=require("../models/user.model")
const crypto=require("crypto-js")
const jwt=require("jsonwebtoken")
const sendEmail = require("../utils/email")
require("dotenv").config()
const createUser=async(firstName,lastName,userName,password,email="0000000000",phone=0000000000)=>{
       //user existence 
       console.log(email,phone)
       let response;
       try{
           const user=await UserModel.findOne({$or:[{email:email},{phone:phone}]})
           console.log(user,"hey")
           if(user)
           {
               response={message:"Account already exists"} 
           }
           else
           {
               const otp=Math.floor(Math.random()*100000)
               const sentOtp=await sendEmail(email,otp)
               const hashed_password=crypto.AES.encrypt(password,process.env.PASSWORD_SECRET).toString()
               const newUser=await UserModel.create({firstName,lastName,userName,password:hashed_password,email,phone})
               response= {message:"Otp is sent to your registered email"}
           }
       }
       catch(e)
       {
           response={message:e.message}
       }
   return response
}

const verifyUser=async(otp,email)=>{
    let response;
     try{
        //check if otp is valid or not with redis//
        const user=await UserModel.findOne({email:email})
        if(!user)
        {
             response={message:"Email is not registered"}
        }
        else
        {
            const updateUser=await UserModel.updateOne({email:email},{$set:{isVerified:true}})
            response={message:"Email verification successful"}
        }
     }catch(e){
           response={message:e.message}
     }
    return response 
}

const validateUser=async(email,password,phone,userName)=>{
       let response;
       try{
           const user=await UserModel.findOne({$or:[{email:email,userName:userName},{phone:phone,userName:userName}]})
           const password_db=crypto.AES.decrypt(user.password,`${process.env.PASSWORD_SECRET}`).toString(crypto.enc.Utf8)
           if(!user||password!==password_db)
           {
               response={message:"Invalid credentials"} 
           }
           else
           {
               const mainToken=jwt.sign({id:user._id,role:user.role},`${process.env.JWT_MAIN_SECRET}`,{
                expiresIn:"5 seconds"
               })
               const refreshToken=jwt.sign({id:user._id,role:user.role},`${process.env.JWT_REFRESH_SECRET}`,{
                expiresIn:"10 seconds"
               })
               response= {message:"Login successful",asv:mainToken,csv:refreshToken}
           }
       }
       catch(e)
       {
           response={message:e.message}
       }
   return response
}

const removeUser=()=>{
   
}

const revalidateUser=(refreshToken)=>{
    let response;
    try{
        
        const data=jwt.verify(refreshToken,`${process.env.JWT_REFRESH_SECRET}`)
        delete data.exp
        delete data.iat
        const newMainToken=jwt.sign(data,`${process.env.JWT_MAIN_SECRET}`)
        response={message:"successful",asv:newMainToken}
    }catch(e){
        response={message:e.message}
    }
}
const forgotPassword=async(email)=>{
    let response;
   try{
      const user=await UserModel.findOne({email:email})
      if(!user)
      {
         response={message:"Email not registered"}
      }
      else
      {
         const OTP=Math.floor(Math.random()*100000)
         //while storing in redis, we will give time = 2 min
         const sendResponse=await sendEmail(email,OTP) 
      }
   }catch(e)
   {

   }
}
module.exports={createUser,validateUser,removeUser,revalidateUser,verifyUser}