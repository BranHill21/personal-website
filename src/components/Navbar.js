// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = ({ links, customStyle }) => {
  return (
    <div className="container">
    <nav style={customStyle}>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="nav-item">
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              style={{ textDecoration: "none" }} 
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
