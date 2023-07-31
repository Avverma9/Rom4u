import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Videos/Video.css';
const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted" >
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 link-secondary">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3 text-secondary"></i>ROM4U
              </h6>
              <p>
               Welcome to rom4u, here we provide you customizable stuffs, gaming roms, kernal, platform tools, thermal and etc
              </p>
            </div>
          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/tools" className="text-reset">Tools</a>
              </p>
            
              <p>
                <a href="/videos" className="text-reset">ROM</a>
              </p>
              <p>
                <a href="/help" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3 text-secondary"></i>av95766@gmail.com</p>
        
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}>
        © 2022-2023 Copyright:
        <a className="text-reset fw-bold" href="https://youtube.com/rom4u9">ROM4U</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
