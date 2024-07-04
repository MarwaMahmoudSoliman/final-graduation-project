import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import blogheader from '../../utils/images/blogheader.png';
import women from '../../utils/images/women.png';


// import Blog8Img from '../../utils/images/blog8-img.jpg';
// import Blog9Img from '../../utils/images/blog9-img.jpg';



const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Maximizing Your Learning Potential: A Guide to StudyHub '
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Announcing the winners the 2023 Education com Story .'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Azure AI Fundamentals: How to Pass the AI-900 Exam '
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Blog 4',
        description: 'We are praying for our community and platform. '
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Blog 5',
        description: 'Here at First Baptist Cape Coral we believe!  '
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Blog 6',
        description: 'Delivering What Consumers Really Value?  '
    },
    
];

function Blog() {
  return (
    <div className='blog-page '>
        <div className='about-page' style={{background:"#f9f9f9"}}>
        <div className='blog-page'>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1>Blog</h1>
        <p className="breadcrumb">Home {'>'} Blog</p>
      </div>
      <div className="about-us-image">
        <img src={blogheader} alt="Books" />
      </div>
    </div>
    </div>
    </div>
        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to={`/blogs/${blog.id}`} className='text-decoration-none'>
    <div className="app" style={{color:"black"}}>
      <div className="post">
        <div className="post-header">
        <img decoding="async" width="383" height="230" src="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-35-1-383x230.jpg" class="attachment-studyhub-383-230 size-studyhub-383-230 wp-post-image" alt="Frame 35 (1)" srcset="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-35-1-383x230.jpg 383w, https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-35-1-370x222.jpg 370w, https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-35-1-888x533.jpg 888w, https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-35-1-858x515.jpg 858w" sizes="(max-width: 383px) 100vw, 383px"/>
          <div className="post-details">
            <div className="post-date">
              <svg width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2z"/>
              </svg>
              <span>May 12, 2024</span>
            </div>
            <div className="post-author">
              <svg width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5-3a5 5 0 1 1-10 0 5 5 0 0 1 10 0zM8 9a7 7 0 0 0-7 7v1h14v-1a7 7 0 0 0-7-7z"/>
              </svg>
              <span>Jhon Sina</span>
            </div>
          </div>
        </div>
        <div className="post-content">
          <h4>Maximizing Your Learning Potential: A Guide to StudyHub</h4>
          <div href="#story" className="post-link" style={{backgroundColor: "#543cdc",color:"white" ,textAlign:"center",width:"70px" ,padding:"10px" ,borderRadius:"10px 0 10px 0"}} >Story</div>
        </div>
      </div>
    </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
</div>
  <div className='py-5' style={{ background: "#573ede", position: 'relative' }}>
      <div className="container">
        <div className='row d-flex align-items-center justify-content-between'>
          <div className='col-lg-6'>
            <img src={women} className='img-fluid' alt="Person" /> 
          </div>
          <div className='col-lg-6'>
            <h2 className='text-white'>Skills Certificate From the Studyhub</h2>
            <Link to="/courses">
              <button type='button' className='btn btn-light my-3' style={{background:"#543cdc",color:"#eee"}}>View All Course &rarr;</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  )
}

export default Blog;