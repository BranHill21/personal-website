// src/App.js
import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // We might need to ensure this component exists/is exported correctly
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './Styles/Styles.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <Element name="home" className="section-wrapper">
        <Home />
      </Element>

      {/* About is often part of Home or a separate section. Let's make it a section. */}
      {/* If About.js exports default, this works. Checking imports... */
       /* Wait, in the initial file read, About was imported. */}

      <Element name="about" className="section-wrapper">
        <About />
      </Element>

      <Element name="skills" className="section-wrapper">
        <Skills />
      </Element>

      <Element name="projects" className="section-wrapper">
        <Projects />
      </Element>

      <Element name="contact" className="section-wrapper">
        <Contact />
      </Element>

      {/* Footer could go here */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Brandon Hill. Built with React & Coffee.</p>
      </footer>
    </div>
  );
};

export default App;
