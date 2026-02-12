import React from "react";
import "./Footer.css";
import logo from "../assets/eLogo.png";

const Footer = () => {
  return (
    <div className="horizontal-divider">
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <img 
            src={logo} 
            alt="Enhancer Logo" 
            className="footer-logo-image"
          />

          <h2 className="footer-logo-text">Enhancer</h2>

          <p className="footer-description">
            Enhancer is an AI-powered story refinement platform that transforms
            simple ideas into immersive, emotionally rich narratives.
            Choose your genre and let advanced language intelligence elevate
            your writing into captivating masterpieces within seconds.
          </p>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Enhancer. All rights reserved.</p>
        </div>

      </div>
    </footer>
    </div>
  );
};

export default Footer;
