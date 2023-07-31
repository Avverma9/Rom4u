/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Video.css';
import {BsPlayCircle} from 'react-icons/bs';
import { CiMobile1 } from 'react-icons/ci';
import {BsCalendar2Date} from 'react-icons/bs';


const VideoPage = () => {
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
  fetch("https://youtube-bbrv.onrender.com/getVideo")
  .then(response=>response.json())
  .then(data=>setData(data))
  .catch(error=>console.error(error))
},[])
  return (
    <div className="video-card"> {/* Added the video-card class here */}
      {data.map((video) => (
        <div className='video-cards' key={video._id}>
          {video.images.map((image) => (
            <div className="video-image">
              <img key={image} src={image} alt="" />
            </div>
          ))}
          <div className="video-title">
            <p>{video.title}</p>
          </div>
          <div className='video-device'><p><CiMobile1/>Device: {video.device}</p></div>
          <div className="video-date">
            <p><BsCalendar2Date/>{video.date}</p>
          </div>
          <div className="video-description">
            <p>{video.description}</p>
          </div>

          <div className="explore-button">
            <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
            <div className='watchvideo-videos'>
            <BsPlayCircle className='playcircle'/>
              Watch Video
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPage;
