import React from "react";
import "./navbar.css";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-links">
        <div className="navbar-links-container">
          <ul>
            <li>
              <Link to="/" className="nav-route">
                Home
              </Link>
            </li>
            <li>
              <Link to="/galaxy" className="nav-route">
                Galaxy
              </Link>
            </li>
            <li>Tablets</li>
            <li>Laptops</li>
            <li>Other...</li>
          </ul>
        </div>
        <div className="buttons">
          <button className="login-btn">Log In</button>
          <button className="register">Register</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
