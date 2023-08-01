import React, { useState, useEffect } from "react";
import axios from "axios";

const Requests = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://youtube-bbrv.onrender.com/get/req");
        setData(response.data);
        alert("Data received");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
