const express = require("express")
const { addToWishlist, getWishlist, deleteFromWishlist } = require("../controllers/wishlists.controller")
const router=express.Router()
const authmiddleware=require("../middlewares/authmiddleware")
//add to wishlist
router.post("/",authmiddleware,async(req,res)=>{
    const mainToken=req.headers.authorization
    const {id}=req.body
    const response=await addToWishlist(mainToken,id)
    if(response.message==="Product already exists in wishlist")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get wishlist
router.get("/:id",authmiddleware,async(req,res)=>{
    const mainToken=req.headers.authorization
    const {id}=req.params
    const response=await getWishlist(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//delete from wishlist
router.delete("/:id",authmiddleware,async(req,res)=>{
    const {id}=req.params
    const mainToken=req.headers.authorization
    const response=await deleteFromWishlist(id,mainToken)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})
module.exports=router