import React from 'react'
import './topic.css'
import { motion } from 'framer-motion';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import ArtCourseImg from '../../utils/images/art-course.jpg';
import images from '../../utils/images/images.jpg';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript,mdiNodejs,mdiReact, mdiSync, mdiLanguagePhp,  mdiCodeBraces, mdiProjectorScreen, mdiDatabase } from '@mdi/js';
import Icon from '@mdi/react';



const photos = [
  { id: 1, topic: "HTML", title: 'Mastering HTML: Structure and Semantics for Web Development', icon: mdiLanguageHtml5 },
  { id: 2, topic: "CSS", title: 'Styling the Web: Advanced CSS Techniques and Best Practices CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of a web page ', icon: mdiLanguageCss3 },
  { id: 3, topic: "JavaScript", title: 'JavaScript Essentials: From Basics to Advanced Programming', icon: mdiLanguageJavascript },
  { id: 4, topic: "React", title: 'Building Dynamic UIs with React: A Comprehensive Guide', icon: mdiReact },
  { id: 5, topic: "Redux", title: 'State Management Made Easy: Mastering Redux', icon: mdiSync },
  { id: 6, topic: "PHP", title: 'PHP for Web Development: From Fundamentals to Advanced Concepts', icon: mdiLanguagePhp },
  { id: 7, topic: "Node.js", title: 'Server-Side JavaScript: Building Scalable Applications with Node.js', icon: mdiNodejs },
  { id: 8, topic: "TypeScript", title: 'TypeScript in Action: Adding Types to JavaScript for Robust Applications', icon: mdiCodeBraces },
  { id: 9, topic: "GraphQL", title: 'Querying APIs with GraphQL: A Modern Approach', icon: mdiProjectorScreen },
  { id: 10, topic: "MongoDB", title: 'NoSQL Databases: Mastering MongoDB for Modern Applications', icon: mdiDatabase }
];






const Topic = () => {
  return (


   
        <div className="App">
        <header className='height-75 width-100 text-light' style={{background:"#8d30de"}}>
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
            style={{backgroundColor:"white", width:"400px" ,height:"500px"}}
            key={photo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
           <Icon path={photo.icon} size={4} className="icon" />
            <div className="card-content">
            <h2>{photo.topic}</h2>
              <h2>{photo.title}</h2>
              <br />
              <p>Post by : admin</p>
              <Link to={`/posts/${photo.id}`}
              className='text-decoration-none'>
      <button style={{borderRadius:"10px 0 10px 0"}}>
        Show <FontAwesomeIcon icon={faEye} />
      </button>
      </Link>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    
  )
}

export default Topic
