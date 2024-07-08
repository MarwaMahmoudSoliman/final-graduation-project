import React, { useState, useEffect } from 'react';
import Project from '../../components/Project';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

