const express = require("express")
const {  addToOrders, getOrders } = require("../controllers/orders.controller")
const router=express.Router()
const authmiddleware=require("../middlewares/authmiddleware")


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
//delete from orders 
module.exports=router