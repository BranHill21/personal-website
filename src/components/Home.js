// src/components/About.js
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
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
    <div>
      <Navbar links={Links} customStyle={Style} />
      <div class="centeredCont">
        <h1>Brandon Hill's Personal Portfolio</h1>
        <p>Hi, welcome to my portfolio. I will be putting my project and things about me on this website, which will continue to be updated.</p>
        <p>Go ahead and take a look around. If you have any thoughts or questions you want to share with me about anything, please go to the contact page.</p>
      </div>
      
    </div>
  );
};

export default Home;