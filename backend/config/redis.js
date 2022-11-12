const Redis= require("ioredis")
require("dotenv").config()
function connectRedis(){
   const redis= new Redis(
        `redis://:T6wOQm0ht94AjmN6YlDQWqNfXfUJAQ6M@redis-14026.c301.ap-south-1-1.ec2.cloud.redislabs.com:14026`
    )
    return redis
}
module.exports=connectRedis