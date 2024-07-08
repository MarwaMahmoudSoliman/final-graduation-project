import React from 'react';
import './Cyber.css'; // Import your CSS file

const Cyber= () => {
  return (
    <div className="cyber-security-roadmap">
      <section className="intro-section">
        <h1>Cyber Security Roadmap</h1>
        <p>A comprehensive guide to mastering cyber security concepts.</p>
      </section>

      <section className="core-principles-section">
        <h2>Core Security Principles</h2>
        <ul>
          <li>Confidentiality, Integrity, and Availability</li>
          <li>Defense-in-Depth strategy</li>
          <li>Principle of Least Privilege</li>
        </ul>
      </section>

      <section className="fundamentals-section">
        <h2>Cyber Security Fundamentals</h2>
        <ul>
          <li>Common threats and attack vectors</li>
          <li>Network security basics</li>
          <li>Cryptography essentials</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Videos</h2>
        <div className="video-container">
          <iframe
            width="150"
            height="115"
            src="https://www.youtube.com/embed/video-id"
            title="Cyber Security Basics"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

     
      <section className="career-development-section">
        <h2>Career Development</h2>
        <ul>
          <li>Building a career in cyber security</li>
          <li>Certifications and training</li>
          <li>Resources for continued learning</li>
        </ul>
      </section>
    </div>
  );
};

export default Cyber;
