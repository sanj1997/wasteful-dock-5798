const express = require("express")
const router=express.Router()
const Razorpay=require("razorpay")
require("dotenv").config()
router.post("/",async(req,res)=>{
    const {amount}=req.body
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET })
    let order=await instance.orders.create({
      amount: amount*500,
      currency: "INR",
      receipt: "receipt#1",
    })
    res.status(201).send({message:"Successful",order:order,amount:amount})
})
module.exports=router