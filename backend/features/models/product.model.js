const {Schema,model}=require('mongoose');

const ProductSchema=new Schema(
    {
        card_title:{type:String,required:true},
        title:{type:String,required:true},
        rating:{type:Number,required:true},
        reviews:{type:Number,required:true},
        price:{type:Number,required:true},
        off_price:{type:Number,required:true},
        offer:{type:Number,required:true},
        image1:{type:String,required:true},
        image2:{type:String,required:true},
        image3:{type:String,required:true},
        brand:{type:String,required:true},
        category:{type:String,required:true},
        sub_category:{type:String,required:true},
        description:{type:String,required:true},
        how_to_use:{type:String,required:true},
        quan:{type:Number,required:true},
    },{timestamps:true}
)

const ProductModel=model('product',ProductSchema);
module.exports=ProductModel;
