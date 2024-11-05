import React from 'react';
import './About.css';

import about_p1 from '../images/dg_1.jpg';
import about_p2 from '../images/me.jpg';
import about_p3 from '../images/norway1.jpg';
import about_p4 from '../images/snow_edit.JPG';

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
            In my free time, I enjoy disc golfing, snowboarding, hiking, and playing video games. I also love to travel — I spent five months studying abroad in Norway starting in August 2023, which was an incredible experience that I'll never forget.
          </p>
        </div>
        <div className="image-section">
          <img src={about_p1} alt="Disc Golf" className="about-image" />
          <img src={about_p2} alt="Snowboarding" className="about-image" />
          <img src={about_p3} alt="Snowboarding" className="about-image" />
          <img src={about_p4} alt="Snowboarding" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
