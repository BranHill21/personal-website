// src/components/Projects.js
import React from 'react';
import Navbar from './Navbar';
import '../Styles/Projects.css'; // You'll style the cards here

const projects = [
  {
    title: 'Gamified Habit Tracker',
    image: '/images/habit-tracker.png', // make sure this file exists
    description: 'A Spring Boot app with Firebase that helps users build habits through rewards and collectibles.',
    tech: ['Java', 'Spring Boot', 'Firebase', 'Heroku'],
    links: {
      demo: 'https://your-demo-link.com',
      github: 'https://github.com/yourusername/habit-tracker'
    }
  },
  {
    title: '2D Platformer Game',
    image: '/images/platformer.gif',
    description: 'A Unity game made in C# featuring unique level design, player mechanics, and animations.',
    tech: ['C#', 'Unity', 'Itch.io'],
    links: {
      demo: 'https://chillbhill.itch.io/platformer-game',
      github: 'https://github.com/yourusername/platformer-game'
    }
  },
  {
    title: 'Portfolio Website',
    image: '/images/portfolio.png',
    description: 'This site! A React-based personal portfolio hosted on Netlify with responsive design.',
    tech: ['React', 'CSS', 'Netlify', 'GitHub'],
    links: {
      demo: 'https://yourportfolio.netlify.app',
      github: 'https://github.com/yourusername/portfolio-site'
    }
  }
];

const Projects = () => {
  const Links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const getLinkText = (url) => {
    if (url.includes('github.com')) return 'View Code';
    if (url.includes('itch.io')) return 'Play on Itch.io';
    if (url.includes('netlify.app') || url.includes('vercel.app') || url.includes('herokuapp.com')) return 'View Live Demo';
    return 'Visit';
  };

  return (
    <div className="centeredCont">
      <Navbar links={Links} />
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tech, i) => (
                <span key={i} className="tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer">
                  {getLinkText(project.links.github)}
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer">
                  {getLinkText(project.links.demo)}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;