// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import '../Styles/Styles.css';
import '../Styles/Projects.css';
import NxtfolioPic from '../resources/nxtfoliodefault.png';
import ACVotePic from '../resources/AC_Logo_white.png';
import DropperPic from '../resources/dropperblocaction.png';
import PortfolioPic from '../resources/portfoliosite.png';
import PortalRunnerPic from '../resources/portalrunner.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: PortfolioPic,
    description: 'A responsive, high-performance portfolio SPA built with React and custom Framer Motion animations to showcase technical skills.',
    tech: ['React', 'Framer Motion', 'CSS3', 'Netlify'],
    links: {
      github: 'https://github.com/BranHill21/personal-website',
      demo: 'https://brandonhill.netlify.app/'
    }
  },
  {
    title: 'Legacy Web App Enhancement',
    image: NxtfolioPic,
    description: 'Refactored and optimized a legacy Ruby on Rails application, improving mobile responsiveness and security compliance.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
    links: {
      github: 'https://github.com/BranHill21/NXTFolio',
      demo: ''
    }
  },
  {
    title: 'Instant Runoff Voting System',
    image: ACVotePic,
    description: 'Web-based voting platform implementing the Instant Runoff algorithm. Features 100% test coverage with JUnit and Selenium integration.',
    tech: ['Java', 'Spring Boot', 'Selenium', 'JUnit', 'MySQL'],
    links: {
      github: '',
      demo: ''
    }
  },
  {
    title: 'Dropper',
    image: DropperPic,
    description: 'An interactive 2D conceptual game with cloud-based leaderboards, saving systems, and custom physics interactions.',
    tech: ['C#', 'Unity', 'Firebase', 'Data Structures'],
    links: {
      github: '',
      demo: 'https://chillbhill.itch.io/dropper'
    }
  },
  {
    title: 'Portal Runner',
    image: PortalRunnerPic,
    description: 'Infinite runner optimized for mobile performance, featuring custom shader graphs and object pooling design patterns.',
    tech: ['C#', 'Unity', 'HLSL', 'Design Patterns'],
    links: {
      github: '',
      demo: 'https://chillbhill.itch.io/portal-runner'
    }
  }
];

const Projects = () => {
  return (
    <div className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects<span className="accent">.</span></h2>
          <p className="section-subtitle">A selection of code, games, and systems.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card-wrapper"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card">
                {/* Image Background */}
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                  <div className="overlay"></div>
                </div>

                {/* Content */}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>

                  {/* Revealed on Hover */}
                  <div className="tech-stack-list">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-item">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="card-links">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="icon-link">
                        <Github size={20} />
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer" className="icon-link">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* X-Ray / Blueprint Overlay (Background Only) */}
                <div className="xray-overlay">
                  <div className="blueprint-grid"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;