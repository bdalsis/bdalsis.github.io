import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'A cool project I built using React and Firebase.',
      link: 'https://github.com/yourgithub/project1'
    },
    {
      title: 'Project 2',
      description: 'Another awesome project focused on backend development.',
      link: 'https://github.com/yourgithub/project2'
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