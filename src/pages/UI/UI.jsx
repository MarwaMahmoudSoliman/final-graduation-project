import React, { useState, useEffect } from 'react';
import Stage from '../../components/Stage';

const Roadmap = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
  
    const fetchStages = async () => {
        const data = [
            {
              id: 1,
              title: "Introduction to UI/UX Design",
              description: "Basic concepts and principles of user interface and user experience design.",
              video: "https://www.youtube.com/embed/abcdef12345"
            },
            {
              id: 2,
              title: "Wireframing and Prototyping",
              description: "Creating wireframes and interactive prototypes to visualize designs.",
              video: "https://www.youtube.com/embed/uvwxyz67890"
            },
            {
              id: 3,
              title: "Visual Design and UI Elements",
              description: "Designing visual elements, typography, and color schemes for UI.",
              video: "https://www.youtube.com/embed/ijklmn45678"
            },
        
          ];
    

      setStages(data);
    };

    fetchStages();
  }, []);

  return (
    <div className="roadmap">
      <h1>UI/UX Design Roadmap</h1>
      {stages.map((stage) => (
        <Stage key={stage.id} stage={stage} />
      ))}
    </div>
  );
};

export default Roadmap;
