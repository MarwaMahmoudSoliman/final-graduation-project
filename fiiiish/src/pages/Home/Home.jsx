      import React from 'react';
      import './Home.css';
      import TrackVisibility from 'react-on-screen';
      import { Link } from 'react-router-dom';
      import women from '../../utils/images/women.png';
      import FaqAccordion from '../../component/FaqAccordion/FaqAccordion';
      import { Card } from 'react-bootstrap';
      import blogheader from '../../utils/images/blogheader.png';

      import Blog1Img from '../../utils/images/blog1-img.jpg';
      import flower from '../../utils/images/flower.jpg';
      import Blog2Img from '../../utils/images/blog2-img.jpg';
      import Blog3Img from '../../utils/images/blog3-img.jpg';
      import images from '../../utils/images/images.jpg';
      import rocket from '../../utils/images/rocket.webp';
      import ArtCourseImg from '../../utils/images/art-course.jpg';
      import BusinessCourseImg from '../../utils/images/business-course.jpg';
      import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
      import { Data } from '../../pages/DataList/Data';
      import styled, { keyframes, css } from "styled-components";
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faUserGraduate, faLanguage, faChalkboardTeacher, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';
      import CountUp from 'react-countup';
      import { motion } from 'framer-motion';
      import Icon from '@mdi/react';
import { mdiProjectorScreen } from '@mdi/js';
import { faEye , faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Pricing from '../Pircing/Pricing';
import { mdiSync } from '@mdi/js'; // Sync icon from Material Design Icons
import { mdiCodeBraces, mdiDiagram, mdiDatabase } from '@mdi/js'; // Icons from Material Design Icons

import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiReact, mdiLanguagePhp, mdiNodejs } from '@mdi/js'; // Icons from Material Design Icons


      const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
      ];

      const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
      ];

      const photos = [
        { id: 1, topic: "HTML", title: 'Mastering HTML: Structure and Semantics for Web Development', icon: mdiLanguageHtml5 },
        { id: 2, topic: "CSS", title: 'Styling the Web: Advanced CSS Techniques and Best Practices', icon: mdiLanguageCss3 },
        { id: 3, topic: "JavaScript", title: 'JavaScript Essentials: From Basics to Advanced Programming', icon: mdiLanguageJavascript },
        { id: 4, topic: "React", title: 'Building Dynamic UIs with React: A Comprehensive Guide', icon: mdiReact },
        { id: 5, topic: "Redux", title: 'State Management Made Easy: Mastering Redux', icon: mdiSync },
        { id: 6, topic: "PHP", title: 'PHP for Web Development: From Fundamentals to Advanced Concepts', icon: mdiLanguagePhp },
        { id: 7, topic: "Node.js", title: 'Server-Side JavaScript: Building Scalable Applications with Node.js', icon: mdiNodejs },
        { id: 8, topic: "TypeScript", title: 'TypeScript in Action: Adding Types to JavaScript for Robust Applications', icon: mdiCodeBraces },
        { id: 9, topic: "GraphQL", title: 'Querying APIs with GraphQL: A Modern Approach', icon: mdiProjectorScreen },
        { id: 10, topic: "MongoDB", title: 'NoSQL Databases: Mastering MongoDB for Modern Applications', icon: mdiDatabase }
      ];


      const courses = [
        {
            id: 1,
            img: [ArtCourseImg],
            title: 'Art Course',
            description: 'An art course offers a captivating journey into the realm of creativity, expression, and technique.'
        },
        {
            id: 2,
            img: [BusinessCourseImg],
            title: 'Business Course',
            description: 'A business course serves as a gateway to the dynamic world of commerce, strategy, and innovation. '
        },
        {
            id: 3,
            img: [ComputerScienceCourseImg],
            title: 'ComputerScience Course',
            description: ' A computer science course is an exhilarating voyage into the heart of technology, computation, and innovation. '
        },
        
      ];

      const blogs = [
        {
            id: 1,
            img: "https://studyhub.themewant.com/wp-content/uploads/2024/05/09.jpg",
            title: 'Blog 1',
            description: 'Reham Elzero is a well-known instructor and lecturer in the field of web development and programming. '
        },
        {
            id: 2,
            img: "https://studyhub.themewant.com/wp-content/uploads/2024/05/07.jpg",
            title: 'Blog 2',
  description: 'Ali is engineer builds AI models using machine learning algorithms and deep learning neural networks to draw business insights'
        },
        {
            id: 3,
            img: "https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg",
            title: 'Blog 3',
            description: ' Omar is a well-known instructor and lecturer in the field of mobile development and programming. '
        }
      ];



            
      function Home() {
        return (
  <div className='home-page' >
            <header className='h-100 min-vh-100 d-flex align-items-center '>
              <div className='container d-flex justify-content-between align-items-left' style={{  marginLeft: "100px",marginTop:"50px" ,width: "60rem" }}>
                <div style={{ width: "50%" , marginLeft:"-30px"  }} className='p-3'  >
                  <h2 className=''> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
                  <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
                  </svg> Welcome To</h2>
                  <h1 className='text-left'>
                    Think Tank
                    <svg  width="31" height="31" fill="none" class="star
                        hidden scale-75 min-[450px]:block min-[500px]:scale-100" xmlns="http://www.w3.org/2000/svg">
                        <path d="m17.664 29.354 3.06-8.755 8.679-3.27a2.183 2.183 0 0 0-.05-4.092l-8.754-3.06-3.27-8.679a2.183 2.183 0 0 0-4.092.05l-3.06 8.754-8.68 3.27a2.183 2.183 0 0 0 .05 4.092l8.755 3.06 3.27 8.679a2.183 2.183 0 0 0 4.092-.05Zm-5.325-9.391a2.142 2.142 0 0 0-1.325-1.294l-8.741-3.06 8.665-3.27a2.143 2.143 0 0 0 1.294-1.325l3.06-8.741 3.27 8.665a2.142 2.142 0 0 0 1.325 1.294l8.74 3.06-8.664 3.27a2.141 2.141 0 0 0-1.294 1.325l-3.06 8.741-3.27-8.665Z" fill="#0F033A"></path>
                    </svg>
                    </h1>
                  <p className='text-left lh-base my-3 type' style={{fontSize:"19px"}}>
                    Educational digital websites are an effective way to improve the learning process, 
                    students can access educational content at any time and from anywhere,
                    allowing them to learn.
                  </p>
                  <div className='d-flex flex-column flex-sm-row align-items-left mt-5'>
                <Link to="/courses">
                <button class="rounded-buttonn edge-visible" >Get Started ➔</button>
                </Link>
                <Link to="/contact">
                <button className="rounded-button edge-visible">Join Discord</button>
                </Link>
              </div>
                </div>
                <div className='header-img ml-5 ' style={{  width: "50%", height: "100%" }}>
                
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                      <img  src={rocket}  className="rocket" alt="Header Img" width={"80%"} height={"50%"} marginLeft={"1000px"}/>
                    </div>}
                </TrackVisibility>
                </div>
              </div>
            </header>
          
            

<div className="platform-statistics">
      <div className="stat">
        <FontAwesomeIcon icon={faUserGraduate} size="3x" />
        <h2>
          <CountUp start={0} end={700000} duration={5} separator="," />
        </h2>
        <p>Students</p>
      </div>
      <div className="stat">
        <FontAwesomeIcon icon={faLanguage} size="3x" />
        <h2>
          <CountUp start={0} end={30} duration={5} />
          +
        </h2>
        <p>Languages</p>
      </div>
      <div className="stat">
        <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
        <h2>
          <CountUp start={0} end={97000} duration={5} separator="," />
        </h2>
        <p>Enrollments</p>
      </div>
      <div className="stat">
        <FontAwesomeIcon icon={faGlobe} size="3x" />
        <h2>
          <CountUp start={0} end={80} duration={5} />
          +
        </h2>
        <p>Countries</p>
      </div>
      <div className="stat">
        <FontAwesomeIcon icon={faBuilding} size="3x" />
        <h2>
          <CountUp start={0} end={1600} duration={5} separator="," />
          +
        </h2>
        <p>Enterprise customers</p>
      </div>
    </div>

            <AppContainer>
          <Wrapper>
            <Text><b> With Great Outcomes.</b></Text>
            <Note>Our customers have gotten offers from awesome companies.</Note>
            <Marquee>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
              <MarqueeGroup>
                {row1.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup>
            </Marquee>
            <Marquee>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
              <MarqueeGroup2>
                {row2.map((el) => (
                  <ImageGroup>
                    <Image src={el} />
                  </ImageGroup>
                ))}
              </MarqueeGroup2>
            </Marquee>
          </Wrapper>
        </AppContainer>

        <Pricing />


            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize text-dark mb-5'><b>Some on the Courses</b> </h2>
                    <div className='row g-4'>
                        {courses.map((course) => (
                            <div key={course.id} className='col-md-4 col-lg-4'>
                                <Link to="/courses" className='text-decoration-none'>
                                    <Card className='h-100  scale-hover-effect' style={{width:"350px"}}>
                                        <Card.Img variant="top" src={course.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title className=' text-decoration-none  text-danger'>{course.title}</Card.Title>
                                            <Card.Text>{course.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/courses">
                        <button type='button' className='btn-courses'>Get In Courses</button>
                    </Link>
                </div>
            </div>
            <div className='blog-section text-light py-5'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2 className='text-center text-capitalize text-dark '><b>Latest on the Blog</b> </h2>
                    <div className="line-container">
                      <div className="line">
                        <div className="solid-line" ></div>
                      </div>
                    </div>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6 col-lg-4'>
                                <Link to="/blog" className='text-decoration-none'>
                                    <Card className='h-100 scale-hover-effect' style={{width:"350px"}}>
                                        <Card.Img variant="top" src={blog.img} />
                                        <Card.Body className='p-md-5'>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>{blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/blog">
                        <button type='button' className='btn-courses  mt-5'>Get in Blogs</button>
                    </Link>
                </div>
            </div>

            <div className="App">
            <h1 className='prog-topic'>
              <b>PROGRAMMING TOPICS</b></h1>
            <div className="line-container">
            <div className="line">
            <div className="solid-line" ></div>
            </div>
            </div>
            <p className='prag'>Read about the most important programming and web development topics</p>
            <div className="gallery">
            {photos.map((photo) => (
            <motion.div
            className="card" style={{width:"350px"}}
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            
            >
          <Icon path={photo.icon} size={4} className="icon" />
            <div className="card-content">
            <h2>{photo.title}</h2>
            <br />
            <p>Post by : <b>admin</b></p>
            {/* <button className='btn-post'>
            Show <FontAwesomeIcon icon={faEye} />
            </button> */}
             <Link to='/post' className='text-decoration-none'>
      <button style={{borderRadius:"10px 0 10px 0"}}>
        Show <FontAwesomeIcon icon={faEye} />
      </button>
      </Link>
            </div>
            </motion.div>
            ))}
            </div>
            <Link to="/post">
            <button type='button' className='button-topic '>Read More ... <FontAwesomeIcon icon={faArrowRightFromBracket} /></button>
            </Link>
            </div>


            <div className="py-5">
                <FaqAccordion />
            </div>
            <div className='bg-light text-dark  d-flex flex-column align-items-center  py-5'>
            <Data />
            </div>
            <div>
              
            <div className='py-5' style={{ background: "#573ede", position: 'relative' }}>
      <div className="container">
        <div className='row d-flex align-items-center justify-content-between'>
          <div className='col-lg-6'>
            <img src={women} className='img-fluid' alt="Person" /> 
          </div>
          <div className='col-lg-6'>
            <h2 className='text-white'>Skills Certificate From the Studyhub</h2>
            <Link to="/courses">
              <button type='button' className='btn btn-light my-3' style={{background:"#543cdc",color:"#f7f7f7", borderRadius:"10px 0 10px 0"}}>View All Course &rarr;</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
      )
      }

      export default Home;

      const AppContainer = styled.div`
      width: 100%;
      height: 100vh;
      color: #000000;

      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      `;

      const Wrapper = styled.div`
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      `;

      const Text = styled.div`
      font-size: 35px;
      font-weight: 500;
      margin-bottom: 10px;
      color: #02203c;
      `;

      const Note = styled.div`
      font-size: 18px;
      font-weight: 200;
      margin-bottom: 40px;
      color: #7c8e8e;
      `;

      const Marquee = styled.div`
      display: flex;
      width: 1200px;
      overflow: hidden;
      user-select: none;

      mask-image: linear-gradient(
        to right,
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0)
      );
      `;

      const scrollX = keyframes`
      from {
        left: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
      `;

      const common = css`
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      white-space: nowrap;
      width: 100%;
      animation: ${scrollX} 30s linear infinite;
      `;

      const MarqueeGroup = styled.div`
      ${common}
      `;
      const MarqueeGroup2 = styled.div`
      ${common}
      animation-direction: reverse;
      animation-delay: -3s;
      `;

      const ImageGroup = styled.div`
      display: grid;
      place-items: center;
      width: clamp(10rem, 1rem + 40vmin, 30rem);
      padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
      `;

      const Image = styled.img`
      object-fit: contain;
      width: 100%;
      height: 100%;
      /* border: 1px solid black; */
      border-radius: 0.5rem;
      aspect-ratio: 16/9;
      padding: 5px 20px;
      box-shadow: rgba(99, 99, 99, 0.08) 0px 2px 8px 0px;
      `;