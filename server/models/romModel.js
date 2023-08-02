const mongoose = require("mongoose")

const romSchema= new mongoose.Schema({
    name:String,
    link:String
})

module.exports=mongoose.model("roms",romSchema)