import React from 'react';
import Slider from 'react-slick';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Qb',
      description: 'A super fun video game that I built in GameMakerStudio. Furthermore, I also created the music for this game! Feel free to fork the github to play/add your own levels!',
      images: [
        'your-image-url2.jpg',
        'your-image-url3.jpg'
      ],
      link: 'https://github.com/bdalsis/Qb'
    },
    {
      title: 'StayActiveBot',
      description: 'A discord bot that reminds you to stay active when coding/gaming at your computer for long periods of time.',
      images: [
        'your-image-url4.jpg',
        'your-image-url5.jpg'
      ],
      link: 'https://www.linkedin.com/in/brick-dalsis/details/projects/'
    }
    // Add more projects as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <Slider {...sliderSettings}>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image} alt={`${project.title} image ${imgIndex + 1}`} className="project-image" />
                </div>
              ))}
            </Slider>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
