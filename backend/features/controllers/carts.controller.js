const jwt=require("jsonwebtoken");
const CartModel = require("../models/cart.model");
const ProductModel = require("../models/product.model");
require("dotenv").config()

const createCart=async(id)=>{
    let response;
    try{
        const isPresent=await CartModel.findOne({userId:id})
        if(isPresent)
        {
            response={message:"Cart already exists, please continue"}
        }
        else
        {
           const newCart=await CartModel.create({userId:id,products:[]})
           response={message:"Successful"}
        }
    }catch(e){
        response={message:e.message}
    }
    return response
}

const addTocart=async(pId,mainToken)=>{
      let response;
      try{
         const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
         const isPresent=await CartModel.find({userId:userData.id},{"products.productId":pId})
         // console.log(isPresent.products.quantity)
         const checkAvailability=await ProductModel.findById(pId)

         // if(isPresent.products.length>0)
         // {
         //    response={message:"Product already added in the cart"}
         // }
         if(!checkAvailability)
         {
            response={message:"Product currently unavailable"}
         }
         else
         {
            console.log(pId,"product id",userData.id,"user id")
            const newProduct=await CartModel.updateOne({userId:userData.id},{$push:{products:{productId:pId,quantity:1}}})
            const updateProduct=await CartModel.updateOne({userId:userData.id,"products.productId":pId},{$set:{"products.quantity":1}})
            const product=await CartModel.findOne({userId:userData.id})
            console.log(updateProduct)
            console.log(product)
            response={message:"Product added to cart successfully"}
         }
      }catch(e){
          response={message:e.message}
      }
      return response
}

const removeFromCart=async(pId,mainToken)=>{
     let response;
     try{
       const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
       const updateCart=await CartModel.updatOne({userId:userData.id},{$pull:{products:{productId:pId}}})
       response={message:"Successful"}
     }catch(e)
     {
       response={message:e.message}
     }
     return response
}

const updateCart=async(pid,mainToken,quantity)=>{
      let response;
      try{
            const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
            const updateCart=await CartModel.updateOne(
                  {
                        userId:userData.id
                  },{
                        $set:{
                              "products.$[elemX].quantity":quantity
                        }
                  },{
                        arrayFilters:[
                             {
                               "elemX.productId":pid
                             }
                        ]
                  }
                  )
            response={message:"Successful"}      
      }catch(e){
         response={message:e.message}
      }
      return response
}

const getCart=async(id)=>{
      let response;
      try{
         const userCart=await CartModel.findOne({userId:id}).populate("products.productId")
         response={message:"Successful",data:userCart}
      }catch(e){
         response={message:e.message}
      }
   return response
}
module.exports={addTocart, removeFromCart,createCart, updateCart, getCart}