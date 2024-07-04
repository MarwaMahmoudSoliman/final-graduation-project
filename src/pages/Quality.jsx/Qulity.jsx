import React from 'react';
import styled from 'styled-components';
import { FaBug, FaTools, FaChartLine, FaShieldAlt, FaCogs, FaLightbulb } from 'react-icons/fa';

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

const VideoIframe = styled.iframe`
  width: 560px;
  height: 315px;
  margin-top: 10px;
`;

const steps = [
  { 
    title: 'Understanding Basics', 
    description: 'Learn about software development lifecycle (SDLC) and different types of testing.', 
    icon: <FaBug />, 
    video: 'https://www.youtube.com/embed/xtpyjPrpyX8'
  },
  { 
    title: 'Manual Testing', 
    description: 'Learn to write test cases and test plans, practice exploratory testing, understand defect lifecycle and reporting.', 
    icon: <FaTools />, 
    video: 'https://www.youtube.com/embed/upER-KhYWm8' 
  },
  { 
    title: 'Automation Testing', 
    description: 'Learn a programming language (e.g., Python, Java), get familiar with automation tools (e.g., Selenium), develop skills to write and maintain automated test scripts.', 
    icon: <FaCogs />, 
    video: 'https://www.youtube.com/embed/FRn5J31eAMw' 
  },
  { 
    title: 'Performance Testing', 
    description: 'Learn about performance testing tools (e.g., JMeter), understand performance metrics and analysis.', 
    icon: <FaChartLine />, 
    video: 'https://www.youtube.com/embed/sPzT3WCwpAM' 
  },
  { 
    title: 'Security Testing', 
    description: 'Understand basic security concepts and vulnerabilities, learn about security testing tools (e.g., OWASP ZAP).', 
    icon: <FaShieldAlt />, 
    video: 'https://www.youtube.com/embed/JKvO9qJlvZA' 
  },
  { 
    title: 'Agile and DevOps Practices', 
    description: 'Learn Agile methodologies (e.g., Scrum, Kanban), understand DevOps concepts and tools (e.g., Jenkins, Docker).', 
    icon: <FaLightbulb />, 
    video: 'https://www.youtube.com/embed/Z9QbYZh1YXY' 
  },
];

const QARoadmap = () => {
  return (
    <RoadmapContainer>
      <Title>QA Engineer Roadmap</Title>
      {steps.map((step, index) => (
        <StepContainer key={index}>
          <StepIcon>{step.icon}</StepIcon>
          <StepTitle>{step.title}</StepTitle>
          <StepDescription>{step.description}</StepDescription>
          <VideoIframe 
            src={step.video} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></VideoIframe>
        </StepContainer>
      ))}
    </RoadmapContainer>
  );
};

export default QARoadmap;
