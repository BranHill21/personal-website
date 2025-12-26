// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Styles.css';
import '../Styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C++', 'C', 'C#', 'JavaScript', 'SQL', 'Bash'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Spring Boot', 'React', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Unity'],
    },
    {
      title: 'Tools & DevOps',
      skills: ['Linux', 'Docker', 'Git/GitHub', 'AWS', 'PostgreSQL', 'Jupyter', 'Firebase'],
    },
    {
      title: 'Concepts',
      skills: ['Machine Learning', 'Deep Learning', 'System Design', 'Algorithms', 'OOP', 'REST APIs'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Arsenal<span className="accent">.</span></h2>
          <p className="section-subtitle">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div className="glass-card skill-card" key={index} variants={itemVariants}>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill code-font">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;