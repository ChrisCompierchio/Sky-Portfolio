import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  
  return (
    <div className="navbar-container">
      <Link to="/" className="navlink">
        Home
      </Link>

      <Link to="/resume" className="navlink">
        Resume/CV
      </Link>
      <Link to="/projects" className="navlink">
        Projects
      </Link>
      <Link to="/contact" className="navlink">
        Contact
      </Link>
    </div>
  );
}

export default Navbar