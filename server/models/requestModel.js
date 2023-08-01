const mongoose = require("mongoose")

const requestSchema= new mongoose.Schema({
    name:String,
    req:String
})
module.exports=mongoose.model("requests",requestSchema)