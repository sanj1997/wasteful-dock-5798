const {Schema,model}=require('mongoose');

const WishlistSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        product:{type:Schema.Types.ObjectId,ref:'product'}
    },{timestamps:true}
)

const WishlistModel=model('wishlist',WishlistSchema);
module.exports=WishlistModel;