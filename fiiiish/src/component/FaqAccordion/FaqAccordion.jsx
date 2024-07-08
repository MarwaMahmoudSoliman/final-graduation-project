import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-left text-capitalize mb-4' ><b>Frequently asked questions</b> </h2>
                <p className='text-center mb-4'>You can find answers to some of the most common questions about our platform.</p>
                <Accordion defaultActiveKey="" flush>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>What is React?</Accordion.Header>
                        <Accordion.Body>
                            React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>What is the Virtual DOM?</Accordion.Header>
                        <Accordion.Body>
                            The virtual DOM is a concept where a virtual representation of the real DOM is kept in memory and synced with the real DOM by a library such as ReactDOM. This process is called reconciliation. The virtual DOM allows React to perform updates efficiently.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>What are props in React?</Accordion.Header>
                        <Accordion.Body>
                            Props, short for properties, are read-only attributes in React that allow data to be passed from one component to another. Props are used to pass data and event handlers down to child components.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>What is a state in React?</Accordion.Header>
                        <Accordion.Body>
                            State is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user actions or system-generated events.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
  )
}

export default FaqAccordion;