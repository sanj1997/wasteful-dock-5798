const { Schema, model } = require("mongoose");


// const OrderSchema = new Schema(
//   {
//     userId: { type: Schema.Types.ObjectId, ref: "user" },
//     products: [
//       {
//         productId: { type: Schema.Types.ObjectId, ref: "product" },
//         quantity: { type: Number, default: 1 },
//       },
//     ],
//     amount: { type: Number, required: true },
//     address: { type: Schema.Types.ObjectId, ref: "user" },
//     status: {
//       type: String,
//       enum: ["Pending", "Successful"],
//       default: "Pending",
//     },
//   },
//   { timestamps: true }
// );

const OrderSchema=new Schema(
    {
        userId:{type:Schema.Types.ObjectId,ref:'user'},
        products:[
            {
                product:{type:Object},
                quantity:{type:Number},
                date:{type:String}
            }
        ]
        // Total:{type:Number,required:true},
        // status:{type:String,enum:['Pending','Successful'],default:'Pending'}
    },{timestamps:true}
)

const OrderModel = model("order", OrderSchema);
module.exports = OrderModel;
