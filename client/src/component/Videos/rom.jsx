import React,{useEffect, useState} from "react";
import {AiOutlineCloudDownload} from 'react-icons/ai';
import axios from 'axios'
import './rom.css'
const Rom=()=>{
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
useEffect(()=>{
   
    axios.get("https://youtube-bbrv.onrender.com/get/rom")
    .then(response=>response.data)
    .then(data=>{setData(data)
    setIsLoading(false)})
    .catch(error=>console.error(error))
    

 
},[])
if (isLoading) {
    return <div className='loading-screen'><img src="https://media3.giphy.com/media/fUSQGDRvuBlQXcX0TA/giphy.gif" alt="Loading" />;
    <p>Tumhare ROM ka link raste me hai friend</p></div>
  }
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