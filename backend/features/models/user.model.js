const {Schema,model}=require('mongoose');

const UserSchema=new Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        userName:{type:String,required:true,unique:true},
        email:{type:String,unique:true},
        // phone:{type:Number,unique:true},
        password:{type:String,required:true},
        address:[
            {
                pin:{type:String},
                house:{type:String},
                road:{type:String},
                name:{type:String},
                phone:{type:String},
                email:{type:String}
            }
        ],
        // gender:{type:String,enum:["Male","Female","Other"]},
        role:{type:String,enum:["Admin","Seller","Customer"],default:"Customer"},
        isVerified:{type:Boolean,default:false}
    },{timestamps:true}
)

const UserModel=model('customer',UserSchema);
module.exports=UserModel;
