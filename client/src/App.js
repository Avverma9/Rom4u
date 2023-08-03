import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import NavScrollExample from "./component/Header/Header";
import LandingPage from "./component/LandingPage/Landingpage";
import VideoPage from "./component/Videos/Video";
import VideoMI11T from "./component/Videos/mi11t";
import VideoMI11x from "./component/Videos/mi11x";
import Tool from "./component/Videos/tools";
import Sidebar from "./component/Admin/Sidebar";
import Requests from "./component/Videos/Requests";
import Rom from "./component/Videos/rom";

function App() {
  return (
    <Router>
      <NavScrollExample />
      <Sidebar/>
      {/* <Mi11Tpro/> */}
      {/* <Mi11X/> */}
      {/* <Tools/> */}
     
      <Routes>
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/mi11Tpro" element={<VideoMI11T />} />
        <Route path="/mi11x" element={<VideoMI11x />} />
        <Route path="/tools" element={<Tool />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/roms" element={<Rom/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
