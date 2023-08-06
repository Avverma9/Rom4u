import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiMobile1 } from "react-icons/ci";
import { BsHouse, BsPlay } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { BiLinkAlt, BiSearch } from "react-icons/bi";
import { FaRegBell,FaUsers } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaPrayingHands } from "react-icons/fa";
import "../Videos/Video.css";

function NavScrollExample() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
 
    const ws = new WebSocket("wss://websocket-8jxu.onrender.com");

 
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setActiveUsers(data.activeUsers);
    };

    return () => {
      ws.close();
    };
  }, []);
  return (
     <Navbar
      expand="lg"
      className="bg-body-tertiary header fixed-top" // Add the 'fixed-top' class to make the header fixed
    >
      <Container fluid>
         <Navbar.Brand href="/">
          <img
            src={"https://avvermabucket.s3.ap-south-1.amazonaws.com/1691152186859-logo512-removebg-preview.png"}
             alt="Logo"
            height="30"
            className="d-inline-block align-top"
          />
          ROM4U
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/videos" className="home-nav">
              <BsHouse className="home-logo" />
              Home
            </Nav.Link>
            <Nav.Link href="/videos" className="videos-nav">
              <BsPlay className="video-logo" />
              Recent videos
            </Nav.Link>
            <NavDropdown title="Devices" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/mi11x" className="drop-menu">
                <CiMobile1 />
                Mi 11X
              </NavDropdown.Item>
              <NavDropdown.Item href="mi11TPro" className="drop-menu">
                <CiMobile1 /> Mi 11TPro
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tools" className="drop-menu">
                <FiTool /> Tools
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/roms">
              <BiLinkAlt className="link-logo" /> Rom Link
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <FaRegBell className="link-logo" /> Notifications
            </Nav.Link>
            <Nav.Link href="#" disabled>
              <FaHandHoldingHeart className="link-logo" /> Support us
            </Nav.Link>
            <Nav.Link href="/requests" >
              <FaPrayingHands className="link-logo" /> Request
            </Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link >
              <FaUsers className="active-users-icon" /> {activeUsers}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
