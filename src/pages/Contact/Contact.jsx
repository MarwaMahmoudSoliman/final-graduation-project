import React from 'react';
import './Contact.css';
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
          <form action="https://formspree.io/f/xjkbvojk" method="POST">
            <input type="text" name="name" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
            <input type="tel" name="phone" placeholder="Phone" />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your Message" rows="4"></textarea>
            <button type="submit">Submit Now ➜</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
