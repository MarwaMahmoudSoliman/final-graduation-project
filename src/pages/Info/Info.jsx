import React from 'react'
import './Info.css'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CommentSection from '../../components/Comments';
import CommentSec from '../../components/Addcomments';
import blogheader from '../../utils/images/blogheader.png';
import women from '../../utils/images/women.png';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript,mdiNodejs,mdiReact, mdiSync, mdiLanguagePhp,  mdiCodeBraces, mdiProjectorScreen, mdiDatabase } from '@mdi/js';
import Icon from '@mdi/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTranslationContext } from '../../Context/TranslationContext';



  


const photos = [
  { id: 1, topic: "HTML", title: 'Mastering HTML: Structure and Semantics for Web Development', icon: mdiLanguageHtml5 },
  { id: 2, topic: "CSS", title: 'Styling the Web: Advanced CSS Techniques and Best Practices CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of a web page ', icon: mdiLanguageCss3 },
  { id: 3, topic: "JavaScript", title: 'JavaScript Essentials: From Basics to Advanced Programming', icon: mdiLanguageJavascript },
  { id: 4, topic: "React", title: 'Building Dynamic UIs with React: A Comprehensive Guide', icon: mdiReact },
  { id: 5, topic: "Redux", title: 'State Management Made Easy: Mastering Redux CSS, or Cascading Style Sheets, is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of a web page', icon: mdiSync },
  { id: 6, topic: "PHP", title: 'PHP for Web Development: From Fundamentals to Advanced Concepts', icon: mdiLanguagePhp },
  { id: 7, topic: "Node.js", title: 'Server-Side JavaScript: Building Scalable Applications with Node.js', icon: mdiNodejs },
  { id: 8, topic: "TypeScript", title: 'TypeScript in Action: Adding Types to JavaScript for Robust Applications', icon: mdiCodeBraces },
  { id: 9, topic: "GraphQL", title: 'Querying APIs with GraphQL: A Modern Approach', icon: mdiProjectorScreen },
  { id: 10, topic: "MongoDB", title: 'NoSQL Databases: Mastering MongoDB for Modern Applications', icon: mdiDatabase }
];

function Info() {
  
  const { t } = useTranslation();
  const { language, changeLanguage } = useTranslationContext();
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

   
//             <div style={{ background:"white"}}>
//                <div className='blog-page'>
//         <div className="about-us-container">
//       <div className="about-us-content">
//         <h1>Info Post</h1>
//         <p className="breadcrumb">Home {'>'}Post {'>'} Info-Post</p>
//       </div>
//       <div className="about-us-image">
//         <img src={blogheader} alt="Books" />
//       </div>
//     </div>
//     </div>

//   <div style={{ textAlign: "center" , width: "100%", display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"50px" }}>
//     <h1 className="entry__title" style={{   backgroundColor:"white",height:"120px",textAlign:"center"}}>
//   {photo.topic}
//     </h1>
//     </div>
//     <div className="entry__meta" style={{display:"flex",flexDirection:"row",justifyContent: "center", alignItems: "start" ,marginTop:"20px"}}>
//       <div className="entry__meta-author" style={{marginRight:"20px"}}>
//         <svg width="24" height="24" fill="none" viewBox="0 0 24 24" >
//           <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"></path>
//         </svg>
//         <a href="#" style={{textDecoration:"none" ,color:"black"}}>Naruto Uzumaki</a>
//       </div>
//       <div className="entry__meta-date" style={{marginRight:"20px"}}>
//         <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//           <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"></circle>
//           <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"></path>
//         </svg>
//         August 15, 2021
//       </div>
//       <div className="entry__meta-cat">
//         <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"></path>
//           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"></path>
//         </svg>
//         <span className="cat-links">
//           <a href="#0" style={{textDecoration:"none" ,color:"black"}}>Inspiration</a>
//           <a href="#0" style={{textDecoration:"none" ,color:"black"}}>,Design</a>
//         </span>
//       </div>
//     </div>
      
//     <div className="entry__media"  style={{textAlign:"center" ,marginTop:"40px"}} >
                            
//     <Icon path={photo.icon} size={4} className="icon" />
//               </div>
//               <div className="entry__media"  style={{textAlign:"center" ,height:"301px"}} >
                            
                                  
//                             <p  style={{width:"60em" ,margin:"auto" ,height:"10px",lineHeight:"3",marginTop:"80px"}} >
//                             {photo.title}
//                             </p>
//               </div>
//               <div style={{  width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
//   <div style={{ display: "flex", alignItems: "center" ,margin:"auto" ,width:"70%" ,paddingBlock:"30px",borderBlock:".1px solid grey"}}>
// <img src="https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg" />
//     <div style={{ marginLeft: "20px", textAlign: "center" }}>
//     <h3 style={{textAlign:"left"}}>
//     Naruto Uzumaki </h3>
//       <div className="entry__meta">
       
      
//         <div className="entry__meta-cat">
       
//           <span className="cat-links" style={{textAlign:"left"}}>
//           {photo.title}
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>


// </div>
// {/* <div style={{  marginTop: "5em", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",borderBlock:"1px solid grey", paddingTop: "10px" ,paddingBlock:"50px"}}>
//   <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,borderRight:".2px solid black" }}>
//   <div style={{ marginRight: "20px", textAlign: "center" }}>
//       <h6  style={{textAlign:"left"}}>Prev  </h6>
//     <h5 style={{textAlign:"left"}}>Prev The Pomodoro Technique Really Works.  </h5>
     
//     </div>
   
//   </div>
//   <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//     <div style={{ marginRight: "20px", textAlign: "center"  ,paddingLeft:"20px"}}>
//       <h6  style={{textAlign:"left"}}>Next</h6>
//     <h5 style={{textAlign:"left"}}> How Imagery Drives User Experience. </h5>
     
//     </div>
   
//   </div>
// </div> */}
// <div style={{padding:"40px",fontSize:"20px" ,fontWeight:"bold",textAlign:"center"}}> 5 Comments</div>


//     <CommentSec/>
//     </div>
<div style={{ background: "white"}}>
<div className='blog-page'>
  <div className="about-us-container">
    <div className="about-us-content">
    <h1>{t('Info Post')}</h1>
      <p className="breadcrumb">
        {t('Home')} {'>'} {t('Post')} {'>'} {t('Info-Post')}
      </p>
    </div>
    <div className="about-us-image">
      <img src={blogheader} alt="Books" />
    </div>
  </div>
</div>
{/* 
<div style={{ textAlign: "center", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "50px" }}>
  <h1 className="entry__title" style={{ backgroundColor: "white", height: "120px", textAlign: "center" }}>
    {photo.topic}
  </h1>
</div> */}

<div style={{ textAlign: "center" , width: "100%", display: "flex", justifyContent: "center", alignItems: "center",paddingTop:"50px" }}>
    <h1 className="entry__title" style={{   backgroundColor:"white",height:"120px",textAlign:"center"}}>
  {t(photo.topic)}
    </h1>
    </div>

<div className="entry__meta" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "start", marginTop: "20px" }}>
  <div className="entry__meta-author" style={{ marginRight: "20px" }}>
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></circle>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"></path>
    </svg>
    <a href="#" style={{ textDecoration: "none", color: "black" }}>{t('Naruta Uzumaki')}</a>
  </div>
  <div className="entry__meta-date" style={{ marginRight: "20px" }}>
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.5"></circle>
      <path stroke="currentColor" strokeWidth="1.5" d="M12 8V12L14 14"></path>
    </svg>
    {t('August 15,2021')}
  </div>
  <div className="entry__meta-cat">
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"></path>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"></path>
    </svg>
    <span className="cat-links">
      <a href="#0" style={{ textDecoration: "none", color: "black" }}>{t('InsPiration')}</a>
      <a href="#0" style={{ textDecoration: "none", color: "black" }}>, {t('Design')}</a>
    </span>
  </div>
</div>

<div className="entry__media" style={{ textAlign: "center", marginTop: "40px" }}>
  <Icon path={photo.icon} size={4} className="icon" />
</div>

<div className="entry__media" style={{ textAlign: "center", height: "301px" }}>
  <p style={{ width: "60em", margin: "auto", height: "10px", lineHeight: "3", marginTop: "80px" }}>
  {t(photo.title)}
  </p>
</div>

<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
  <div style={{ display: "flex", alignItems: "center", margin: "auto", width: "70%", paddingBlock: "30px", borderBlock: ".1px solid grey" }}>
    <img src="https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg" />
    <div style={{ marginLeft: "20px", textAlign: "center" }}>
      <h3 style={{ textAlign: "left" }}>
        {t('Naruta Uzumaki')}
      </h3>
      <div className="entry__meta">
        <div className="entry__meta-cat">
          <span className="cat-links" style={{ textAlign: "left" }}>
            {t(photo.title)}
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
 <div style={{padding:"40px",fontSize:"20px" ,fontWeight:"bold",textAlign:"center"}}> {t('5 Comments')}</div>


     <CommentSec/>
     </div>

   
    );
}
export default Info ;