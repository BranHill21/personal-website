// src/components/About.js
import React from 'react';
import Navbar from './Navbar';
import "../Styles/Contact.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
      <h1>Contact Me</h1>
      <p>Once again, my name is <b>Brandon Hill</b>. Please feel free to view and contact me through any of the following links. </p> 
      <p>While you are here, also take a look at my resume as I am always interested in business opportunities.</p>
      
      <ul className="centeredUl">
        
        <li><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/brandonmhill21/">Linkedin</a><div>(for work related purposes)</div></li>
        <li><i class="fa-brands fa-github"></i><a href="https://github.com/BranHill21">Github</a><div>(code for my public projects)</div></li>
        <li><i class="fab fa-itch-io"></i><a href="https://chillbhill.itch.io/">Itch.io</a><div>(link for all my playable games)</div></li>
      </ul>
      <br/>
      <a href="https://drive.google.com/file/d/1RAMxQyxmCIZSwqL3OkcIkYmerbi7vzjZ/view?usp=sharing" className="sudoButton">View Resume</a>
    </div>
  );
};

export default Contact;