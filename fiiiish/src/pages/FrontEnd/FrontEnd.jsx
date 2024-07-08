import React from 'react';
import styled from 'styled-components';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';

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
  margin: 10px 0;
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
  color: #61dafb;
  margin-bottom: 10px;
`;

const VideoLink = styled.a`
  font-size: 1rem;
  color: #61dafb;
  margin-top: 5px;
`;

const steps = [
  { title: 'Learn HTML', description: 'Understand the structure of web pages.', icon: <FaHtml5 />, video: 'https://www.youtube.com/watch?v=UB1O30fR-EE' },
  { title: 'Learn CSS', description: 'Style your web pages.', icon: <FaCss3Alt />, video: 'https://www.youtube.com/watch?v=yfoY53QXEnI' },
  { title: 'Learn JavaScript', description: 'Make your web pages interactive.', icon: <FaJs />, video: 'https://www.youtube.com/watch?v=W6NZfCO5SIk' },
  { title: 'Learn React', description: 'Build dynamic user interfaces.', icon: <FaReact />, video: 'https://www.youtube.com/watch?v=DLX62G4lc44' },
];

const Froadmap = () => {
  return (
    <RoadmapContainer>
      <Title>Frontend Roadmap</Title>
      {steps.map((step, index) => (
        <StepContainer key={index}>
          <StepIcon>{step.icon}</StepIcon>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <VideoLink href={step.video} target="_blank">Watch Video</VideoLink>
        </StepContainer>
      ))}
    </RoadmapContainer>
  );
};

export default Froadmap;
