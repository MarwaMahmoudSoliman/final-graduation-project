import React, { useState, useEffect } from 'react';
import Stage from '../../components/Stage';

const Goadmap = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {

    const fetchStages = async () => {
    
        const data = [
            {
              id: 1,
              title: "Game Design Principles",
              description: "Introduction to game design principles.",
              video: "https://www.youtube.com/embed/example1"
            },
            {
              id: 2,
              title: "Game Development Process",
              description: "Overview of the game development process.",
              video: "https://www.youtube.com/embed/example2"
            },
            {
              id: 3,
              title: "Game Engine Tutorial",
              description: "Tutorial on using a game engine.",
              video: "https://youtu.be/hRL56gXqj-4?si=bBH2mpnGMQu__1ki"
            }]

      setStages(data);
    };

    fetchStages();
  }, []);

  return (
    <div className="roadmap">
      <h1>Game Development Roadmap</h1>
      {stages.map((stage) => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </div>
  );
};

export default Goadmap;
