
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
                        <img src={blogheader} alt="Books" className="img-fluid" />
                    </div>
                </div>
            </div>

            <div className="row m-5">
                <div className="col-md-6">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSignUp}>
                        <h1 className='text-center'>Sign up and start learning</h1>
                        <input 
                            type="text" 
                            id='name' 
                            className='form-control mb-3' 
                            placeholder='Full name' 
                        />
                        <input 
                            type="email" 
                            id='email' 
                            className='form-control mb-3' 
                            placeholder='Email' 
                            ref={emailRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            id='password' 
                            className='form-control mb-3' 
                            placeholder='Password' 
                            ref={passwordRef}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            id='repassword' 
                            className='form-control mb-3' 
                            placeholder='Confirm Password' 
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                        />
                        {!passwordsMatch && (
                            <p className="text-black mt-2 rounded-2 text-center bg-danger">Passwords do not match!</p>
                        )} 
                        <hr />
                        <div className='form-check ms-3'>
                            <input 
                                type='checkbox' 
                                className='form-check-input pt-5 me-1' 
                                checked={agreeToOffers}
                                onChange={(e) => setAgreeToOffers(e.target.checked)}
                            /> 
                            <label className='form-check-label'>
                                Send me special offers, personalized recommendations, and learning tips.
                            </label>
                        </div>
                        <button className='btn btn-primary w-100 mb-3' type='submit'>Sign Up</button>
                        <p className='ms-3'>
                            By signing up, you agree to our <span className='logwieam'>Terms of Use</span> and <span className='logwieam'>Privacy Policy</span>
                        </p>
                        <h5 className='ms-3 text-center'>
                            Already have an account? <Link className='Link' to={'/login'}>Log in</Link>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
}
