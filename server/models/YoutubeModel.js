const mongoose=require('mongoose')
const youtubeSchema= new mongoose.Schema({
    title:String,
    images:[String],
    device:String,
    description:String,
    date:String,
    videoUrl:String
})
module.exports=mongoose.model("youtube",youtubeSchema)