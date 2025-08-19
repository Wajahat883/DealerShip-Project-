import React from "react";
import { Link } from "react-router-dom";
import carImage from "../assets/car11.jpeg.png"; // tumhari car image ka path

import "../Components/nav.css"; // CSS import

function Nav() {
  return (
    <nav className="navbar">
     
      <div className="brand">Dealerships</div>

      
      <div className="road-container">
        <div className="road">
          <div className="dashed-line"></div>
        </div>
        <img src={carImage} alt="car" className="car" />
      </div>

      
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
