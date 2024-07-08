import React, { useState } from 'react';
import img from '../../utils/images/IMG-20240622-WA0008-removebg-preview.png';
import { Link, useNavigate } from 'react-router-dom';
import blogheader from '../../utils/images/blogheader.png';
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accept, setAccept] = useState(true);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailLocal = localStorage.getItem('email');
    const passwordLocal = localStorage.getItem('password');

    if (email === emailLocal && password === passwordLocal) {
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      setAccept(false);
    }
  };

  return (
    
    <div className="container">
      <div className='log-page'>
        <div className="log-container">
      <div className="log-content">
        <h1>Log In</h1>
        <p className="breadcrumb">Home {'>'} Login </p>
      </div>
      <div className="log-image">
        <img src={blogheader} alt="Books" />
      </div>
    </div>
    </div>
      <div className="row m-5">
        <div className="col-md-6">
          <img src={img} alt="" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className='text-center'>Log in to continue your <br /> learning journey</h1>
            <input 
              type="email" 
              id='email' 
              className='d-block w-100 mt-4 mb-3' 
              placeholder='Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
              type="password" 
              id='password' 
              className='d-block w-100 mt-4 mb-3' 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {!accept && (
              <p className="text-black mt-2 rounded-2 text-center bg-danger">Email or Password do not match!</p>
            )}
            <button type="submit" className='w-100 mb-3'>
              <span className='logwieam'>
                <i className="fa-solid fa-envelope text-white"></i>
              </span> 
              Log in with email
            </button>
            <p className='options text-center'>Other log in options</p>
            <div className='icons text-center mb-4'>
              <i className='icon fa-brands fa-google p-4 fa-1x'></i>
              <i className='icon fa-brands fa-facebook p-4 fa-1x'></i>
              <i className='icon fa-brands fa-apple p-4 fa-1x'></i>
            </div>
            <div className='sign p-2'>
              <p className=' text-center pt-2 mb-2'>Don't have an account? <Link className='Link' to={'/signup'}>Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
