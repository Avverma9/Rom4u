const request= require("../models/requestModel")

const createReq= async(req,res)=>{
    const{req,name}=req.body
    const created=await request.create({req,name})
    res.status(201).json(created)
}
const getReq= async function(req,res){
    const getData= await request.find()
    res.json(getData)
}

module.exports={createReq,getReq}