const express = require("express")
const router=express.Router()

//add to cart
router.post("/",async(req,res)=>{
    const {productID}=req.body
    const mainToken=req.headers.authorization
})
module.exports=router