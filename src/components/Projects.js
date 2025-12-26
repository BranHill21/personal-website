// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import '../Styles/Styles.css';
import '../Styles/Projects.css';
import NxtfolioPic from '../resources/nxtfoliodefault.png';
import ACVotePic from '../resources/AC_Logo_white.png';
import DropperPic from '../resources/dropperblocaction.png';
// import PortfolioPic from '../resources/portfoliosite.png';
import CppIcon from '../resources/cppicon.png';
import DeepMoEIcon from '../resources/deepMoE.png';
import StockfolioPic from '../resources/stockfolio_image.png';
// import PortalRunnerPic from '../resources/portalrunner.png';

const projects = [
  {
    title: 'Cache Replacement Research',
    image: CppIcon, // Placeholder - Replace with C++/Terminal screenshot
    description: 'Top-performing submission in a systems research competition. Implemented a novel Expected Hit Count (EHC) cache policy in C++ within the zsim simulator. Outperformed standard LRU/SRRIP algorithms.',
    tech: ['C++', 'C', 'Linux', 'zsim', 'Bash', 'Algorithms'],
    links: {
      github: '', // Add link if available
      demo: ''
    }
  },
  {
    title: 'AI Stock Market Prediction',
    image: StockfolioPic, // Placeholder - Replace with Graph/Chart screenshot
    description: 'Designed an end-to-end deep learning system using TensorFlow/Keras to predict short-term market trends with custom feature engineering and validation.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Scikit-learn'],
    links: {
      github: '', // Add link if available
      demo: ''
    }
  },
  {
    title: 'Deep Learning MoE Architecture',
    image: DeepMoEIcon, // Placeholder - Replace with Model Architecture diagram
    description: 'Finalist in Keras Deep Learning Competition. Architected a custom Mixture of Experts (MoE) model utilizing expert subnetworks to improve predictive accuracy on heterogeneous data.',
    tech: ['Python', 'Keras', 'NumPy', 'Deep Learning', 'Ensembling'],
    links: {
      github: '', // Add link if available
      demo: ''
    }
  },
  {
    title: 'AC Vote',
    image: ACVotePic,
    description: 'A full-stack voting application facilitating secure, anonymous, and real-time elections for organizations.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Docker'],
    links: {
      github: 'https://github.com/BranHill21/ACVote',
      demo: ''
    }
  },
  {
    title: 'NXTFolio',
    image: NxtfolioPic,
    description: 'Refactored and optimized a legacy Ruby on Rails application, improving mobile responsiveness and security compliance.',
    tech: ['Ruby on Rails', 'PostgreSQL', 'JavaScript', 'Bootstrap'],
    links: {
      github: 'https://github.com/BranHill21/NXTFolio',
      demo: ''
    }
  },
  {
    title: 'Dropper',
    image: DropperPic,
    description: 'A physics-based arcade game built in Unity, featuring custom player controllers and leaderboard systems.',
    tech: ['C#', 'Unity', 'Game Physics', 'Android'],
    links: {
      github: '',
      demo: 'https://play.google.com/store/apps/details?id=com.B_Hill.Dropper&hl=en_US&gl=US'
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