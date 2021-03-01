import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navigation-bar">
      <div className="container">
        <a href="#home" className="navbar-brand m-0 p-0">
          <img className="logo-img" src="logo.png" alt="logo" />
        </a>
        <ul className="nav-list">
        <li>
            <a href="#mathc">Upcomming Match</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
