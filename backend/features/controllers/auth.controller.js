const UserModel = require("../models/user.model")
const crypto = require("crypto-js")
const jwt = require("jsonwebtoken")
const sendEmail = require("../utils/email")
const Redis = require("ioredis")
const redis = new Redis(
    `redis://:T6wOQm0ht94AjmN6YlDQWqNfXfUJAQ6M@redis-14026.c301.ap-south-1-1.ec2.cloud.redislabs.com:14026`
)
require("dotenv").config()

const createUserEmail=async(firstName,lastName,userName,password,email)=>{
    
       let response;
       try{
           const user=await UserModel.findOne({email:email})
     
           if(user)
           {
               response={message:"Account already exists"} 
           }
           else
           {
               const otp=Math.floor(Math.random()*100000)
               const sentOtp=await sendEmail(email,otp)
               const hashed_password=crypto.AES.encrypt(password,process.env.PASSWORD_SECRET).toString()
               const newUser=await UserModel.create({firstName,lastName,userName,password:hashed_password,email})
               redis.set(email,otp,"ex",300,(err,res)=>{
                  if(err)
                  {
                    console.log(err,"error")
                  }
                  else console.log(res,"success")
               })
               response= {message:"Otp is sent to your registered email"}
           }
       }
       catch(e)
       {
           response={message:e.message}
       }
   return response

}

const reSendOtp = async (email) => {
    console.log(email)
    let response;
    try {
        const verifyUser = await UserModel.findOne({ email: email })
        if (!verifyUser) {
            response = { message: "Email not registered" }
        }
        else if(verifyUser.isVerified===true)
        {
            response = {message: "Email is already verified"}
        }
        else {
            const otp = Math.floor(Math.random() * 100000)
            const sentOtp = await sendEmail(email, otp)
            redis.set(email, otp, "ex", 300, (err, res) => {
                if (err) {
                    console.log(err, "error")
                }
                else console.log(res, "success")
            })
            response = { message: "Otp is sent to your registered email" }
        }
    } catch (e) {
        response = { message: e.message }
    }
    return response
}
const verifyUser = async (otp, email) => {
    let response;
    try {
        //check if otp is valid or not with redis//
        // console.log(otp,email)
        const data = await getDataFromRedis(email)
        // console.log(data,"otp from db")
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            response = { message: "Email is not registered" }
        }
        else if (!data) {
            response = { message: "Otp is expired" }
        }
        else if (data != otp) {
            response = { message: "Invalid Otp" }
        }
        else {
            const updateUser = await UserModel.updateOne({ email: email }, { $set: { isVerified: true } })
            response = { message: "Email verification successful" }
        }
    } catch (e) {
        response = { message: e.message }
    }
    return response
}

const validateUser = async (email, password) => {
    let response;
    try {
        const user = await UserModel.findOne({ email: email })
        const password_db = crypto.AES.decrypt(user.password, `${process.env.PASSWORD_SECRET}`).toString(crypto.enc.Utf8)
        if (!user || password !== password_db) {
            response = { message: "Invalid credentials" }
        }
        else {
            const mainToken = jwt.sign({ id: user._id, role: user.role }, `${process.env.JWT_MAIN_SECRET}`, {
                expiresIn: "5 days"
            })
            const refreshToken = jwt.sign({ id: user._id, role: user.role }, `${process.env.JWT_REFRESH_SECRET}`, {
                expiresIn: "7 days"
            })
            response = { message: "Login successful", asv: mainToken, csv: refreshToken, firstName: user.firstName, lastName: user.lastName, userName: user.userName, uId: user._id, role: user.role, email:user.email }
        }
    }
    catch (e) {
        response = { message: e.message }
    }
    return response
}

const removeUser = () => {

}

const revalidateUser = async (refreshToken) => {
    // console.log(refreshToken,"hello")
    let response;
    try {
        const data = jwt.verify(refreshToken, `${process.env.JWT_REFRESH_SECRET}`)
        delete data.exp
        delete data.iat
        const newMainToken = jwt.sign(data, `${process.env.JWT_MAIN_SECRET}`, {
            expiresIn: "5 seconds"
        })
        response = { message: "successful", asv: newMainToken }
    } catch (e) {
        response = { message: e.message }
    }
    return response
}
const forgotPassword = async (email) => {
    let response;
    try {
        const user = await UserModel.findOne({ email: email })
        if (!user) {
            response = { message: "Email not registered" }
        }
        else {
            const otp = Math.floor(Math.random() * 100000)
            //while storing in redis, we will give time = 5 min
            redis.set(email, otp, "ex", 300, (err, res) => {
                if (err) {
                    console.log(err, "error")
                }
                else console.log(res, "success")
            })
            const sendResponse = await sendEmail(email, otp)
            response = { message: "Otp has been sent to registered email ID" }
        }
    } catch (e) {
        response = { message: e.message }
    }
    return response
}
const resetPassword = async (email, otp, password) => {
    let response;
    try {
        const findUser = await UserModel.findOne({ email: email })
        const otpFromRedis = await getDataFromRedis(email)
        if (!findUser) {
            response = { message: "Email is not registered" }
        }
        else if (!otpFromRedis) {
            response = { message: "Otp is expired" }
        }
        else if (otpFromRedis != otp) {
            response = { message: "Invalid otp" }
        }
        else {
            const updateUser = await UserModel.updateOne({ email: email }, { $set: { password: password } })
            response = { message: "Password updated successfully" }
        }
    } catch (e) {
        response = { message: e.message }
    }
    return response
}
const getDataFromRedis = (key) => {
    return redis.get(key).then((res) => {
        return res
    }).catch((err) => {
        console.log(err)
        return err
    })

}
module.exports = { createUserEmail, validateUser, removeUser, revalidateUser, verifyUser, forgotPassword, resetPassword, reSendOtp }