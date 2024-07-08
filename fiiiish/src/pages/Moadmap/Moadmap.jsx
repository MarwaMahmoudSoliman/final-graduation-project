import React from 'react';
import './Moadmap.css';

const Moadmap = () => {
    const topics = [
        {
          id: 1,
          name: "Introduction to Machine Learning",
          description: "Basic concepts and overview of machine learning.",
          video: "https://www.youtube.com/embed/abcdef12345"
        },
        {
          id: 2,
          name: "Linear Regression",
          description: "Understanding and implementing linear regression models.",
          video: "https://www.youtube.com/embed/uvwxyz67890"
        },
        {
          id: 3,
          name: "Neural Networks",
          description: "Introduction to neural networks and deep learning.",
          video: "https://www.youtube.com/embed/ijklmn45678"
        }
        // Add more topics as needed
      ];
    
  return (
    <div className="roadmap">
      <h1>Machine Learning Roadmap</h1>
      <div className="topics">
        {topics.map((topic) => (
          <div key={topic.id} className="topic">
            <h2>{topic.name}</h2>
            <p>{topic.description}</p>
            <div className="video-container">
              <iframe
                title={topic.name}
                width="560"
                height="315"
                src={topic.video}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moadmap;
