const {Schema,model}=require('mongoose');

const UserSchema=new Schema(
    {
        firstName:{type:String,required:true},
        lastName:{type:String,required:true},
        userName:{type:String,required:true,unique:true},
        userAvatar:{type:URL},
        email:{type:String,unique:true},
        phone:{type:Number,unique:true},
        password:{type:String,required:true},
        address:{type:Object},
        gender:{type:String,enum:["Male","Female","Other"]},
        role:{type:String,enum:["Admin","Seller","Customer"],default:"Customer"}
    },{timestamps:true}
)

const UserModel=model('user',UserSchema);
module.exports=UserModel;
