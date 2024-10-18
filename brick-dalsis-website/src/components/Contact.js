import React from 'react';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>I'd love to hear from you! Feel free to reach out to me through any of the following ways:</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></li>
        <li>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">Your GitHub Profile</a></li>
      </ul>
    </div>
  );
}

export default Contact;