import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #1e1e2f;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: relative;
  color: #fff;
  width: 1050px;
  margin: auto;
  margin-bottom:30px;
`;

const Highlight = styled.div`
  position: absolute;
  left: -20px;
  top: 0;
  bottom: 0;
  width: 10px;
  background-color: #FFA500;
  border-radius: 20px 0 0 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 24px;
  color: #FFA500;
`;

const Description = styled.p`
  font-size: 18px;
  color: #a0a0b3;
  text-align: center;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e1e2f;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  &:hover::after {
    content: '→';
    position: absolute;
    right: 10px;
    font-size: 24px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    font-size: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

const FeatureIcon = styled.div`
  background-color: #38385a;
  padding: 10px;
  border-radius: 10px;
  margin-right: 15px;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #a0a0b3;
  margin: 5px 0 0;
`;

const NewBadge = styled.span`
  background-color: #ff4081;
  color: #fff;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 5px;
  margin-left: 10px;
`;


const BatteriesIncluded = () => (
  <Section>
    <Highlight />
    <Title>
      <Icon>⚡</Icon> Batteries Included
    </Title>
    <Description>Stop rebuilding the same UI over and over and over and over and over</Description>
    <FeaturesGrid>
      <Feature>
        <FeatureIcon>📋</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Panel Builder</FeatureTitle>
          <FeatureDescription>Build a Laravel admin panel, customer-facing app, SaaS, or anything you can imagine!</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>📝</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Form Builder</FeatureTitle>
          <FeatureDescription>Easily build stunning Livewire-powered forms with over 25 components out of the box.</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>📊</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Table Builder</FeatureTitle>
          <FeatureDescription>Craft beautiful, optimized, and interactive Livewire-powered datatables for any situation.</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>🔔</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Notifications</FeatureTitle>
          <FeatureDescription>Notify your users of important events by delivering real-time messages using Livewire.</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>🚀</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Actions <NewBadge>New</NewBadge></FeatureTitle>
          <FeatureDescription>Open interactive modals and slide-overs - a great way to keep the user in the flow of the application.</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>📈</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Widgets <NewBadge>New</NewBadge></FeatureTitle>
          <FeatureDescription>Build a dashboard for your application, complete with real-time charts and stats.</FeatureDescription>
        </FeatureContent>
      </Feature>
      <Feature>
        <FeatureIcon>📋</FeatureIcon>
        <FeatureContent>
          <FeatureTitle>Infolist Builder <NewBadge>New</NewBadge></FeatureTitle>
          <FeatureDescription>Display read-only information to users about a particular record, with a fully flexible layout.</FeatureDescription>
        </FeatureContent>
      </Feature>
    </FeaturesGrid>
  </Section>

  
);

export default BatteriesIncluded;
