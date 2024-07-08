import React from 'react'
import styled, { keyframes } from 'styled-components';
import icon1 from '../../utils/images/icon1.png';
import icon2 from '../../utils/images/icon2.png';
import icon3 from '../../utils/images/icon3.png';
import Credit from '../CaridetCard/Credit';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 20px;
  font-family: 'Montserrat', sans-serif;
`;

const Card = styled.div`
  background: #0056b3;
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 300px;
  animation: ${fadeIn} 1s ease-in-out;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardMiddle = styled(Card)`
  background: #fff;
  color: #000;
  &:hover {
    background: #fff9e0;
    color: #000;
  }
`;


const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;


const FeatureItem = styled.li`
  margin: 0.5rem 0;
  color: #eee;
  

`;

const Button = styled.button`
border-radius: 10px 0 10px 0;
width: 150px;
  border: none;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background: #543cdc;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #543cdc;
    color:#eee
  }
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 1rem;
`;
const handleButtonClick = () => {
  window.open('/credit');
};

const Pricing = () => {
  return (
    
    <div>
    <h1 style={{textAlign:"center", marginBottom:"10px" , marginTop:"20px"}}> <b>Pricing Table</b> </h1>
    <Wrapper>
    <Card>
    <Image src={icon1} alt="Basic Plan" />
      <CardTitle>Basic Plan</CardTitle>
      <Price>Free</Price>
      <FeatureList>
        <FeatureItem>Graphic Design</FeatureItem>
        <FeatureItem>Web Design</FeatureItem>
        <FeatureItem>UI/UX</FeatureItem>
        <FeatureItem>HTML/CSS</FeatureItem>
        <FeatureItem>SEO Marketing</FeatureItem>
        <FeatureItem>Business Analysis</FeatureItem>
      </FeatureList>
      <Link to="/courses">
      <Button>Start Now</Button>
      </Link>
    </Card>
    <CardMiddle>
    <Image src={icon2} alt="Standard Plan" />
      <CardTitle>Standard Plan</CardTitle>
      <Price>Free!</Price>
      <FeatureList>
        <FeatureItem style={{color:"#000"}}>Graphic Design</FeatureItem>
        <FeatureItem style={{color:"#000"}}>Web Design</FeatureItem>
        <FeatureItem style={{color:"#000"}}>UI/UX</FeatureItem>
        <FeatureItem style={{color:"#000"}}>HTML/CSS</FeatureItem>
        <FeatureItem style={{color:"#000"}}>SEO Marketing</FeatureItem>
        <FeatureItem style={{color:"#000"}}>Business Analysis</FeatureItem>
      </FeatureList>
      <Link to="/courses">
      <Button>Start Now</Button>
      </Link>
    </CardMiddle>
    <Card>
    <Image src={icon3} alt="Premium Plan" />
      <CardTitle>Premium Plan</CardTitle>
      <Price>$149/Month</Price>
      <FeatureList>
        <FeatureItem>Graphic Design</FeatureItem>
        <FeatureItem>Web Design</FeatureItem>
        <FeatureItem>UI/UX</FeatureItem>
        <FeatureItem>HTML/CSS</FeatureItem>
        <FeatureItem>SEO Marketing</FeatureItem>
        <FeatureItem>Business Analysis</FeatureItem>
      </FeatureList>
      <Link to="/credit">
           <Button >Start Now</Button>
      </Link>
      
    </Card>
  </Wrapper>
    </div>
  )
}

export default Pricing

