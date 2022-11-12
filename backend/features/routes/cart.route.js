const express = require("express")
const { addTocart, removeFromCart, createCart, updateCart, getCart } = require("../controllers/carts.controller")
const router=express.Router()
const authmiddleware=require("../middlewares/authmiddleware")
//create cart
router.post("/create-cart",authmiddleware,async(req,res)=>{
    console.log(req.body.userID,"user id")
    const response=await createCart(req.body.userID)
    if(response.message==="Cart already exists, please continue"||response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//add to cart
router.post("/:id",authmiddleware,async(req,res)=>{
    const {id}=req.params
    console.log(id,"req id")
    const mainToken=req.headers.authorization
    const response=await addTocart(id,mainToken)
    if(response.message==="Product already added in the cart")
    {
        return res.send(response)
    }
    else if(response.message==="Product currently unavailable")
    {
        return res.status(401).send(response)
    }
    else if (response.message==="Product added to cart successfully")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//delete from cart
router.delete("/",authmiddleware,async(req,res)=>{
    const {id}=req.body
    const mainToken=req.headers.authorization
    const response= await removeFromCart(id,mainToken)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//update Cart
router.patch("/",authmiddleware,async(req,res)=>{
    const {id,quantity}=req.body
    const mainToken=req.headers.authorization
    const response=await updateCart(id,mainToken,quantity)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get cart
router.get("/:id",authmiddleware,async(req,res)=>{
    const {id}=req.params
    const response=await getCart(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
module.exports=router