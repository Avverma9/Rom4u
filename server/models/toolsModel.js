const mongoose= require("mongoose")
const toolSchema=new mongoose.Schema({
    name:String,
    videoUrl:String,
})
module.exports=mongoose.model("tools",toolSchema)