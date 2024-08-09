// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const Projects = () => {
  const Links = [
    { path: '/Home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const Style = {
    /*backgroundColor: 'lightgreen',*/
  };

  return (
    <div class="centeredCont">
      <Navbar links={Links} customStyle={Style} />
      <h1>Projects</h1>
      <p>projects coming soon</p>
    </div>
  );
};

export default Projects;