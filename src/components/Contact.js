// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
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
      <h1>Contact</h1>
      <ul class="centeredUl">
        <li>Brandon Hill</li>
        <li>469-586-8116</li>
        <li>brandon.hill2@verizon.net</li>
        <li><a href="https://www.linkedin.com/in/brandonmhill21/">Linkedin (for work related purposes)</a></li>
        <li><a href="https://github.com/BranHill21">Github (code for my public projects)</a></li>
        <li><a href="https://chillbhill.itch.io/">Itch.io (link for all my playable games)</a></li>
      </ul>
    </div>
  );
};

export default Contact;