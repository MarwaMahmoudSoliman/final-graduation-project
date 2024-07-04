import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';
import { FaGlobe, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import blogheader from '../../utils/images/blogheader.png';


function Contact() {
  return (
    <div className='contact-page'>
        <div className='blog-page'>
        <div className="about-us-container">
      <div className="about-us-content">
        <h1>Contact Us</h1>
        <p className="breadcrumb">Home {'>'} Contact Us</p>
      </div>
      <div className="about-us-image">
        <img src={blogheader} alt="Books" />
      </div>
    </div>
    </div>

        <div className="contact-section">
      <div className="contact-info">
        <div className="info-card">
          <FaGlobe className="info-icon globe-icon" />
          <h4>Our Website</h4>
          <p>www.eduvibe.com</p>
          <p>www.wpvive.com</p>
        </div>
        <div className="info-card">
          <FaPhoneAlt className="info-icon phone-icon" />
          <h4>Call Us On</h4>
          <p>+2763 (388) 2930</p>
          <p>+4875 (356) 2568</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon envelope-icon" />
          <h4>Email Us</h4>
          <p>eduvibe@mail.com</p>
          <p>wpvive@mail.com</p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon map-icon" />
          <h4>Our Location</h4>
          <p>486 Normana Avenue</p>
          <p>Morningtide, 4223</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="tel" name="phone" placeholder="Phone" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Submit Now ➜</button>
        </form>
      </div>
    </div>


        {/* <div className='bg-light text-dark p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>London</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Manchester</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Liverpool</h3>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Contact;