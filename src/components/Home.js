// src/components/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import '../Styles/Styles.css'; // Global styles
import '../Styles/Home.css'; // Specific Hero styles

const titles = [
  "Full Stack Software Engineer",
  "Java & Python Expert",
  "Unity Game Developer",
  "Creative Problem Solver"
];

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[textIndex];

      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="section hero-section">
      <div className="container hero-container">
        {/* Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting code-font">Hello, my name is</p>
          <h1 className="hero-name">Brandon Hill<span className="accent">.</span></h1>
          <h2 className="hero-subtitle">
            I am a <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            I build accessible, pixel-perfect, and performant web applications.
            Currently focused on building scalable backend systems in
            <span className="highlight"> Java</span> and <span className="highlight">Python</span>.
          </p>

          <div className="hero-cta">
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="primary-btn">
                Check out my work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Visual / 3D Element */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="glowing-cube-container">
            <motion.div
              className="tech-icon-wrapper"
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Code size={120} color="#38bdf8" strokeWidth={1} />
            </motion.div>
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;