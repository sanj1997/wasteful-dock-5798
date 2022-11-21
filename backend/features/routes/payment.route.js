const express = require("express")
const router=express.Router()
const Razorpay=require("razorpay")
const authmiddleware=require("../middlewares/authmiddleware")
require("dotenv").config()
router.post("/",authmiddleware,async(req,res)=>{
    const {amount}=req.body
    console.log(amount)
    try{
      var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET })
    let order=await instance.orders.create({
      amount: amount,
      currency: "INR",
      receipt: "receipt#1",
    })
    return res.status(201).send({message:"Successful",order:order,amount:amount})
    }catch(e){
      return res.status(401).send({message:e.message})
    }
})
module.exports=router