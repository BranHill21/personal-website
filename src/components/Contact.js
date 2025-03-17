// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  const Links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const Style = {
    /*backgroundColor: 'lightgreen',*/
  };

  return (
    <div className="centeredCont">
      <Navbar links={Links} customStyle={Style} />
      <h1>Contact</h1>
      <ul className="centeredUl">
        <li>Brandon Hill</li>
        <li>469-586-8116</li>
        <li>brandon.hill2@verizon.net</li>
        <li><a href="https://www.linkedin.com/in/brandonmhill21/">Linkedin</a><div>(for work related purposes)</div></li>
        <li><a href="https://github.com/BranHill21">Github</a><div>(code for my public projects)</div></li>
        <li><a href="https://chillbhill.itch.io/">Itch.io</a><div>(link for all my playable games)</div></li>
      </ul>
    </div>
  );
};

export default Contact;