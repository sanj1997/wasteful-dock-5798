const {Schema,model}=require('mongoose');

const CartSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        products:[
            {
                productId:{type:Schema.Types.ObjectId,ref:'product',required:false},
                quantity:{type:Number,default:1,required:false}
            }
        ]
    },{timestamps:true}
)

const CartModel=model('cart',CartSchema);
module.exports=CartModel;
