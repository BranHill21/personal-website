// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "../Styles/Styles.css"; // Ensure it grabs global vars
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glass navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        {/* Logo / Brand */}
        <div className="nav-logo">
          <Link to="home" smooth={true} duration={500} className="logo-link">
            <span className="code-font logo-text">
              <span className="accent">&lt;</span>
              BH
              <span className="accent">/&gt;</span>
            </span>
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80} // header height
                duration={500}
                className="nav-link"
              >
                <span className="code-font index-num">0{links.indexOf(link) + 1}.</span> {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a href="https://drive.google.com/file/d/1UaXxQwhnTwhdNO46REXQLdk3gAdaA7p2/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-btn">
          Resume
        </a>

        {/* Mobile Toggle */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu">
            <ul>
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="mobile-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://drive.google.com/file/d/1UaXxQwhnTwhdNO46REXQLdk3gAdaA7p2/view?usp=sharing" target="_blank" rel="noreferrer" className="mobile-resume-btn">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;