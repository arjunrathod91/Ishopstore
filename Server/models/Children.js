const mongoose = require('mongoose')
const ChildrenSchema = new mongoose.Schema({
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

const ChildrenModel = mongoose.model("children",ChildrenSchema)
module.exports = ChildrenModel;