// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const About = () => {
  const aboutLinks = [
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const aboutStyle = {
    /*backgroundColor: 'lightgreen',*/
  };

  return (
    <div className="centeredCont">
      <Navbar links={aboutLinks} customStyle={aboutStyle} />
      <h1>About Me</h1>
      <p>Hi, I'm Brandon M. Hill, A problem-solving, test-driven individual with vast knowledge of computer science, knowledge of video game development, and leadership ability, including experience with writing and testing code in a professional environment.</p>
    </div>
  );
};

export default About;