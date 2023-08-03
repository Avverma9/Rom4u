import React,{useEffect, useState} from "react";
import {AiOutlineCloudDownload} from 'react-icons/ai';
import axios from 'axios'
import './rom.css'
const Rom=()=>{
    const [data,setData]=useState([])
useEffect(()=>{
   
    axios.get("https://youtube-bbrv.onrender.com/get/rom")
    .then(response=>response.data)
    .then(data=>setData(data))
    .catch(error=>console.error(error))
    


},[])
  return(
    <div className="all-item">
        {data.map((index)=>(
            <div className="name" key={index._id}>
                <p>{index.name}</p> 
                <a href={index.link} target="_blank" rel="noopener noreferrer">
          <div className='download'>
             <AiOutlineCloudDownload className='download'/> Download</div>
            </a>
                </div>
        ))}
    </div>
  )
}
export default Rom