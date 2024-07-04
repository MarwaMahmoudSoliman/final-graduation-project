import React from 'react'
import './topic.css'
import { motion } from 'framer-motion';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import images from '../../utils/images/images.jpg';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';

const photos = [
  { id: 1,topic:"HTML" ,title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 2,topic:"Css" , title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg"},
  { id: 3,topic:"HTML" , title: 'Enhance your debugging skills in Python tips and essential tools.',img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 4, topic:"HTML" ,title: 'Enhance your debugging skills in Python tips and essential tools ', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 5, topic:"HTML" ,title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 7, topic:"HTML" ,title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/04-260x160.jpg" },
  
];



const Topic = () => {
  return (


   
        <div className="App">
        <header className='height-75 width-100 text-light' style={{background:"#6c63ff"}}>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center '>
                <h1 className='text-center fw-semibold text-light'>Learn Programming Topic and Web Development</h1>
                <p className='text-center w-75 mb-5 mt-2 text-light'> 
                <Typewriter 
                options={{ autoStart: true, loop: true, delay:50,
                strings:["We best Choses to Work As Software Engineer and growth Your Knowladge"]
            }}
            />
            </p>
            </div>
        </header>
      <h1 className='prog-topic'>PROGRAMMING TOPICS</h1>
      <div className="line-container">
      <div className="line">
        <div className="solid-line" ></div>
      </div>
    </div>
      <p className='prag'>Read about the most important programming and web development topics</p>
      <div className="gallery">
        {photos.map((photo) => (
          <motion.div
            className="card"
            style={{backgroundColor:"white", width:"400px"}}
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={photo.img} alt={photo.title} />
            <div className="card-content">
            <h2>{photo.topic}</h2>
              <h2>{photo.title}</h2>
              <br />
              <p>Post by : admin</p>
              <Link to={`/posts/${photo.id}`} className='text-decoration-none'>
      <button style={{borderRadius:"10px 0 10px 0"}}>
        Show <FontAwesomeIcon icon={faEye} />
      </button>
      </Link >
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    
  )
}

export default Topic
