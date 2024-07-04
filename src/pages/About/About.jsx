import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../component/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';
import AboutUs from '../../utils/images/AboutUs.png';
import blogheader from '../../utils/images/blogheader.png';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faTrophy, faBook } from '@fortawesome/free-solid-svg-icons';
import  { useState } from 'react';





const trainers = [
    {
      name: "Anna Blown",
      title: "English Teacher",
      description: "She charms of pleasure of the moment, so blinded by desire foresee.",
      image: [Person1]
    },
    {
      name: "Front Profile",
      title: "Sports Teacher",
      description: "To take a teachings, which of us ever undertakes physical exercise.",
      image: [Person2]
    },
    {
      name: "Sarah Silvester",
      title: "Dance Teacher",
      description: "The actual teachings of the great explorer of the master-builder.",
      image: [Person3]
    },
    {
      name: "Scott Again",
      title: "Maths Teacher",
      description: "I must explain to you how all this idea of denouncing pleasure.",
      image: [Person4]
    }
    
  ];



  const feedbacks = [
    {
      rating: 4,
      reviews: 14,
      feedback: "We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.",
      name: "Pelican Steve",
      title: "Student",
      image: [Person5]
    },
    {
      rating: 4.5,
      reviews: 18,
      feedback: "We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.",
      name: "Chase Kroll",
      title: "IT Specialist",
      image: [Person6]
    },
    {
      rating: 5,
      reviews: 30,
      feedback: "We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.",
      name: "Ahmed Pot",
      title: "Teacher",
      image: [Person7]
    }
    ,
    {
      rating: 3,
      reviews: 17,
      feedback: "We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.",
      name: "Mousa Pot",
      title: "Teacher",
      image: [Person8]
    }
    ,
    {
      rating: 4,
      reviews: 20,
      feedback: "We are a Portsmouth based web design and e-marketing agency. We understand how important a website is to any business, big or small. Your online presence is now more important than ever before.",
      name: "Hamdy Pot",
      title: "Teacher",
      image: [Person9]
    }
  ];

function About() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
  
    const nextFeedback = () => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % feedbacks.length);
    };
  
    const prevFeedback = () => {
      setCurrentIndex((prevIndex) => (prevIndex - itemsPerPage + feedbacks.length) % feedbacks.length);
    };
  
    const currentFeedbacks = feedbacks.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className='about-page' style={{background:"#f9f9f9"}}>
        <div className='blog-page'>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1>About Us</h1>
        <p className="breadcrumb">Home {'>'} About Us</p>
      </div>
      <div className="about-us-image">
        <img src={blogheader} alt="Books" />
      </div>
    </div>
    </div>
        <div className='container my-5' >
            <div className="row" >
            <div className='col-lg-6 d-flex ' style={{marginTop:"30px",marginBottom:"30px"}}>
                    <img src={AboutUs} className='img-about' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p className='pImg'>Think Tank is an innovative online education platform designed to revolutionize learning through interactive and engaging content.
                        Dedicated to fostering intellectual curiosity and critical thinking skills, Think Tank offers a diverse range of courses spanning various disciplines, from STEM subjects to humanities and arts. Each course is meticulously crafted by industry experts and educators, ensuring relevance and depth in every lesson.</p>
                    <p className='pImg'>At Think Tank, learners are empowered with flexible learning options, allowing them to study at their own pace and convenience.
                        The platform utilizes cutting-edge technology to deliver immersive learning experiences, incorporating multimedia resources, simulations, and real-world case studies to deepen understanding and application of concepts.</p>
                    <Link to="/contact">
                        <button type='button' className='btn mx-0 mx-sm-2 my-2 my-sm-0' style={{background:"#6c63ff",borderRadius:"10px 0 10px 0",color:"#f7f7f7"}}>Contact Us</button>
                    </Link>
                </div>
                
            </div>
        </div>


        <div className="why-choose-us">
      <h2>Why <span >Choose</span>  Us</h2>
      <div className="statistics">
        <div className="stat-item">
          <FontAwesomeIcon icon={faUserGraduate} size="3x" />
          <h3>
            <CountUp start={0} end={2500} duration={2.5} />
          </h3>
          <p>Students Successive</p>
        </div>
        <div className="stat-item">
          <FontAwesomeIcon icon={faTrophy} size="3x" />
          <h3>
            <CountUp start={0} end={4500} duration={2.5} />
          </h3>
          <p>Competitions Won</p>
        </div>
        <div className="stat-item">
          <FontAwesomeIcon icon={faBook} size="3x" />
          <h3>
            <CountUp start={0} end={8530} duration={2.5} />
          </h3>
          <p>Magazines Won</p>
        </div>
      </div>
    </div>



    {/* <div className="our-trainers">
      <h2>Our <span>Trainers</span></h2>
      <div className="trainers-list">
        {trainers.map((trainer, index) => (
          <div className="trainer" key={index}>
            <img src={trainer.image} alt={trainer.name} />
            <h3>{trainer.name}</h3>
            <h4>{trainer.title}</h4>
            <p>{trainer.description}</p>
          </div>
        ))}
      </div>
    </div> */}


    <div className="feedback-section">
      <h2>Feedback Comminty Students</h2>
      <div className="feedback-list">
        {currentFeedbacks.map((feedback, index) => (
          <div className="feedback-item" key={index}>
            <div className="feedback-content">
              <div className="rating">
                {'★'.repeat(Math.floor(feedback.rating))}
                {'☆'.repeat(5 - Math.floor(feedback.rating))}
                <span>({feedback.reviews} Reviews)</span>
              </div>
              <p>{feedback.feedback}</p>
            </div>
            <div className="feedback-author">
              <img src={feedback.image} alt={feedback.name} />
              <div>
                <h4>{feedback.name}</h4>
                <p>{feedback.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="feedback-buttons">
        <button onClick={prevFeedback}
        style={{background:"#6c63ff",boxShadow:"box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)",
        color:"#eee"}}>&laquo; Previous</button>
        <button onClick={nextFeedback}
        style={{background:"#6c63ff",boxShadow:"box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)",
        color:"#eee"}}>Next &raquo;</button>
      </div>
    </div>



    </div>
  )
}

export default About;