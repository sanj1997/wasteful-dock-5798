const mongoose=require("mongoose")
require("dotenv").config()

const dbConnect=()=>{
    return mongoose.connect(`${process.env.MONGODB_URL}`)
    // return mongoose.connect(`mongodb://127.0.0.1:27017/beautiva-ecommerce`)
}
module.exports=dbConnect;