import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../Styles/About.css";

const albums = [
  { name: "Chilombo - Jhené Aiko", image: "../resources/Chilombo.jpg" },
  { name: "Apollo XXI - Steve Lacy", image: "../resources/ApolloXXI.jpg" },
  { name: "Flower Boy - Tyler, The Creator", image: "../resources/FlowerBoy.jpg" },
  { name: "FORWARD - Jordan Ward", image: "../resources/FORWARD.jpg" },
  { name: "Freudian - Daniel Caesar", image: "../resources/Freudian.jpg" },
  { name: "Luv 4 Rent - Smino", image: "../resources/Luv4Rent.jpg" },
  { name: "Ctrl - SZA", image: "../resources/Ctrl.jpg" },
];

const About = () => {
  const aboutLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Set album based on date
  useEffect(() => {
    const todayIndex = new Date().getDate() % albums.length;
    setIndex(todayIndex);
  }, []);

  const nextAlbum = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % albums.length);
      setFade(true);
    }, 300);
  };

  const prevAlbum = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + albums.length) % albums.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="about-container">
      <Navbar links={aboutLinks} />
      <h1>About Me</h1>

      {/* Personality Section */}
      <section className="about-section">
        <h2>Who Am I?</h2>
        <p>
          Hi, I'm Brandon M. Hill! I'm a problem-solving, test-driven developer
          with a passion for coding, video game development, and leadership.
        </p>
        <p>
          I love learning new technologies and building interactive web
          experiences that engage users.
        </p>
      </section>

      {/* Hobbies Section */}
      <section className="about-section">
        <h2>Hobbies & Interests</h2>
        <ul>
          <li>Playing & developing video games</li>
          <li>Exploring different music genres</li>
          <li>Reading about technology and AI</li>
          <li>Watching & playing basketball</li>
          <li>Experimenting with creative coding projects</li>
        </ul>
      </section>

      {/* Music Section */}
      <section className="about-section music-section">
        <h2>Music I Enjoy 🎶</h2>
        <div className="vinyl-container">
          <div className={`vinyl ${fade ? "fade-in" : "fade-out"}`}>
            <img
              src={albums[index].image}
              alt={albums[index].name}
              className="vinyl-image"
            />
          </div>
        </div>
        <div>
        <button className="arrow left-arrow" onClick={prevAlbum}>Prev</button>
        <button className="arrow right-arrow" onClick={nextAlbum}>Next</button>
        </div>
        <p className="album-name">Currently Spinning: <strong>{albums[index].name}</strong></p>
      </section>
    </div>
  );
};

export default About;