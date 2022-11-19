const express = require("express")
const {  addToOrders, getOrders } = require("../controllers/orders.controller")
const router=express.Router()
const authmiddleware=require("../middlewares/authmiddleware")
const OrderModel = require("../models/order.model")
require("dotenv").config()

//add to orders
router.post("/:id",authmiddleware,async(req,res)=>{
    const {id}=req.params
    const response=await addToOrders(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    else if(response.message="Orders updated successfully")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get Orders
router.get("/:id",authmiddleware,async(req,res)=>{
    const {id}=req.params
    const response=await getOrders(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

router.get("/all-orders/:id",async(req,res)=>{
    const mainToken=req.headers.authorization
    try{
        const data=jwt.decode(mainToken,`${process.env.JWT_MAIN_SECRET}`)
        if(data.role==="Admin")
        {
          const ordersData=await OrderModel.find()
          return res.send({message:"Successful",data:ordersData})
        }
    }catch(e){
        return res.status(401).send({message:"Failure"})
    }
})
//delete from orders 
module.exports=router