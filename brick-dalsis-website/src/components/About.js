import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="text-section">
          <h1>Hi, I'm Brick Dalsis</h1>
          <p>
            I'm a recent graduate from the Colorado School of Mines (May 2024) with a Bachelor of Science in Computer Science. I'm passionate about coding and am currently looking for a role in the computer science industry.
          </p>
          <p>
            In my free, I enjoy disc golf, snowboarding, hiking, and playing video games. I also love to travel — I spent five months studying abroad in Norway starting in August 2023, which was an incredible experience.
          </p>
        </div>
        <div className="image-section">
          <img src="your-image-url1.jpg" alt="Disc Golf" className="about-image" />
          <img src="your-image-url2.jpg" alt="Snowboarding" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
