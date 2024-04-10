const mongoose = require('mongoose')
const MenSchema = new mongoose.Schema({
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

const MenModel = mongoose.model("men",MenSchema)
module.exports = MenModel;