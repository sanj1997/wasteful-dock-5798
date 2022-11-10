// const Redis= require("ioredis")
require("dotenv").config()
const jwt=require("jsonwebtoken")
// const redis= new Redis(
//     `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_ENDPOINT}`
// )
const redis=require("../../config/redis")
const blacklistMiddleware=async(req,res,next)=>{
    const mainToken=req.headers.authorization
    const data=jwt.decode(mainToken,process.env.JWT_MAIN_SECRET)
    const isBlacklisted = redis.get(data.id,(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else console.log(result)
    })
    if(isBlacklisted)
    {
        return res.status(401).send({message:"Unauthorized access"})
    }
    else
    {
        next()
    }
}
module.exports=blacklistMiddleware