// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const Skills = () => {
  const skillsLinks = [
    { path: '/Home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const skillsStyle = {
    /*backgroundColor: 'lightgreen',*/
  };

  return (
    <div class="centeredCont">
      <Navbar links={skillsLinks} customStyle={skillsStyle} />
      <h1>These are my skills</h1>
      <p>skills</p>
    </div>
  );
};

export default Skills;