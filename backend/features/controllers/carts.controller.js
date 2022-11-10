const jwt=require("jsonwebtoken");
const CartModel = require("../models/cart.model");
require("dotenv").config()


const addTocart=async(pId,mainToken)=>{
      let response;
      try{
         const userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
         const isPresent=await CartModel.find({userId:userData.id},{"products.productId":pId})
         if(isPresent.length>0)
         {
            response={message:"Product already added in the cart"}
         }
         else
         {
            const newProduct=await CartModel.updateOne({userId:userData.id},{$push:{products:{productId:pId,quantity:1}}})
            response={message:"Product added to cart successfully"}
         }
      }catch(e){
          response={message:e.message}
      }
}

module.exports={addTocart}