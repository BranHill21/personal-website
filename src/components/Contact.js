// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Gamepad2 } from 'lucide-react';
import '../Styles/Styles.css';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="container contact-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card contact-card"
        >
          <h2 className="section-title">Let's Connect<span className="accent">.</span></h2>
          <p className="section-subtitle">
            I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="social-links-grid">
            <a href="https://www.linkedin.com/in/brandonmhill21/" target="_blank" rel="noreferrer" className="social-box">
              <Linkedin size={32} />
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/branhill21/" target="_blank" rel="noreferrer" className="social-box">
              <Github size={32} />
              <span>GitHub</span>
            </a>

            <a href="https://chillbhill.itch.io/" target="_blank" rel="noreferrer" className="social-box">
              <Gamepad2 size={32} />
              <span>Itch.io</span>
            </a>
          </div>

          {/* <div className="email-cta">
            <a href="mailto:brandonhill21@example.com" className="primary-btn">
              <Mail size={20} style={{ marginRight: '8px' }} /> Say Hello
            </a>
          </div> */}

          <div className="resume-download">
            <a href="https://drive.google.com/file/d/1cY2h3-FelCpYQkMnNng46NHB53aM5gVZ/view?usp=sharing" target="_blank" rel="noreferrer" className="link-text">
              View My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;