import React, { useState, useRef } from 'react';
import img from '../../utils/images/IMG-20240622-WA0005-removebg-preview.png';
import './SignUp.css';
import blogheader from '../../utils/images/blogheader.png';

import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [agreeToOffers, setAgreeToOffers] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    let navigate = useNavigate()

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignUp = (e) => {
        e.preventDefault();
        
        if (password === repassword) {
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setTimeout(() => {
                navigate('/login');
              }, 1000);
        } else {
            setPasswordsMatch(false);

        }
    };

    return (
        <div className="container">
            <div className='log-page'>
        <div className="log-container">
      <div className="log-content">
        <h1>Sign Up</h1>
        <p className="breadcrumb">Home {'>'} Sign UP </p>
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
                    <form onSubmit={handleSignUp}>
                        <h1 className='text-center'>Sign up and start learning</h1>
                        <input 
                            type="text" 
                            id='name' 
                            className='d-block w-100 mt-4' 
                            placeholder='Full name' 
                        />
                        <input 
                            type="email" 
                            id='email' 
                            className='d-block w-100 mt-4' 
                            placeholder='Email' 
                            ref={emailRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            id='password' 
                            className='d-block w-100 mt-4' 
                            placeholder='Password' 
                            ref={passwordRef}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            id='repassword' 
                            className='d-block w-100 mt-4' 
                            placeholder='Confirm Password' 
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                         {!passwordsMatch && (
                            <p className="text-black mt-2 rounded-2 text-center bg-danger">Passwords do not match!</p>
                        )} 
                        <hr /> <hr /> <hr /> <hr />
                        <div className='d-flex ms-3'>
                            <input 
                                type='checkbox' 
                                className='checkbox pt-5 me-1' 
                                checked={agreeToOffers}
                                onChange={(e) => setAgreeToOffers(e.target.checked)}
                            /> 
                            <p className='d-inline'>
                                Send me special offers, personalized recommendations, and learning tips.
                            </p>
                        </div>
                        <button className='w-100 mb-3' type='submit'>Sign Up</button>
                        <p className='ms-5'>
                            By signing up, you agree to our <span className='logwieam'>Terms of Use</span> and <span className='logwieam'>Privacy Policy</span>
                        </p>
                        <h5 className='ms-5 text-center'>
                            Already have an account? <Link className='Link' to={'/login'}>Log in</Link>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
}
