const {Schema,model}=require('mongoose');

const CommentSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        productId:{type:Schema.Types.ObjectId,ref:'product'},
        comment:{type:String}
    },{timestamps:true}
)

const CommentModel=model('comment',CommentSchema);
module.exports=CommentModel;