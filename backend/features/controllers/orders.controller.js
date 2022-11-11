const CartModel = require("../models/cart.model");
const OrderModel = require("../models/order.model");

const createOrder=async(id)=>{
    let response;
    try{
      const isPresent=await OrderModel.findOne({userId:id})
      if(isPresent)
      {
        response={message:"Order already exists, please continue"}
      }
      else
      {
        const newOrder=await OrderModel.create({userId:id})
        response={message:"Successful"}
      }
    }catch(e){
        response={message:e.message}
    }
    return response
}

const addToOrders=async(uid)=>{
    let response;
    try{
         const userCart=await CartModel.findOne({userId:uid}).populate("product")
        //  let data=[]
         for(let i=0;i<userCart.products.length;i++)
         {
            userCart.products[i].date = getDate()
            const updateUserOrders=await OrderModel.updateOne({userId:uid},{$push:{products:userCart.products[i]}})
            // data.push(userCart.products[i])
         }
        //  const updateUserOrders=await OrderModel.updateOne({userId:uid},{$push})
        response={message:"Successful"}
    }catch(e){
       response={message:e.message}
    }
    return response
}

const getOrders=async(uid)=>{
   let response;
   try{
      const userOrders=await OrderModel.findOne({userId:uid})
      response={message:"Successful",data:userOrders}
   }catch(e){
      response={message:e.message}
   }
   return response
}
const getDate=()=>{
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate
}
module.exports={createOrder, addToOrders, getOrders}