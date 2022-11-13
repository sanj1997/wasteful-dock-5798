const {Schema,model,models}=require('mongoose');

const CartSchema=new Schema({
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        product:{type:Schema.Types.ObjectId,ref:'product'},
        quantity:{type:Number,default:1}
    })

const cartModel = model('bag',CartSchema);
module.exports=cartModel;