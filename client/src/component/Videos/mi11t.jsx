/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Video.css';
import {BsPlayCircle} from 'react-icons/bs';

const VideoMI11T = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchVideoData = async () => {
  //     try {
  //       const response = await axios.get('https://youtube-bbrv.onrender.com/getVideo');
  //       setData(response.data); // when mapping always target the data
  //     } catch (error) {
  //       console.error('Error fetching video data:', error);
  //     }
  //   };

  //   fetchVideoData();
  // }, []);
useEffect(()=>{
  fetch("https://youtube-bbrv.onrender.com/getmi11t/get")
  .then(response=>response.json())
  .then(data=>setData(data))
  .catch(error=>console.error(error))
},[])
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
            <BsPlayCircle/>
              Watch Video
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className='watch-more'> <a href="https://www.youtube.com/rom4u9"> <BsPlayCircle/> Watch more</a></div></>
  );
};

export default VideoMI11T;
