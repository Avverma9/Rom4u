import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tools.css';
import './Loading.css'
import {AiOutlineCloudDownload} from 'react-icons/ai';

const Tool = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
   
        const response = await axios.get('https://youtube-bbrv.onrender.com/tool');
        setData(response.data);
        setIsLoading(false)
     
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div className='loading-screen'><img src="https://media3.giphy.com/media/fUSQGDRvuBlQXcX0TA/giphy.gif" alt="Loading" />;
    <p>Server Connect hone wala hai friend . . . . . .</p></div>
  }
  return (
    <>
    <div className='all-item'>
      {data.map((tool) => (
        
        <div className='name' key={tool._id}>
          <p>{tool.name}</p>
          <a href={tool.link} target="_blank" rel="noopener noreferrer">
          <div className='download'>
             <AiOutlineCloudDownload className='download'/> Download</div>
            </a>
        </div>
        
        
      ))}
      <hr className='hr-belowvideos'
      />
      </div>
    </>
  );
};

export default Tool;
