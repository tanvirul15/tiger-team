import React from "react";

const Navbar = () => {
  return (
    <div className="navbar navbar-light bg-light navbar-expand-md opacity-1">
      <div className="container">
        <a href="#home" className="navbar-brand m-0 p-0">
          <img className="img-fluid w-25" src="logo.png" alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav ms-auto">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
