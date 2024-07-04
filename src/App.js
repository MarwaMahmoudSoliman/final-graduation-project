import './App.css';
import React from 'react';
import { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container ,Dropdown } from 'react-bootstrap';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses'
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Login from "./pages/Login/Login";
import SignUp from './pages/signUp/SignUp';
import Contact from './pages/Contact/Contact';
import Bloginfo from './pages/BlogInfo/Bloginfo';
import InfoCourses from './pages/InfoCourses/InfoCourses'
import Details from './pages/Details/coursedetail'
import Dash from './pages/Dashboard/Dash';
import Topic from './pages/Posts/Topic';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Instructors from './pages/instructors/instructors';
import Instructor from './pages/instructor/Instructor';
import Info from './pages/Info/Info';
import Credit from './pages/CaridetCard/Credit';




//---------------

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import DashRedirect from './DashRedirect';
import Pricing from './pages/Pircing/Pricing';

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

  


function App() {

  

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    // Nav Bar
    <div >
        <Navbar expand="lg" className="position-sticky w-100" style={{ background: "transparent" ,height:"60px" }}>
        <Container>
        <Navbar.Brand>
        <Nav.Link href="/" className="text-uppercase" style={{fontSize:"20px", marginLeft:"-15px"}}>Think Tank</Nav.Link>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-center w-100">
        <Nav.Link href="/" className="text-uppercase">Home</Nav.Link>
        <Nav.Link href="/about" className="text-uppercase">About us</Nav.Link>
        <Nav.Link href="/post" className="text-uppercase">Posts</Nav.Link>
        <Nav className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle name='Page' id="dropdown-basic" as="a" className="dropdown-toggle text-uppercase">
              Pages
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/courses" className="text-uppercase">Courses</Dropdown.Item>
              <Dropdown.Item href="/dash" className="text-uppercase">Dashboard</Dropdown.Item>
              <Dropdown.Item href="/blog" className="text-uppercase">Blog</Dropdown.Item>
              <Dropdown.Item href="/instructors" className="text-uppercase">Instructors</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav.Link href="/contact" className="text-uppercase">Get In Touch</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
        <Nav.Link href="/search" className="text-uppercase">
          <i class="fas fa-search"></i>
        </Nav.Link>
        <Nav.Link href="/cart" className="text-uppercase position-relative">
        <i className="fas fa-shopping-cart mx-2"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
        </span>
        </Nav.Link>
        <Link to="/login" className="btn btn-outline-primary mx-2" style={{background:"white" ,color:"black" , height:"40px", width:"70px"}}>Login</Link>
        <Link to="/signUp" className="btn btn-primary p-2" style={{background:"#543cdc",height:"40px", width:"80px"}}>Register</Link>
        </div>
        </Navbar.Collapse>
        </Container>
        </Navbar>






        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path="course/:id" element={<InfoCourses />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail' element={< Details />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/post' element={<Topic />} />
        {/* <Route path='/dash' element={<Dash  />} /> */}
        <Route path="dash" element={<DashRedirect />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path="blogs/:id" element={<Bloginfo />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/credit' element={<Credit />} />
        <Route path='/Instructors' element={<Instructors />} />
        <Route path='/Instructor/:id' element={<Instructor />} />
        <Route path="blogs/:id" element={<Bloginfo />} />
        <Route path='/posts/:id' element={<Info/>} />
        </Routes>

       



        





{/* Footer */}
        <footer className="footer" style={{ borderTop: "1px solid #EAEAEA" }} >
  <div className="container" >
    <div className="row">
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h4>Think Tank</h4>
        <p>
          We are passionate education dedicated to providing high-quality resources learners all backgrounds.
        </p>
        <ul className="list-unstyled d-flex" >
          <li ><a href="#!"><i className="bi bi-facebook"></i></a></li>
          <li><a href="#!"><i className="bi bi-instagram"></i></a></li>
          <li><a href="#!"><i className="bi bi-linkedin"></i></a></li>
          <li><a href="#!"><i className="bi bi-pinterest"></i></a></li>
          <li><a href="#!"><i className="bi bi-youtube"></i></a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-6">
        <h5 className="text-uppercase">Useful Links</h5>
        <ul className="list-unstyled mb-5">
          <li><a href="/" className="text-decoration-none">Home</a></li>
          <li><a href="/courses" className="text-decoration-none">Courses</a></li>
          <li><a href="/blog" className="text-decoration-none">Blogs</a></li>
          <li><a href="/about" className="text-decoration-none">About Us</a></li>
          <li><a href="/post" className="text-decoration-none">Posts</a></li>
          <li><a href="/contact" className="text-decoration-none">Contact Us</a></li>
          
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0" >
        <h5 className="text-uppercase">Explore</h5>
        <ul className="list-unstyled" style={{color:"#6c63ff"}}>
          <li><a href="/login" className="text-decoration-none">Log In</a></li>
          <li><a href="/signUp" className="text-decoration-none">Sign Up</a></li>
          <li><a href="/post" className="text-decoration-none">Posts</a></li>
          <li><a href="#!" className="text-decoration-none">Lesson Details</a></li>
          <li><a href="/Instructors" className="text-decoration-none">Instructor</a></li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase">Newsletter</h5>
        <p>Subscribe Our newsletter get update our new course</p>
        <form>
        <div className="input-group" >
                <input type="email" className="form-control" placeholder="Enter Your Email" style={{ borderRadius: "6px" ,height:"40px"}} />
                  <button className="btn btn-primary" type="button" style={{ backgroundColor: "#6C63FF", color: "#FFF", borderRadius: "10px 0 10px 0",height:"38px", marginLeft:"2px" }}>Subscribe</button>
              </div>
          <div className="form-check mt-2">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">I agree to the terms of use and privacy policy.</label>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="footer-bottom text-center py-3" style={{ borderTop: "1px solid #EAEAEA" }}>
    <p>© 2024 All Rights Reserved by Think Tank</p>
  </div>
  </footer>
    </div>
  );
}

export default App;