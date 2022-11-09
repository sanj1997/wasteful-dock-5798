const {Schema,model}=require('mongoose');

const WishlistSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        products:[
            {
                productId:{type:Schema.Types.ObjectId,ref:'product'}
            }
        ]
    },{timestamps:true}
)

const WishlistModel=model('cart',WishlistSchema);
module.exports=WishlistModel;