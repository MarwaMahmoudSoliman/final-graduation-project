import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import '../BlogInfo/Bloginfo'
import { Link, Routes, Route } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import { AiFillStar } from "react-icons/ai";
import './instructor.css';
import { IoCheckmarkOutline } from "react-icons/io5";
import '../../component/FaqAccordion/FaqAccordion';
import Accordion from 'react-bootstrap/Accordion';
import { FaStar } from "react-icons/fa";
import blogheader from '../../utils/images/blogheader.png';
                import women from '../../utils/images/women.png';

const Products = [
  {
    id:1,
    img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/06-260x160.jpg" ,
    title: "How to Market Yourself as Coach or Consultant Market",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    type:"Development",
    newPrice: "200",
    company: "Nike",
    color: "white",
    Updated: "Apr 30, 2024",
    category:" Development",
    video:"https://www.youtube.com/embed/zfx5JN2wZQU?autoplay=0&amp;controls=0&amp;disablekb=1&amp;playsinline=1&amp;cc_load_policy=0&amp;cc_lang_pref=auto&amp;widget_referrer=https%3A%2F%2Fstudyhub.themewant.com%2Fcourses%2Fhow-to-market-yourself-as-coach-or-consultant-market%2F&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;customControls=true&amp;noCookie=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fstudyhub.themewant.com&amp;widgetid=1"
  },
  {
    id:2,
    img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/05-260x160.jpg" ,
    title: "Complete Guitar Lessons System Beginner to Advanced",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    type:"Accounting",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "red",
 Updated:" May 07, 2024",

    category: "Accounting, Design & Art, Music",
  },

  {
    id:3,
    img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/04-260x160.jpg",
    title: "User Experience The Ultimate Guide to Usability and UX",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    type:"Business",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Nike",
    color: "green",
    category: "	Business, Design & Art",
    Updated:" May 07, 2024"
  },
  {
    id:4,
    img: "https://studyhub.themewant.com/wp-content/uploads/2022/01/03-260x160.jpg" ,
    title: "100 Days Of Code – 2023 Web Development Bootcamp",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    type:"Development",
    prevPrice: "$140,00",
    newPrice: "200",
    company: "Adidas",
    color: "black",
    category: "	Development",
    Updated: "Apr 30, 2024"
  },
 

 
];



//-----
const instructors= [
  {
      id: 1,
      img: "https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg" ,
      title: 'Dana White',
      description: 'UI/UX Exparet',

  },
  {
      id: 2,
      img: "https://studyhub.themewant.com/wp-content/uploads/2024/05/09.jpg" ,
      title: 'Elizabeth Olsen',
      description: ' Assistant Teacher'
  },

  
];

const Instructor = () => {
  
  const { id } = useParams();
  const  instructor = instructors.find( instructor =>  instructor.id === parseInt(id));

  if (! instructor) {
    return <div>  instructor not found</div>;
  }
  return (
    <div className='container   ' >
<div className="row">
<div style={{marginTop:"90px", backgroundColor: "blueviolet"}} className='col-lg-12 col-md-6 d-flex px-4 justify-content-between align-items-end mt-5 div-img'>
    <div className='d-flex align-items-end'>
       {/* //
       <div class="profile-pic" style="background-image:url(https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-45-1.jpg)"></div>
        */}
        <img src={instructor.img} className='rounded-circle img-fluid' style={{ width: "150px", height: "150px", objectFit: "cover", marginBottom:"-50px",border:"10px solid white"}} alt="Blog Image" />
        <div className='d-flex flex-column' style={{marginLeft:"20px"}}>
            <h3>{instructor.title}</h3>
            <span style={{fontFamily:"fantasy", fontSize:"20px", fontWeight:"300"}}>8 Courses • 31 Students</span>
        </div>
    </div>
    <div className="rating para" style={{textAlign: 'right'}}>
        <span style={{color:"white"}}>4.50</span>
        {[...Array(5)].map((_, index) => (
            <span key={index} style={{color:"orange"}}>&#9733;</span>
        ))}
        <br/>
        <span>Digital Marketing Instructor</span>
    </div>
</div>

        <div className='col-lg-9 d-flex flex-column justify-content-center mt-3 px-3 border border-secondary' style={{marginLeft:"230px", borderRadius:"5px", height:"90em",width:"57rem" ,marginBottom:"20px"}} >
          <h2 className='mb-5'>Biography</h2>
          <p >As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.</p>
          
<div className='grid-container' >

      {Products.map((Product) => (
        <section key={Product.id} className="card" style={{ width: "20em" }}>
          <img
            src={Product.img}
            alt={Product.title}
            className="card-img shadow-effect-hover"
          />
            <span style={{ color: "purple", padding: "10px" }} className="dev">{Product.type}</span>

          <div className="outer-div">
            <div className="inner-div1">
              <BsFillBagFill />

              <span> 4 Lessons</span>
            </div>
            <div className="inner-div">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <span> 1 student</span>
            </div>
          </div>
          <div className="card-details">
            <h3 className="card-title">{Product.title}</h3>
            <section className="card-reviews">
              <FaStar style={{color:"orange"}} /><FaStar style={{color:"orange"}}  /><FaStar  style={{color:"orange"}}/><FaStar style={{color:"orange"}}/><FaStar style={{color:"orange"}} />
            </section>
            <section className="card-price">
              <div className="price">
                <del>{Product.prevPrice}</del> {Product.newPrice}
              </div>
            </section>
          </div>
        </section>
      ))}
   
     
        
  </div>
  <div className='d-flex flex-row links'>
           <Link>
           <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  class="bi bi-facebook" viewBox="0 0 16 16" style={{marginLeft:"30px"}}>
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </li>
                 </Link>
               <Link to="/contact">
<li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  class="bi bi-tiktok" viewBox="0 0 16 16" style={{marginLeft:"30px"}}>
                       <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                     </svg>
                   </li>
                 </Link>
                 <Link to="/contact">
                   <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  class="bi bi-youtube" viewBox="0 0 16 16" style={{marginLeft:"30px"}}>
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                 </li>
                   </Link>
                 <Link to="/contact">
                   <li>
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"  class="bi bi-instagram" viewBox="0 0 16 16" style={{marginLeft:"30px"}}>
                       <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                   </li>
                </Link>
               
               
        </div>
        </div>
        <div className='py-5' style={{ background: "#573ede" ,position: 'relative' }}>
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
    </div>
  );
}

export default Instructor;