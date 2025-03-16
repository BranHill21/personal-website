import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

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

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTitle(fullTitle.slice(0, i + 1));
      i++;

      if (i === fullTitle.length) {
        clearInterval(interval);
      }
    }, 100);

    // Cursor blinking effect
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
        <h1 style={{ fontFamily: "monospace", fontSize: "2rem", display: "flex", justifyContent: "center" }}>
          <span>{title}</span>
          <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
        </h1>
        <p>
          Hi, welcome to my portfolio. I will be putting my projects and things
          about me on this website, which will continue to be updated.
        </p>
        <p>
          Go ahead and take a look around. If you have any thoughts or questions
          you want to share with me about anything, please go to the contact
          page.
        </p>
      </div>
    </div>
  );
};

export default Home;