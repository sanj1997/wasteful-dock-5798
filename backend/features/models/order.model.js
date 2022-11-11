const {Schema,model}=require('mongoose');

const OrderSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        products:[
            {
                product:{type:Object},
                quantity:{type:Number,default:1},
                date:{type:String}
            }
        ],
        // Total:{type:Number,required:true},
        // status:{type:String,enum:['Pending','Successful'],default:'Pending'}
    },{timestamps:true}
)

const OrderModel=model('order',OrderSchema);
module.exports=OrderModel;