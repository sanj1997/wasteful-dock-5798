const OrderModel = require("../models/order.model");
const CartModel=require("../models/carts.model")



const addToOrders=async(uid)=>{
    let response;
    try{
         const userCart=await CartModel.find({userId:uid}).populate("product")
         console.log(userCart)
         const isPresent=await OrderModel.findOne({userId:uid})
         if(isPresent)
         {
                  const deleteOrders=await OrderModel.deleteOne({userId:uid})
                  const updateOrders=await OrderModel.create({userId:uid,products:[...isPresent.products,...userCart]})
                  
               response={message:"Orders updated successfully"}
         }else
         {
            for(let i=0;i<userCart.length;i++)
            {
               userCart[i]["date"]=getDate()
               console.log(userCart[i].date,"date")
            }
            const createOrder=await OrderModel.create({userId:uid,products:userCart})
            response={message:"Successful"}
         }
        
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
module.exports={ addToOrders, getOrders}