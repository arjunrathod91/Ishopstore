const mongoose = require('mongoose')
const FeaturedSchema = new mongoose.Schema({
    id:Number,
    img1:String,
    img2:String,
    title:String,
    oldPrice:Number,
    newPrice:Number,

})

const FeatureModel = mongoose.model("featuredproduct",FeaturedSchema)
module.exports = FeatureModel;