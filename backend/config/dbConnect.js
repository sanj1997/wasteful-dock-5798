const mongoose=require("mongoose")
require("dotenv").config()

const dbConnect=()=>{
    // return mongoose.connect(`${process.env.MONGODB_URL}`)
    return mongoose.connect(`mongodb+srv://Beautiva:beautiva@beautiva.1iwxmog.mongodb.net/beautiva`)
}
module.exports=dbConnect;