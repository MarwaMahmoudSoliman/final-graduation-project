                import React from 'react';
                import './instructors.css';
                import { Link } from 'react-router-dom';
                import { Card } from 'react-bootstrap';
                import blogheader from '../../utils/images/blogheader.png';
                import women from '../../utils/images/women.png';

                // import Blog1Img from '../../utils/images/blog1-img.jpg';
                // import Blog2Img from '../../utils/images/blog2-img.jpg';
                // import Blog3Img from '../../utils/images/blog3-img.jpg';
                // import Blog4Img from '../../utils/images/blog4-img.jpg';
                // import Blog5Img from '../../utils/images/blog5-img.jpg';
                // import Blog6Img from '../../utils/images/blog6-img.jpg';
                // import Blog7Img from '../../utils/images/blog7-img.jpg';
                // import Blog8Img from '../../utils/images/blog8-img.jpg';
                // import Blog9Img from '../../utils/images/blog9-img.jpg';
                import { useState ,useRef } from 'react';
                import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaShareAlt } from 'react-icons/fa';
                const instructors= [
                {
                id: 1,
                img: "https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg" ,
                title: 'Dana White',
                description: 'UI/UX Exparet'
                },
                {
                id: 2,
                img: "https://studyhub.themewant.com/wp-content/uploads/2024/05/09.jpg" ,
                title: 'Elizabeth Olsen',
                description: ' Assistant Teacher'
                },

                {
                id: 3,
                img:"https://studyhub.themewant.com/wp-content/uploads/2024/03/04.jpg" ,      // img :"https://studyhub.themewant.com/wp-content/uploads/2024/05/09.jpg" ,
                title: 'Jons Emon',
                description: 'Assistant Teacher '
                },
                {
                id: 4,
                img:"https://studyhub.themewant.com/wp-content/uploads/2024/05/06.jpg" ,
                title: 'Mahmud Sujons',
                description: 'Instructor  '
                },
                {
                id: 5,
                img:"https://studyhub.themewant.com/wp-content/uploads/2024/05/07.jpg",
                title: '	Masud Rana ',
                description: 'Instructor  '
                },
                {
                id: 2,
                img: "https://studyhub.themewant.com/wp-content/uploads/2024/05/09.jpg" ,
                title: 'Elizabeth Olsen',
                description: ' Assistant Teacher'
                },

                ];

                function Instructors() {
                const [hover, setHover] = useState(false);
                const [clickedIcon, setClickedIcon] = useState(null);

                const hoverTimeoutRef = useRef(null);

                const handleMouseEnter = () => {
                if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                }
                hoverTimeoutRef.current = setTimeout(() => {
                setHover(true);
                }, 500); 
                };

                const handleMouseLeave = () => {
                if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
                }
                hoverTimeoutRef.current = setTimeout(() => {
                setHover(false);
                }, 500); 
                };

                const handleClick = (icon) => {
                setClickedIcon(icon);
                };
                return (
                <div className='blog-page'>
                <div className='about-page' style={{background:"#f9f9f9"}}>
                <div className='blog-page'>
                <div className="about-us-container">
                <div className="about-us-content">
                <h1>Instructors</h1>
                <p className="breadcrumb">Home {'>'} Instructors</p>
                </div>
                <div className="about-us-image">
                <img src={blogheader} alt="Books" />
                </div>
                </div>
                </div>
                </div>

                <div className='bg-body-tertiary py-5'>
                <div className="container">
                <div className="row g-2">
                {instructors.map((instructor) => (
                <div key={instructor.id} className='col-md-6 col-lg-4 ' >
                <Link to={`/instructor/${instructor.id}`} className='text-decoration-none'>
                <div className='profile-card ' >
                <img
                src={instructor.img}
                alt='Dana White'
                className='profile-image'
                />

                <div
                className='share-icon'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <FaShareAlt size={32} style={{ backgroundColor: 'transparent' ,color:'#543cdc'}} />
                {hover && (
                <div className='social-icons' style={{color:'#543cdc'}}>
                <a href='https://facebook.com' onClick={() => handleClick('facebook')}>
                <FaFacebook
                size={32}
                style={{
                backgroundColor: 'transparent',
                transition: clickedIcon === 'facebook' ? 'transform 0.3s' : 'none',
                transform: clickedIcon === 'facebook' ? 'scale(1.2)' : 'none',
                }}
                />
                </a>
                <a href='https://twitter.com' onClick={() => handleClick('twitter')}>
                <FaTwitter
                size={32}
                style={{
                backgroundColor: 'transparent',
                transition: clickedIcon === 'twitter' ? 'transform 0.3s' : 'none',
                transform: clickedIcon === 'twitter' ? 'scale(1.2)' : 'none',
                }}
                />
                </a>
                <a href='https://youtube.com' onClick={() => handleClick('youtube')}>
                <FaYoutube
                size={32}
                style={{
                backgroundColor: 'transparent',
                transition: clickedIcon === 'youtube' ? 'transform 0.3s' : 'none',
                transform: clickedIcon === 'youtube' ? 'scale(1.2)' : 'none',
                }}
                />
                </a>
                <a href='https://instagram.com' onClick={() => handleClick('instagram')}>
                <FaInstagram
                size={32}
                style={{
                backgroundColor: 'transparent',
                transition: clickedIcon === 'instagram' ? 'transform 0.3s' : 'none',
                transform: clickedIcon === 'instagram' ? 'scale(1.2)' : 'none',
                }}
                />
                </a>
                </div>
                )}
                <div className='cards'>
                {clickedIcon === 'facebook' && <div className='card'>Facebook Card Content</div>}
                {clickedIcon === 'twitter' && <div className='card'>Twitter Card Content</div>}
                {clickedIcon === 'youtube' && <div className='card'>YouTube Card Content</div>}
                {clickedIcon === 'instagram' && <div className='card'>Instagram Card Content</div>}
                </div>
                </div>
                <div className='profile-details'>
                <h3 style={{color:"#573ede"}}>{instructor.title}</h3>
                <p>{instructor.description}</p>
                </div>
                </div>
                </Link>
                </div>
                ))}
                </div>

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

                )
                }

                export default  Instructors;