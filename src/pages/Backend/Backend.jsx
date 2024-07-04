import React from 'react';
import styled from 'styled-components';
import { FaPhp, FaDatabase, FaServer, FaCode, FaProjectDiagram } from 'react-icons/fa';

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin: 10px 0;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #777;
  text-align: center;
  max-width: 600px;
`;

const StepIcon = styled.div`
  font-size: 3rem;
  color: #6181b6;
  margin-bottom: 10px;
`;

const Video = styled.iframe`
  width: 560px;
  height: 315px;
  margin-top: 15px;
  border: none;
  border-radius: 10px;
`;

const steps = [
  {
    title: 'Learn PHP Basics',
    description: 'Understand the basics of PHP.',
    icon: <FaPhp />,
    video: 'https://www.youtube.com/embed/OK_JCtrrv-c'
  },
  {
    title: 'Database Integration',
    description: 'Learn how to integrate databases with PHP.',
    icon: <FaDatabase />,
    video: 'https://www.youtube.com/watch?v=hRulZhTtUTg'
  },
  {
    title: 'Building APIs',
    description: 'Learn how to build APIs with PHP.',
    icon: <FaServer />,
    video: 'https://www.youtube.com/embed/4q0gYjAVonI'
  },
  {
    title: 'Advanced PHP Techniques',
    description: 'Explore advanced PHP programming techniques.',
    icon: <FaCode />,
    video: 'https://www.youtube.com/embed/2eebptXfEvw'
  },
  {
    title: 'Project Structure',
    description: 'Learn about project structure and organization.',
    icon: <FaProjectDiagram />,
    video: 'https://www.youtube.com/embed/gCo6JqGMi30'
  }
];

const Backend= () => {
  return (
    <RoadmapContainer>
      <Title>Backend Roadmap</Title>
      {steps.map((step, index) => (
        <StepContainer key={index}>
          <StepIcon>{step.icon}</StepIcon>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <Video src={step.video} allowFullScreen></Video>
        </StepContainer>
      ))}
    </RoadmapContainer>
  );
};

export default Backend;
