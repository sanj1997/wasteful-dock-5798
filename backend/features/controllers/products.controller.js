require("dotenv").config()
const ProductModel = require("../models/product.model");
const jwt=require("jsonwebtoken")
const addProducts=async(mainToken,data)=>{
    let response
     try{
         const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
         if(userData.role!="Admin")
         {
            response={message:"Unauthorized"}
         }
         else{
            const findProduct=await ProductModel.findOne({name:data.name,brand:data.brand})
            if(findProduct)
            {
                let newQuatnity=findProduct.quan+1
                const updateProduct=await ProductModel.updateOne({_id:findProduct._id},{$set:{quan:newQuatnity}})
                response={message:"Product already exists, quantity updated"}
            }
            else
            {
                const newProduct=await ProductModel.create(data)
                response={message:"Successful"}
            }
         }
     }catch(e){
        response={message:e.message}
     }
     return response
}
const getAllProducts=async(req)=>{
    const {page=1,category}=req.query
    let response;
    try{
       const allProducts=await ProductModel.find().skip((page-1)*6).limit(6)
       response={message:"Successful", data:allProducts}
    }catch(e){
       response={message:e.message}
    }
    return response
}
const getSingleProduct=async(id)=>{
    let response;
    try{
        const product = await ProductModel.findById(id)
        // console.log(product,"request")
        response={message:"Successful",data:product}
    }catch(e){
        response={message:e.message}
    }
    return response
}
const removeProduct=async(mainToken,id)=>{
    let response;
    try{
        const data=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
        if(data.role==="Admin")
        {
            await ProductModel.deleteOne({_id:id})
            response={message:"Successful"}
        }
        else
        {
            response={message:"Unauthorized"}
        }
    }catch(e)
    {
        response={message:e.message}
    }
    return response
}
const updateProduct=async(mainToken,id,newData)=>{
    let response;
    try{
        const data=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
        if(data.role==="Admin")
        {
            await ProductModel.updateOne({_id:id},{$set:newData})
            response={message:"Successful"}
        }
        else
        {
            response={message:"Unauthorized"}
        }
    }catch(e)
    {
        response={message:e.message}
    }
    return response
}
module.exports={addProducts,getAllProducts, getSingleProduct,removeProduct,updateProduct}