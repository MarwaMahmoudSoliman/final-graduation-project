import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  return (
    <div className="project">
      <h2 className="project-title">{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
        {project.video && (
          <div className="video-container">
            <iframe
              title="Project Demo"
              width="560"
              height="315"
              src={project.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
