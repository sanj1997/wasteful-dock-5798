const {Schema,model,models}=require('mongoose');

const CartSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        products:[
            {
                productId:{type:Schema.Types.ObjectId,ref:'product'},
                quantity:{type:Number,default:1}
            }
        ]
    },{timestamps:true}
)

const CartModel=models.cart||model('cart',CartSchema);
module.exports=CartModel;
