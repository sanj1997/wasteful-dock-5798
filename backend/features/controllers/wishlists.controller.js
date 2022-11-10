const jwt=require("jsonwebtoken");
const WishlistModel = require("../models/wishlist.model");
require("dotenv").config()
const addToWishlist=async(mainToken,productID)=>{
    let response;
    try{
        const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
        const isPresent=await WishlistModel.findOne({"products":{productId:productID},userId:userData.id})
        if(isPresent)
        {
            response={message:"Product already exists in wishlist"}
        }
        else
        {
            const updateWishlist=await WishlistModel.updateOne({userId:userData.id},{$push:{products:productID}})
            response={message:"Successful"}
        }
    }catch(e){
         response={message:e.message}
    }
    return response
}
const getWishlist=async(id,mainToken)=>{
        let response;
        try{
           const userWishlist=await WishlistModel.findOne({userId:id}).populate("product")
           response={message:"Successful",data:userWishlist}
        }catch(e){
           response={message:e.message}
        }
    return response    
}

const deleteFromWishlist=async(id,mainToken)=>{
    let response;
    try{
        const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
        const updateWishlist=await WishlistModel.updateOne({userId:userData.id},{$pull:{products:{productId:id}}})
        response={message:"Successful"}
    }catch(e){
        response={message:e.message}
    }
    return response
}
module.exports={addToWishlist, getWishlist, deleteFromWishlist}