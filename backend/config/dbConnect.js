const mongoose=require("mongoose")
require("dotenv").config()

const dbConnect=()=>{
    return mongoose.connect(`${process.env.MONGODB_URL}`)
}
module.exports=dbConnect