const express = require("express")
const passport = require("../utils/google-oauth")
const {createUserEmail,validateUser,revalidateUser, verifyUser, forgotPassword, resetPassword, reSendOtp} = require("../controllers/auth.controller")
const router=express.Router()

//sign up
router.post("/signup",async(req,res)=>{
     const {firstName,lastName,userName,password,email}=req.body
     const response = await createUserEmail(firstName,lastName,userName,password,email)
     if(response.message==="Sign up successful")
     {
        return res.send(response)
     }
     else if(response.message==="Account already exists")
     {
        return res.status(500).send(response)
     }
     else if (response.message==="Otp is sent to your registered email")
     {
        console.log("heeeeeeeeeyyyyyyy")
        return res.send(response)
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
    else if(response.message==="Otp is expired")
    {
       return  res.status(401).send(response)
    }
    else if(response.message==="Invalid otp")
    {
        return  res.status(401).send(response)
    }
    return res.status(401).send(response)
})

//re-send otp
router.post("/verify-email/resend-otp",async(req,res)=>{
    const {email} = req.body
    const response=await reSendOtp(email)
    if(response.message==="Email not registered")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Otp is sent to your registered email")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//login
router.post ("/login",async(req,res)=>{
    const {email,password}=req.body
    const response=await validateUser(email,password)
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
router.get("/refresh",async(req,res)=>{
    const refreshToken=req.headers.authorization
    const response=await revalidateUser(refreshToken)
    if(response.message==="successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//forgot password
router.post("/forgot-password",async(req,res)=>{
    const {email} = req.body;
    const response=await forgotPassword(email)
    if(response.message==="Email not registered")
    {
        return res.status(401).send(response)
    }
    else if("Otp has been sent to registered email ID")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//reset password
router.post("/reset-password",async(req,res)=>{
    const {email,otp,password}=req.body
    const response=await resetPassword(email,otp,password)
    if(response.message==="Email is not registered")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Otp is expired")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Invalid otp")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Password updated successfully")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//google oauth

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    console.log(req.user)
    // Successful authentication, redirect home.
    //create main token and refresh token here to store in redux store
    res.send("Google sign in successful")
    // res.redirect('/');
  });
//logout

module.exports=router