import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Certificate = () => {
    const [state, setState] = useState({
        name: '',
        course: '',
        date: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: state.name,
            course: state.course,
            date: state.date,
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Display the certificate
        alert("Certificate generated and sent!");
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Generate Certificate</h1>
            <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleInputChange}
                        required
                        style={{ margin: '10px', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Course:</label>
                    <input
                        type="text"
                        name="course"
                        value={state.course}
                        onChange={handleInputChange}
                        required
                        style={{ margin: '10px', padding: '5px' }}
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={state.date}
                        onChange={handleInputChange}
                        required
                        style={{ margin: '10px', padding: '5px' }}
                    />
                </div>
                <button type="submit" style={{ background: '#543cdc', color: '#f7f7f7', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                    Generate Certificate
                </button>
            </form>

            <div id="certificate" style={{ border: '2px solid #543cdc', padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
                <h2>Certificate of Completion</h2>
                <p>This is to certify that</p>
                <h3>{state.name}</h3>
                <p>has successfully completed the course</p>
                <h3>{state.course}</h3>
                <p>on</p>
                <h3>{state.date}</h3>
            </div>
        </div>
    );
};

export default Certificate;