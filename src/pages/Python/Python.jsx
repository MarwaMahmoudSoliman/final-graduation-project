import React from 'react';
import './Python.css'; 

const PythonDeveloperRoadmap = () => {
  return (
    <div className="python-developer-roadmap">
      <section className="intro-section">
        <h1>Python Developer Roadmap</h1>
        <p>A comprehensive guide to becoming a Python developer using React.</p>
      </section>

      <section className="core-skills-section">
        <h2>Core Python Skills</h2>
        <ul>
          <li>Basics of Python programming</li>
          <li>Object-oriented programming</li>
          <li>Data structures in Python</li>
        </ul>
      </section>

      <section className="advanced-topics-section">
        <h2>Advanced Python Topics</h2>
        <ul>
          <li>Exception handling</li>
          <li>Decorators and generators</li>
          <li>Functional programming concepts</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Videos</h2>
        <div className="video-container">
          <iframe
            width="160"
            height="315"
            src="https://www.youtube.com/embed/video-id"
            title="Python Basics"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="career-development-section">
        <h2>Career Development</h2>
        <ul>
          <li>Building a portfolio of projects</li>
          <li>Open-source contributions</li>
          <li>Interview preparation tips</li>
        </ul>
      </section>
    </div>
  );
};

export default PythonDeveloperRoadmap;
