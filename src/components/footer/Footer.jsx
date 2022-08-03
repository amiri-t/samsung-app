import React from "react";
import "./footer.css";
import Logo from "../assets/logo2.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="email-div">
        <h3>Subscribe to our news</h3>
        <div className="email-left">
          <input type="email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-left">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-right">
            <BsInstagram className="icon" />
            <BsFacebook className="icon" />
            <BsTwitter className="icon" />
            <BsLinkedin className="icon" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="col1">
            <h2>RESOURCES</h2>
            <p>Application</p>
            <p>Documentation</p>
            <p>Systems</p>
            <p>FAQ</p>
          </div>
          <div className="col2">
            <h2>PRICING</h2>
            <p>Overview</p>
            <p>Phones</p>
            <p>Laptops</p>
            <p>Others</p>
          </div>
          <div className="col3">
            <h2>COMPANY</h2>
            <p>About Us</p>
            <p>Blog</p>
            <p>Partnership</p>
            <p>Careers</p>
          </div>
          <div className="col4">
            <h2>SOCIAL</h2>
            <p>Instagram</p>
            <p>FaceBook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
