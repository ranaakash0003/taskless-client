import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-container">
        <p>taskless</p>

        <ul className="nav-content">
          <li>
            <a href="#1">Home</a>
          </li>
          <li>
            <a href="#2">About</a>
          </li>
          <li>
            <a href="#3">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
