import React from 'react';
import './Projects.css';
const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'The Word Counter app in ReactJS allows users to easily count words in text, providing a user-friendly interface and instant word count display. It includes additional features like character count and a progress bar for efficient tracking of text length. A valuable tool for writers and editors to monitor word usage.',
      imageUrl: 'word-counter.jpg',
      url: 'https://sheffalee.github.io/word-counter-app/'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'The Calculator app is a ReactJS application that provides users with a user-friendly interface to perform basic arithmetic operations. It supports addition, subtraction, multiplication, and division, allowing users to input numbers and obtain instant results. With its simple design and efficient functionality, the Calculator app is a handy tool for quick calculations.',
      imageUrl: 'calculator.jpg',
      url: 'https://sheffalee.github.io/calculator-app/'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'The Color Picker app in ReactJS enables users to explore and select colors from a wide range of options. With an intuitive user interface, users can easily preview and choose colors, obtaining their respective hex codes. This app is a valuable tool for designers and developers seeking efficient color selection and integration into their projects.',
      imageUrl: 'color-picker.png',
      url: 'https://sheffalee.github.io/color-picker-app/'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'The Age Calculator app in ReactJS allows users to quickly calculate their age based on their birthdate. It provides a user-friendly interface where users can input their birthdate and instantly view their age in years, months, and days. This app is a handy tool for anyone who wants to determine their age accurately and conveniently.',
      imageUrl: 'agecalc.png',
      url: 'https://sheffalee.github.io/age-calculator-app/'
    }
  ];

  return (
    <div>
        <h2>Projects</h2>
  
    <div className="projects-container">
        
      {projectData.map(project => (
        <div className="project-card" key={project.id}>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.url}><img className='github' src='github.svg'/></a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Projects;
