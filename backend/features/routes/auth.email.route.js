const { response } = require("express")
const express = require("express")
const {createUser,validateUser,revalidateUser, verifyUser} = require("../controllers/auth.controller")
const router=express.Router()

//sign up
router.post("/signup",async(req,res)=>{
     const {firstName,lastName,userName,password,email,phone}=req.body
     const response = await createUser(firstName,lastName,userName,password,email,phone)
     if(response.message==="Sign up successful")
     {
        return res.send(response)
     }
     else if(response.message==="Account already exists")
     {
        return res.status(500).send(response)
     }
     return res.status(401).send(response)
})
//verify email
router.post("/verify-email",async(req,res)=>{
    const {otp,email}=req.body

    const response=await verifyUser(otp,email)
    if(response.message==="Email verification successful")
    {
       return res.send(response)
    }
    else if(response.message==="Email is not registered")
    {
       return  res.status(401).send(response)
    }
    return res.status(401).send(response)
})
//login
router.post ("/login",async(req,res)=>{
    const {email,password,phone,userName}=req.body
    const response=await validateUser(email,password,phone,userName)
    if(response.message==="Invalid credentials")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Login successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//refresh token
router.post("/refresh",async(req,res)=>{
    const mainToken=req.headers.authorization
    const response=await revalidateUser(mainToken)
    if(response.message==="successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//forgot password
router.post("/forgot-password",async(req,res)=>{
    const {email} = req.body;
    
})
//google oauth
//logout

module.exports=router