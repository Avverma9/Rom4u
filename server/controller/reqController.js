const requestsModel= require("../models/requestModel")

const createReq= async(req,res)=>{
    const{requests,name}=req.body
    const created=await requestModel.create({requests,name})
    res.status(201).json(created)
}
const getReq= async function(req,res){
    const getData= await requestsModel.find()
    res.json(getData)
}

module.exports={createReq,getReq}