import React, { useState, useEffect } from "react";
import axios from "axios";

const Requests = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("https://youtube-bbrv.onrender.com/get/req");
        setData(response.data);
    
    };
    fetchData();
  }, []);
// useEffect(()=>{
//     fetch("http://localhost:5000/get/req")
//     .then(response=>response.json())
//     .then(data=>setData(data))
//     .catch(error=>console.error(error))
// })
  return (
    <div className="request-container">
      {data.map((e) => (
        <div key={e._id}>
          <p>name: {e.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Requests;
