import React from 'react'
import './Info.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CommentSection from '../../components/Comments';
import blogheader from '../../utils/images/blogheader.png';
import women from '../../utils/images/women.png';
const photos = [
  { id: 1,topic:"HTML" ,title: 'HTML is the backbone of any web page. It is a markup language used to structure content on the web. HTML elements are the building blocks of web pages, and they include tags such as <h1> for headings, <p> for paragraphs, <a> for hyperlinks, and <div> for division sections. HTML tags are often nested within each other to create a document structure that browsers can interpret and render. Attributes within these tags provide additional information about the elements, such as id, class, and src for image sources. The latest version, HTML5, introduces new elements like <article>, <section>, and <nav>, which offer semantic meaning to the content and improve accessibility and SEO', img: "https://studyhub.themewant.com/wp-content/uploads/2024/03/04.jpg" },
  { id: 2,topic:"Css" , title: 'CSS is the language used to describe the presentation of a web page, including its layout, colors, fonts, and overall visual appearance. CSS allows developers to separate content (HTML) from presentation (CSS), which makes the design more flexible and easier to maintain. CSS rules consist of selectors and declarations. Selectors target HTML elements, and declarations define the style properties applied to those elements, such as color, font-size, and margin. CSS can be written directly within HTML using the <style> tag, inline within individual elements, or more commonly, in separate external stylesheets linked to the HTML document. CSS3, the latest evolution of CSS, brings advanced features like transitions, animations, and flexbox/grid layouts.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg"},
  { id: 3,topic:"Bootstrap" , title: 'Enhance your debugging skills in Python tips and essential tools.',img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 4, topic:"HTML" ,title: 'Enhance your debugging skills in Python tips and essential tools ', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 5, topic:"HTML" ,title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" },
  { id: 7, topic:"HTML" ,title: 'Discover the benefits of functional programming  maintainability.', img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/04-260x160.jpg" },
  
];

function Info() {
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const { id } = useParams();
  const  photo =photos.find( photo =>  photo.id === parseInt(id));

  if (!  photo) {
    return <div>  photo not found</div>;
  }

    return(

   
            <div style={{ background:"white"}}>
               <div className='blog-page'>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1>Info Post</h1>
        <p className="breadcrumb">Home {'>'}Post {'>'} Info-Post</p>
      </div>
      <div className="about-us-image">
        <img src={blogheader} alt="Books" />
      </div>
    </div>
    </div>

  <div style={{ textAlign: "center" , width: "100%", display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"50px" }}>
    <h1 className="entry__title" style={{   backgroundColor:"white",height:"120px",textAlign:"center"}}>
  {photo.topic}
    </h1>
    </div>
    <div className="entry__meta" style={{display:"flex",flexDirection:"row",justifyContent: "center", alignItems: "start" ,marginTop:"20px"}}>
      <div className="entry__meta-author" style={{marginRight:"20px"}}>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" >
          <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"></path>
        </svg>
        <a href="#" style={{textDecoration:"none" ,color:"black"}}>Naruto Uzumaki</a>
      </div>
      <div className="entry__meta-date" style={{marginRight:"20px"}}>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"></circle>
          <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"></path>
        </svg>
        August 15, 2021
      </div>
      <div className="entry__meta-cat">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"></path>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"></path>
        </svg>
        <span className="cat-links">
          <a href="#0" style={{textDecoration:"none" ,color:"black"}}>Inspiration</a>
          <a href="#0" style={{textDecoration:"none" ,color:"black"}}>,Design</a>
        </span>
      </div>
    </div>
      
    <div className="entry__media"  style={{textAlign:"center" ,marginTop:"40px"}} >
                            
                                  
                            <img src={photo.img} alt="" style={{height:"60%" ,width :"60%"}}/>
              </div>
              <div className="entry__media"  style={{textAlign:"center" ,height:"301px"}} >
                            
                                  
                            <p  style={{width:"60em" ,margin:"auto" ,height:"10px",lineHeight:"3",marginTop:"80px"}} >
                            {photo.title}
                            </p>
              </div>
              <div style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
  <div style={{ display: "flex", alignItems: "center" ,margin:"auto" ,width:"70%" ,paddingBlock:"30px",borderBlock:".1px solid grey"}}>
    
    <img  src="https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg" 
    alt="Example" className="rounded-image" />
    <div style={{ marginLeft: "20px", textAlign: "center" }}>
    <h3 style={{textAlign:"left"}}>
    Naruto Uzumaki </h3>
      <div className="entry__meta">
       
      
        <div className="entry__meta-cat">
       
          <span className="cat-links" style={{textAlign:"left"}}>
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue laboris in sit minim cupidatat ut dolor voluptate enim veniam consequat occaecat. 
          </span>
        </div>
      </div>
    </div>
  </div>


</div>
{/* <div style={{  marginTop: "5em", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",borderBlock:"1px solid grey", paddingTop: "10px" ,paddingBlock:"50px"}}>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,borderRight:".2px solid black" }}>
  <div style={{ marginRight: "20px", textAlign: "center" }}>
      <h6  style={{textAlign:"left"}}>Prev  </h6>
    <h5 style={{textAlign:"left"}}>Prev The Pomodoro Technique Really Works.  </h5>
     
    </div>
   
  </div>
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div style={{ marginRight: "20px", textAlign: "center"  ,paddingLeft:"20px"}}>
      <h6  style={{textAlign:"left"}}>Next</h6>
    <h5 style={{textAlign:"left"}}> How Imagery Drives User Experience. </h5>
     
    </div>
   
  </div>
</div> */}
<div style={{padding:"40px",fontSize:"20px" ,fontWeight:"bold",textAlign:"center"}}> 5 Comments</div>

<CommentSection style={{marginTop:"20px"}}  />
<div className="form-container w-50 " style={{margin:"auto", marginBottom:"100px"}}>
      {submitted ? (
        <h1>405 Not Allowed</h1>
      ) : (
        <div style={{border:"none"}}>
          <h2 style={{textAlign:"center"}}>Add Comment</h2>
          <p style={{textAlign:"center"}}>Your email address will not be published.</p>
          <form onSubmit={handleSubmit} style={{textAlign:"center"}}>
            <div className="form-group" style={{width:"100%"}}>
              <input type="text" placeholder="Your Name"  style={{width:"50%",display:"inline-block", marginRight:"0px"}}/>
              <input type="email" placeholder="Your Email" style={{width:"50%"}} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" style={{width:"100%",display:"inline-block", marginTop:"20px"}}/>
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" style={{width:"100%",display:"inline-block", marginTop:"20px"}}></textarea>
            </div>
              <Link to='/error' className='text-decoration-none'>
            <button type="submit" style={{width:"100%",display:"inline-block", marginTop:"20px"}}>Add Comment</button>
            </Link>
          </form>
        </div>
      )}
    </div>
    </div>
    
   
    );
}
export default Info ;