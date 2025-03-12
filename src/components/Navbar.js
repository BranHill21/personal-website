// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for open/close
import "./Navbar.css"; // Keep your existing CSS

const Navbar = ({ links, customStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <nav style={customStyle} className="navbar">
        {/* Hamburger Button for Mobile */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>

        {/* Navigation Links (Desktop & Mobile) */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)} // Close menu on click (mobile)
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