const YoutubeModel = require("../models/YoutubeModel")

const createVideo = async(req,res)=>{
    const{title,device,date,description,videoUrl}=req.body
    const images= req.files.map((file)=> file.location)
    const videoData={title,images,device,date,description,videoUrl}
    const savedVideo= await YoutubeModel.create(videoData)
    res.json(savedVideo)
}

const getVideo = async(req,res)=>{
    const videoData= await YoutubeModel.find()
    res.json(videoData)
}
module.exports={createVideo,getVideo}