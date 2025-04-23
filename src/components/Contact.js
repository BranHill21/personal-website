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
      <div className="social-links">
  <div>
    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brandonmhill21/"><i className="fa-brands fa-linkedin fa-10x webicon"> </i></a>
    <br />
    <p >Linkedin</p>
    <p>(Work related purposes)</p>
  </div>
  <div>
    <a target="_blank" rel="noreferrer" href="https://github.com/branhill21/"><i className="fa-brands fa-github webicon fa-10x"> </i></a>
    <br />
    <p>GitHub</p>
    <p>(My public coding projects)</p>
  </div>
  <div>
    <a target="_blank" rel="noreferrer" href="https://chillbhill.itch.io/"><i className="fab fa-itch-io webicon fa-10x"> </i></a>
    <br />
    <p>Itch.io</p>
    <p>(Video games I developed)</p>
  </div>
</div>
      <br/>
      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1RAMxQyxmCIZSwqL3OkcIkYmerbi7vzjZ/view?usp=sharing" className="sudoButton">View Resume</a>
    </div>
  );
};

export default Contact;