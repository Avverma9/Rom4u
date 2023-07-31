const tools=require("../models/toolsModel")

const newTool = async(req,res)=>{
    const {name,videoUrl}=req.body
    const instancee={name,videoUrl}
    const newcreate= await tools.create(instancee)
    res.json(newcreate)
}

const getTool = async(req,res)=>{
    const get= await tools.find()
    res.json(get)
}

module.exports={newTool,getTool}