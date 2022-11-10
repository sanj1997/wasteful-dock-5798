const express = require("express")
const { getAllProducts, getSingleProduct, removeProduct, updateProduct, addProducts } = require("../controllers/products.controller")
const router=express.Router()

//add product
router.post("/",async(req,res)=>{
    const mainToken=req.headers.authorization
    const response=await addProducts(mainToken,req.body)
    if(response.message==="Unauthorized")
    {
        return res.status(401).send(response)
    }
    else if(response.message==="Product already exists, quantity updated")
    {
        return res.send(response)
    }
    else if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get all products
router.get("/all-products",async(req,res)=>{
    const response=await getAllProducts(req)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//get one product
router.get("/:id",async(req,res)=>{
    const {id}=req.params
    const response=await getSingleProduct(id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    return res.status(401).send(response)
})

//delete a product
router.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const mainToken=req.headers.authorization
    const response=await removeProduct(mainToken,id)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    else if(response.message==="Unauthorized")
    {
        return res.status(401).send(response)
    }
    return res.status(401).send(response)
})

//update a product
router.patch("/:id",async(req,res)=>{
    const {id}=req.params
    const mainToken=req.headers.authorization
    const response=await updateProduct(mainToken,id,req.body)
    if(response.message==="Successful")
    {
        return res.send(response)
    }
    else if(response.message==="Unauthorized")
    {
        return res.status(401).send(response)
    }
    return res.status(401).send(response)
})
module.exports=router