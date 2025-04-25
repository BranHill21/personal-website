// src/components/Projects.js
import React from 'react';
import Navbar from './Navbar';
import '../Styles/Projects.css'; // You'll style the cards here
import NxtfolioPic from '../resources/nxtfoliodefault.png'
import ACVotePic from '../resources/AC_Logo_white.png'
import DropperPic from '../resources/dropperblocaction.png'
import PortfolioPic from '../resources/portfoliosite.png'
import PortalRunnerPic from '../resources/portalrunner.png'

const projects = [
  {
    title: 'Portfolio Website',
    image: PortfolioPic, // make sure to import or define this image like the others
    description: 'This website you are currently on! A responsive portfolio site built with React and custom CSS to showcase my projects, skills, and contact information. Automatically deployed through Netlify.',
    tech: ['React', 'JavaScript', 'CSS', 'Netlify', 'GitHub'],
    links: {
      github: 'https://github.com/BranHill21/personal-website',
      demo: 'https://brandonhill.netlify.app/' // replace with your real link
    }
  },
  {
    title: 'Legacy Web App Enhancement',
    image: NxtfolioPic, // Add a relevant screenshot or use placeholder
    description: 'Refactored and optimized a legacy web application for mobile responsiveness, security, and performance.',
    tech: ['Ruby', 'Rails', 'CSS', 'HTML', 'JavaScript', 'SQL', 'GitHub'],
    links: {
      github: '',
      demo: ''
    }
  },
  {
    title: 'Online Instant Runoff Voting Tool',
    image: ACVotePic,
    description: 'A web-based voting system with 100% test coverage, built with Spring Boot and tested using JUnit and Selenium.',
    tech: ['Java', 'Spring Boot', 'SQL', 'HTML', 'JavaScript', 'JUnit', 'Selenium', 'GitHub'],
    links: {
      github: '',
      demo: ''
    }
  },
  {
    title: 'Dropper (Playable Unity Game)',
    image: DropperPic,
    description: 'An interactive 2D game built in Unity with save/load features, Firestore database with authentication and leaderboard, sound design, and custom UI.',
    tech: ['C#', 'Unity', 'JSON', 'Firebase Firestore'],
    links: {
      github: '',
      demo: 'https://chillbhill.itch.io/dropper'
    }
  },
  {
    title: 'Portal Runner (Playable Unity Game)',
    image: PortalRunnerPic,
    description: 'An interactive 2D infinite runner game built in Unity with save/load features, custom UI, and many visual effects.',
    tech: ['C#', 'Unity', 'JSON'],
    links: {
      github: '',
      demo: 'https://chillbhill.itch.io/portal-runner'
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