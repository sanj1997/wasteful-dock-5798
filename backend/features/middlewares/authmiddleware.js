// const Redis= require("ioredis")
require("dotenv").config()
const jwt=require("jsonwebtoken")
// const redis= new Redis(
//     `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_ENDPOINT}`
// )

const authMiddleware=(req,res,next)=>{
   const mainToken=req.headers.authorization
   if(mainToken)
   {
      try{
        let userData=jwt.verify(mainToken,process.env.JWT_MAIN_SECRET)
        req.body.userID=userData.id
        next()
      }catch(e)
      {
         // if(e.message==="jwt expired")
         // {
         //    redis.set(userData.id,mainToken)
         // } 
         return res.status(401).send({message:e.message})
      }
   }
   else
   {
      return res.status(401).send({message:"Unauthorized access"})
   }
}

module.exports=authMiddleware