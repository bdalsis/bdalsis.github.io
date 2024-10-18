import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Qb',
      description: 'A super fun video game that I built in GameMakerStudio. Furthermore, I also created the music for this game! Feel free to fork the github to play/add your own levels!',
      link: 'https://github.com/bdalsis/Qb'
    },
    {
      title: 'StayActiveBot',
      description: 'A discord bot that reminds you to stay active when coding/gaming at your computer for long periods of time.',
      link: 'https://www.linkedin.com/in/brick-dalsis/details/projects/'
    }
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;