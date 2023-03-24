const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    id: {type:mongoose.Schema.Types.ObjectId},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: String,
    status: String,
    totalPrice: { type: Number},
    amount :  { type: Number},
},
{
    timestamps: true,
}
)

module.exports = mongoose.model("Payment", orderSchema)