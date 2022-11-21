const jwt = require("jsonwebtoken");
const CartModel=require("../models/carts.model")
require("dotenv").config();

const addTocart = async (pId, mainToken) => {
  let response;
  try {
    const userData = jwt.verify(mainToken, process.env.JWT_MAIN_SECRET);
    const isPresent =await CartModel.findOne({userId:userData.id,product:pId})
    console.log(isPresent)
    if(isPresent)
    {
      let update=await CartModel.findByIdAndUpdate(isPresent._id,{$set:{quantity:isPresent.quantity+1}})
      response={message:"Item in cart updated successfully"}
    }
    else
    {
      let newProduct=await CartModel.create({userId:userData.id,product:pId})
      response={message:"Item added to cart successfully"}
    }
  } catch (e) {
    response = { message: e.message };
  }
  return response;
};

const removeFromCart = async (pId, mainToken) => {
  let response;
  try {
    const userData = jwt.verify(mainToken, process.env.JWT_MAIN_SECRET);
    const updateCart = await CartModel.deleteOne({userId:userData.id,product:pId});
    response = { message: "Item removed successfully" };
  } catch (e) {
    response = { message: e.message };
  }
  return response;
};

const removeUserCart= async(uid)=>{
  console.log(uid)
   let response
   try{
       const userCart=await CartModel.deleteMany({userId:uid})
       response={message:"Successful"}
   }catch(e){
       response={message:e.message}
   } 
   return response
}

const updateCart = async (pid, mainToken, quantity) => {
  let response;
  try {
    const userData = jwt.verify(mainToken, process.env.JWT_MAIN_SECRET);
    const pr=await CartModel.findOne({userId:userData.id,product:pid})
    const updateCart = await CartModel.updateOne({userId: userData.id,product:pid},{$set:{quantity:quantity}});
    response = { message: "Cart updated successfully"};
  } catch (e) {
    response = { message: e.message };
  }
  return response;
};

const getCart = async (id) => {
  let response;
  try {
    const userCart = await CartModel.find({ userId: id }).populate("product")
    response = { message: "Successful", data: userCart };
  } catch (e) {
    response = { message: e.message };
  }
  return response;
};
module.exports = { addTocart, removeFromCart, updateCart, getCart, removeUserCart };
