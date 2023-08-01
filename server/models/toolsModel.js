const mongoose= require("mongoose")
const toolSchema=new mongoose.Schema({
    name:String,
    link:String,
})
module.exports=mongoose.model("tools",toolSchema)