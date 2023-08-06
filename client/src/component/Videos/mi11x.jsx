/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Video.css';
import {BsPlayCircle} from "react-icons/bs";

const VideoMI11x = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
  fetch("https://youtube-bbrv.onrender.com/getmi11x/get")
  .then(response=>response.json())
  .then(data=>{
    setData(data)
    setIsLoading(false)
})
  .catch(error=>console.error(error))
  
},[])
if (isLoading) {
  return <div className='loading-screen'><img src="https://media3.giphy.com/media/fUSQGDRvuBlQXcX0TA/giphy.gif" alt="Loading" />;
  <p>Sasta server, need to wait while we are connecting .....</p></div>
}
  return (
    <>
    <div className="video-card"> {/* Added the video-card class here */}
      {data.map((video) => (
        <div key={video._id}>
          {video.images.map((image) => (
            <div className="video-image">
              <img key={image} src={image} alt="" />
            </div>
          ))}
          <div className="video-title">
            <p>{video.title}</p>
          </div>
          <div className='video-device'><p>Device: {video.device}</p></div>
          <div className="video-date">
            <p>{video.date}</p>
          </div>
          <div className="video-description">
            <p>{video.description}</p>
          </div>

          <div className="explore-button">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <BsPlayCircle/> Watch Video
            </a>
          </div>
         
        </div>
        
      ))}
      
    </div>

<div className='watch-more'> <a href="https://www.youtube.com/rom4u9"> <BsPlayCircle/> Watch more</a></div></>
  );
};

export default VideoMI11x;
