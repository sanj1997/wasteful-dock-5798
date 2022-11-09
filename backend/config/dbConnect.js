const mongoose=require("mongoose")
require("dotenv").config()
console.log(process.env.MONGODB_URL)
const dbConnect=()=>{
    return mongoose.connect(`${process.env.MONGODB_URL}`)
}
module.exports=dbConnect