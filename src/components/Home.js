import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // if using React Router
import '../Styles/Home.css'

const Home = () => {
  const Links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const [title, setTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullTitle = "Brandon Hill's Personal Portfolio";
  const navigate = useNavigate();

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div>
      <Navbar links={Links} />
      <div className="centeredCont">
        {/* Terminal Typing Title */}
        <h1 style={{ fontSize: "2rem", textAlign: "center", whiteSpace: "pre-wrap" }}>
          <span>{title}</span>
          <span className="blink-cursor" style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
        </h1>

        {/* Tagline */}
        <h2 style={{ marginTop: "1rem", fontWeight: "400", color: "#555" }}>
          Software Engineer • Full Stack Developer
        </h2>
        <h2 style={{ marginTop: "1rem", fontWeight: "400", color: "#555" }}>
          Java | C# | Python | Spring Boot | React
        </h2>

        {/* CTA Buttons */}
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button onClick={() => navigate("/projects")} className="cta-button">View Projects</button>
          <button onClick={() => navigate("/contact")} className="cta-button">Contact Me</button>
        </div>

        {/* Section Previews */}
        <div className="section-previews" style={{ marginTop: "4rem" }}>
          <div className="preview-card">
            <h3>About Me</h3>
            <p>I'm a software engineer passionate about full-stack development and clean, testable code. I'm always building something new — come see what I've been up to.</p>
            <button onClick={() => navigate("/about")}>Read More</button>
          </div>
          <div className="preview-card">
            <h3>Skills</h3>
            <p>From Java and Spring Boot to React and Unity, I've worked across the stack. See the tools I use and love working with.</p>
            <button onClick={() => navigate("/skills")}>Explore Skills</button>
          </div>
          <div className="preview-card">
            <h3>Projects</h3>
            <p>See real-world applications I've built — from voting systems to games and full-stack web apps. Code and demos included.</p>
            <button onClick={() => navigate("/projects")}>View Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;