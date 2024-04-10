const mongoose = require('mongoose')
const CartSchema = new mongoose.Schema({
    id:Number,
    img1:String,
    img2:String,
    title:String,
    oldPrice:Number,
    newPrice:Number,
    desc:String,
    tags:String,
    category:String,
    quality:String,

})

const CartModel = mongoose.model("cart",CartSchema)
module.exports = CartModel;