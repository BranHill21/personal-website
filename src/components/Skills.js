// src/components/About.js
import React from 'react';
import Navbar from './Navbar';
import "../Styles/Skills.css";

const Skills = () => {
  const skillsLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const skillsStyle = {
    /*backgroundColor: 'lightgreen',*/
  };

  const skillCategories = [
    {
      title: 'Languages & Scripting',
      skills: ['Java', 'C#', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL', 'XML', 'LaTeX'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Spring', 'jQuery', 'Ajax', 'FreeMarker', 'XPath', 'UML'],
    },
    {
      title: 'Testing & QA',
      skills: [
        'JUnit',
        'Mockito',
        'Selenium',
        'Test-Driven Development (TDD)',
        'Behavior-Driven Development (BDD)',
        'Integration Testing',
        'Unit Testing',
        'End-to-End Testing (E2E)',
        'Manual Testing',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Unity',
        'Eclipse',
        'Visual Studio Code',
        'XCode',
        'Git',
        'GitHub',
        'Jira',
        'Tower',
        'Docker',
        'Firebase',
        'Heroku',
        'Netlify',
      ],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQLite3'],
    },
  ];
  

  return (
    <div className="centeredCont">
      <Navbar links={skillsLinks} customStyle={skillsStyle} />
      <h1 style={{ marginTop: '2rem' }}>My Skills</h1>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;