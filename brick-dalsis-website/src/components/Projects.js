import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import qb_p3 from '../images/Qb_level_p1.jpg';
import qb_p2 from '../images/Qb_level_p2.jpg';
import qb_p1 from '../images/qb_title.jpg';
import rd_p3 from '../images/rd_flare_edit.jpg';
import rd_p1 from '../images/rd_title.jpg';
import rd_p2 from '../images/rd_level_edit.jpg';
import sa_p2 from '../images/bot_commands_edit.jpg';
import sa_p1 from '../images/bot_msgs.jpg';
import sf_p1 from '../images/sf_p1_edit.jpg';
import sf_p2 from '../images/sf_p3_edit.jpg';


function Projects() {
  const projectList = [
    {
      title: 'Qb',
      description: 'A super fun 2D platformer that I built in GameMakerStudio in my free time while studying abroad in Norway. Furthermore, I also created the music for this game! Feel free to fork the github to play/add your own levels!',
      images: [
        qb_p1,
        qb_p2,
        qb_p3,
      ],
      link: 'https://github.com/bdalsis/Qb'
    },
    {
      title: 'SongFinder',
      description: 'A web application that my team and I created to help users find new music from an artist they just discovered. The app shows most popular songs from a certain artist using the spotifyAPI and additionally provides similar artists to listen to.',
      images: [
        sf_p1,
        sf_p2
      ],
      link: ''
    },
    {
      title: 'StayActiveBot',
      description: 'A discord bot that I built to remind you to stay active when coding/gaming at your computer for long periods of time.',
      images: [
        sa_p1,
        sa_p2
      ],
      link: ''
    },
    {
      title: 'Red Depths',
      description: 'A video game that my team and I created where you play as an USSR miner who has to navigate his way through a cave filled with monsters to save his friend.',
      images: [
        rd_p1,
        rd_p2,
        rd_p3
      ],
      link: ''
    },
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
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Github</a>
              )}
            </div>
            <Slider {...sliderSettings}>
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex}>
                  <img src={image} alt={`${project.title} image ${imgIndex + 1}`} className="project-image" />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
