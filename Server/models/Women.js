const mongoose = require('mongoose')
const WomenSchema = new mongoose.Schema({
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

const WomenModel = mongoose.model("women",WomenSchema)
module.exports = WomenModel;