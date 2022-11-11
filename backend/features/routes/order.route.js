const express = require("express")
const { createOrder, addToOrders, getOrders } = require("../controllers/orders.controller")
const router=express.Router()

//create orders
router.post("/create-order",async(req,res)=>{
    const {id}=req.body
    const response=await createOrder(id)
    if(response.message==="Order already exists, please continue"||response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//add to orders
router.post("/",async(req,res)=>{
    const {id}=req.body
    const response=await addToOrders(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get Orders
router.get("/:id",async(req,res)=>{
    const {id}=req.params
    const response=await getOrders(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
//delete from orders 
module.exports=router