const mongoose = require("mongoose")

const requestSchema= new mongoose.Schema({
    name:String,
    requests:String
})
module.exports=mongoose.model("requests",requestSchema)