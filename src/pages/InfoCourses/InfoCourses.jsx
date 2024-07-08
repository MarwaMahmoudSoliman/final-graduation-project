

import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../../db/data';
import { FaFacebookF, FaLinkedinIn, FaPlus, FaStar } from "react-icons/fa";
import { IoLogoTwitter, IoCheckmarkCircleOutline, IoCheckmarkOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { CiVideoOn } from "react-icons/ci";
import Accordion from 'react-bootstrap/Accordion';
import '../InfoCourses/Infocourses.css';
import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

import { BsFillBagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const InfoCourses = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');

  const [replyIndex, setReplyIndex] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { question: newQuestion, answer: 'To play the guitar, first get in position. Rest the guitar on your right leg. Then, place your right hand over the strings with your elbow out to the side.' }]);
      setNewQuestion('');
    }
  };


  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

 

  const handleReplyClick = (index) => {
    setReplyIndex(index);
    setReplyText('');
  };

  const handleReplyChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = (index) => {
    const updatedQuestions = questions.map((qa, i) => 
      i === index ? { ...qa, answer: replyText } : qa
    );
    setQuestions(updatedQuestions);
    setReplyIndex(null);
    setReplyText('');
  };
  const lectures = [
    { title: 'Rock The Street', duration: '21:08' },
    { title: 'Is an Online Financial Advisor Right for You?', duration: '12:21' },
    { title: 'What Does a Financial Advisor Do?', duration: '07:22' },
  ];

  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
        <div style={{   backgroundColor: "#6c63ff", height: "30em", padding: "20px" }}>
        <div style={{ marginTop: "150px" }}>
          <div style={{ marginLeft: "7px" }}>Home / Courses / {course.title}</div>
          <h2 style={{ marginTop: "40px", marginLeft: "-1px" }}>{course.title}</h2>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: "20px" }}>
            <div>
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} style={{ color: "orange" }} />
              ))}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
              style={{ marginLeft: '10px' }}
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
            <span style={{ marginLeft: '10px' }}>1 student</span>
            <span style={{ marginLeft: '10px' }}>Last Updated: {course.updated}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px', marginTop: "20px" }}>
            <img src={course.img} alt={course.title} style={{ borderRadius: "50%", height: "3em", width: "3em" }} />
            <span style={{ marginLeft: '10px' }}>By John Sina</span>
            <span style={{ marginLeft: '10px' }}>Categories: {course.category}</span>
          </div>
        </div>
        </div>
        <section style={{ height: "35em", padding: "60px" }}>
        <div className='col-lg-6' style={{ height: "30em", width: "72em" }}>
          <div className="video-container" style={{ height: "10em", width: "55em",marginLeft:"-20px" }}>
            <iframe
              src={course.video}
              frameBorder="0"
              style={{ height: "100%", width: "55em" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video"
            ></iframe>
          </div>
          <div>
            <h3 style={{ fontSize: "25px", marginTop: "70px", fontWeight: "bold", fontFamily: "fantasy" }}>About Course</h3>
            <p style={{width:"860px"}}>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, t</p>
            <span style={{ color: "grey", fontSize: "15px", fontWeight: "10px" }}> <FaPlus style={{ color: "grey", fontSize: "17px" }} /> Show More</span>
          </div>
          <div style={{ paddingBlock: "50px", paddingLeft: "25px", marginTop: "40px", border: ".1px solid grey" }}>
            <h3 style={{ fontSize: "25px", fontWeight: "bold", fontFamily: "fantasy" }}>What Will You Learn?</h3>
            <div className='d-flex flex-row' style={{ marginTop: "30px", paddingBottom: "40px" }}>
              <div style={{ width: "25%", height: "20px", marginLeft: "5px" }}>
                <IoCheckmarkOutline />
                <span>Learn New Things</span><br /><br />
                <IoCheckmarkOutline /><span>Skills Update</span>
              </div>
              <div style={{ width: "40%", height: "20px", marginLeft: "5px" }}>
                <IoCheckmarkOutline />
                <span>Self Development</span>
                <br /><br />
                <IoCheckmarkOutline />
                <span>Prepared Yourself</span>
              </div>
            </div>
          </div>
          <div className=' py-4'>
            <h3 style={{ fontSize: "25px", fontWeight: "bold", marginBlock: "30px", fontFamily: "fantasy" }}>Course Content</h3>
          </div>
          <div className='faq-section' style={{ marginLeft: "-30em" }}>
            <div className='container d-flex flex-column align-items-center' style={{ width: "100px" }}>
              <Accordion defaultActiveKey="" flush style={{ width: "700px" ,marginBottom:"20px" }}>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className="lecture-title" >Rock The Street</div>
                    <div className="lecture-counter">
                      <span>3 Lectures</span>
                      <span>. 40h:51min</span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className="course-content-list">
                      {lectures.map((lecture, index) => (
                        <li key={index} className="course-content-list-item hi">
                          <div className="d-flex align-center">
                            <span className="course-content-list-item-icon icon-brand-youtube-bold mr-12"></span>
                            <h5 className="course-content-list-item-title">{lecture.title}</h5>
                          </div>
                          <div>
                            <span className="course-content-list-item-duration fs-7 color-muted">{lecture.duration}</span>
                            <span className="course-content-list-item-status icon-eye-line color-muted ml-20" aria-hidden="true"></span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div style={styles.card} >
        <img 
         src="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-45-1-205x205.jpg" alt="Jhon Sina"
       
        style={styles.image}
      />
      <div style={styles.info}>
        <h2 style={styles.name}>Jhon Sina</h2>
        <h4 style={styles.title}>Digital Marketing Instructor</h4>
        <div style={styles.rating}>
          <span style={styles.ratingValue} >4.50</span>
          <span style={styles.stars}>★★★★★</span>
        </div>
        <div style={styles.stats}>
          <span>{`👥 29 Students`}</span>
          <span>{`🎥 8 Courses`}</span>
        </div>
        <p style={styles.description}>
          As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.
        </p>
        <div style={styles.social}>
          <a href="#" style={styles.socialLink}>🔗</a>
          <a href="#" style={styles.socialLink}>🔗</a>
          <a href="#" style={styles.socialLink}>🔗</a>
          <a href="#" style={styles.socialLink}>🔗</a>
        </div>
      </div>
      <div>


        </div>
            </div>
            
            <div>
              <h3 style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
                fontWeight: "bold",
                marginTop: "20px"
              }}>
                Student Ratings & Reviews
              </h3>
              <img
                src="https://studyhub.themewant.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                alt="No Review Yet"
                width="85%"
              />
              <div className="tutor-fs-6 tutor-color-secondary text-center">
                No Review Yet
              </div>

              {/* <h3 htmlFor="w3review" style={{
                fontSize: "20px",
                fontFamily: "fantasy",
                color: "black",
                fontWeight: "bold",
                marginTop: "20px"
              }}>
                Question & Answer
              </h3>

              <textarea
                id="w3review"
                name="w3review"
                rows="3"
                cols="90"
                placeholder="Do you have any questions?"
                style={{ paddingTop: "10px", paddingLeft: "20px" }}
              />

              <div className='hoveru' style={{ marginTop: "20px" }}>
                <span className="btn_text">
                  Ask Question
                </span>
              </div> */}
              <h3 htmlFor="w3review" style={{
        fontSize: "20px",
        fontFamily: "fantasy",
        color: "black",
        fontWeight: "bold",
        marginTop: "20px"
      }}>
        Question & Answer
      </h3>

      <textarea
        id="w3review"
        name="w3review"
        rows="3"
        cols="90"
        value={newQuestion}
        onChange={handleQuestionChange}
        placeholder="Do you have any questions?"
        style={{ paddingTop: "10px", paddingLeft: "20px" }}
      />

      <div className='hoveru' style={{ marginTop: "20px" }}>
        <span className="btn_text" onClick={handleQuestionSubmit}>
          Ask Question
        </span>
      </div>

      <div style={{ marginTop: "20px" }}>
        {questions.map((qa, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <strong>Q:</strong> {qa.question}
            <br />
            <strong>A:</strong> {qa.answer}
          </div>
        ))}
      </div>

              <div className="tutor-qna-chat tutor-qna-left" style={{ marginTop: "120px" }}>
                <div className='d-flex flex-row justify-content-start' style={{ width: "20px" }}>
                  <div style={{ width: "30%" }}>
                    <img
                      src="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-45-1.jpg"
                      style={{ borderRadius: "50%", height: "60px", width: "60px" }}
                      alt="User"
                    />
                  </div>

                  <div>
                    <div className="tutor-fs-6 tutor-fw-medium tutor-color-secondary" style={{ width: "12em", marginLeft: "80px" }}>
                      Jhon Sina
                    </div>
                    <div className="tutor-fs-7 tutor-color-muted" style={{ width: "12em", marginLeft: "80px" }}>
                      2 months ago
                    </div>
                  </div>
                </div>

                <div className="tutor-qna-text tutor-fs-7" style={{
                  backgroundColor: "#bfc7dd",
                  width: "30em",
                  marginTop: "20px",
                  padding: "20px",
                  borderRadius: "8px"
                }}>
                  How to play the Guitar
                  <br />
                  Course: Speaking Korean for Beginners
                </div>

                <div className="tutor-toggle-reply mt-5" style={{ textAlign: "right" }}>
                  <span>
                    <a style={{ textDecoration: "none", color: "blue" }} onClick={handleQuestionSubmit}>
                      Reply
                    </a>
                  </span>
                </div>
                <h3 htmlFor="w3review" style={{
        fontSize: "20px",
        fontFamily: "fantasy",
        color: "black",
        fontWeight: "bold",
        marginTop: "20px"
      }}>
        Question & Answer
      </h3>

      <textarea
        id="w3review"
        name="w3review"
        rows="3"
        cols="90"
        value={newQuestion}
        onChange={handleQuestionChange}
        placeholder="Do you have any questions?"
        style={{ paddingTop: "10px", paddingLeft: "20px" }}
      />

      <div className='hoveru' style={{ marginTop: "20px" }}>
        <span className="btn_text" onClick={handleQuestionSubmit}>
          Ask Question
        </span>
      </div>

                <div style={{ marginTop: "20px" }}>
        {questions.map((qa, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <strong>Q:</strong> {qa.question}
            <br />
            {qa.answer ? (
              <>
                <strong>A:</strong> {qa.answer}
              </>
            ) : (
              <div className="tutor-toggle-reply mt-5" style={{ textAlign: "right" }}>
                <span>
                  <a style={{ textDecoration: "none", color: "blue" }} onClick={() => handleReplyClick(index)}>
                    Reply
                  </a>
                </span>
              </div>
            )}
            {replyIndex === index && (
              <div style={{ marginTop: "10px" }}>
                <textarea
                  rows="3"
                  cols="70"
                  value={replyText}
                  onChange={handleReplyChange}
                  placeholder="Write your reply here"
                  style={{ paddingTop: "10px", paddingLeft: "20px" }}
                />
                <div className='hoveru' style={{ marginTop: "10px" }}>
                  <span className="btn_text" onClick={() => handleReplySubmit(index)}>
                    Submit Reply
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
              </div>

              <div className="tutor-qna-chat tutor-qna-left" style={{ marginTop: "120px" }}>
                <div className='d-flex flex-row justify-content-start' style={{ width: "20px" }}>
                  <div style={{ width: "30%" }}>
                    {/* <img
                      src="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-45-1.jpg"
                      style={{ borderRadius: "50%", height: "60px", width: "60px" }}
                      alt="User"
                    /> */}
                  </div>

                  <div>
                    {/* <div className="tutor-fs-6 tutor-fw-medium tutor-color-secondary" style={{ width: "12em", marginLeft: "80px" }}>
                      Jhon Sina
                    </div> */}
                    {/* <div className="tutor-fs-7 tutor-color-muted" style={{ width: "12em", marginLeft: "80px" }}>
                      2 months ago
                    </div> */}
                  </div>
                </div>
{/* 
                <div className="tutor-qna-text tutor-fs-7" style={{
                  backgroundColor: "#bfc7dd",
                  width: "30em",
                  marginTop: "20px",
                  padding: "20px",
                  borderRadius: "8px"
                }}>
                  How to play the Guitar
                  <br />
                  Course: Speaking Korean for Beginners
                </div> */}

                {/* <div className="tutor-toggle-reply mt-5" style={{ textAlign: "right" }}>
                  <span>
                    <a href="#" style={{ textDecoration: "none", color: "blue" }}>
                      Reply
                    </a>
                  </span>
                </div> */}
              </div>

              <div>
                <img
                  src="https://studyhub.themewant.com/wp-content/plugins/tutor/assets/images/emptystate.svg"
                  alt="No Data Available"
                  width="85%"
                />
              </div>
              <div className="tutor-fs-6 tutor-color-secondary text-center">
                No Data Available in this Section
              </div>
            </div> 
        </div>

 


{/* mmmmmmmmmmmmmmmmm */}


     
 <div className="col-lg-3" style={{ height:"28em" ,width:"28em",borderRadius:"2px",backgroundColor:"white",float:"right" ,marginLeft:"48em",marginTop:"-190em" ,padding:"30px 30px"}}> <div className="div">
  
 <div style={{clear:"both" }}>
 <div className='hoveru '>
 <span class="btn_text">
       Start Learning
        
       </span>
       </div>
       <div style={{marginTop:"30px"}} >
       <p style={{fontSize:"25px" ,fontWeight:"bold"}}>This course includes: </p>
       </div>
     <div>
 <svg xmlns="http://www.w3.org/2000/svg" style={{color:"grey"}} width="16" height="16" fill="currentColor" class="bi bi-bar-chart-steps" viewBox="0 0 16 16">
   <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z"/>
 </svg>
<span style={{marginLeft:"10px" ,fontSize:"20px ",color:"grey"}}>Level</span>
 <span style={{marginLeft:"13em" ,fontSize:"19px ",color:"grey"}}>Expert</span>
 </div>
 <hr style={{width:"100%"}}></hr>
 <div>
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
   <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
   <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
 </svg>
    
 <span style={{marginLeft:"10px" ,fontSize:"19px ",color:"grey"}}>Total Enrolled</span>
 <span style={{marginLeft:"8em" ,fontSize:"19px ",color:"grey"}}>0 Total</span>
 </div>
 <hr style={{width:"100%"}}></hr>
 <div className="d-flex align-items-start  ">
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
   <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
   <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
 </svg>
      <div className='w-40'>
 <span style={{marginLeft:"1px"  ,fontSize:"20px ",color:"grey"}}> Duration </span>
 </div>
 <div  style={{marginLeft:"46px",marginTop:"-1px"  ,width:"240px"}} >
 <span style={{marginLeft:"2em",marginTop:"-10px" ,fontSize:"19px ",color:"grey"}}> p 5 hours 35 minutes</span>

 </div>
</div>
<hr style={{width:"100%"}}></hr>


 <div className="d-flex align-items-start  ">
       <div >

   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
   <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
   <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
 </svg>
 <span style={{marginLeft:"1px"  ,fontSize:"20px ",color:"grey"}}> Last Updated <span style={{color:"white"}}>hhhhhhhhhhhhhh</span> </span>


 </div>
 <div  style={{marginLeft:"10px",marginTop:"1px"  ,width:"240px"}} >


 <span style={{marginLeft:"0px",marginTop:"5px" ,fontSize:"19px ",color:"grey"}}> Last Updated</span>
 </div>
 
 </div>
 <hr style={{width:"100%" , marginTop:"-20px"}}></hr>
 </div>
 
 </div>
 <div style={{width:"450px" ,marginLeft:".1px" ,height:"900px" ,border:".1px solid grey" ,borderRadius:"5px"}} className='d-flex flex-column align-items-center'>
 <h3 style={{fontSize:"25px" ,fontWeight:"bold" ,  lineHeight: "56px",paddingTop:"20px",marginLeft:"-200px"}}>A course by </h3>

        <div style={{height:"300px" ,margintop:"100px",marginLeft:"-2px",paddingTop:"40px"  ,width:"350px" ,paddingBlock:"10px" }} >
      
       
        <img src="https://studyhub.themewant.com/wp-content/uploads/2024/05/frame-45-1-205x205.jpg" alt="Jhon Sina"  style={{width:"3em" ,borderRadius:"50%",height:"3em"}} ></img> <span> John Sina</span>
         </div>

      <div style={{height:"1px" ,backgroundColor:"grey" ,width:"250px"}}></div>
    
      <h3 style={{fontSize:"25px" ,fontWeight:"bold" ,  lineHeight: "56px",paddingTop:"20px",marginLeft:"-160px"}}>Requirements  </h3>
   <div className='d-flex flex-column align-items-start justify-content-start text-left'  style={{ height:"200px",marginLeft:"-170px"}}>
  <div style={{marginBottom:"20px" ,marginTop:"10px"}}><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
   <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg> Basic Programming</span></div>
  <div style={{marginBottom:"20px"}}>
 <span>
  

 <IoCheckmarkCircleOutline style={{color:"blue"}} /> Daily Update</span> </div>

 <div><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
   <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
 </svg> Routine Study</span></div>
  <div style={{marginBottom:"20px" ,marginTop:"10px"}}><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
   <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
 </svg> Regular Join Class</span></div>
 </div>

 <div style={{height:"1px" ,backgroundColor:"grey" ,width:"300px"}}></div>
 <h3 style={{fontSize:"25px" ,fontWeight:"bold" ,  lineHeight: "56px",paddingTop:"20px",marginLeft:"-200px"}}>Share </h3>

<div style={{height:"300px" ,margintop:"100px",marginLeft:"-2px",paddingTop:"130px"  ,width:"260px" ,paddingBlock:"10px"  ,borderBottom:"1px solid grey" }} >
   <div >
   <FaFacebookF  style={{fontSize:"25px"}} />

   <IoLogoTwitter style={{fontSize:"25px" ,marginLeft:"10px"}}  />
 <FaLinkedinIn  style={{fontSize:"25px" ,marginLeft:"10px"}}/>
 </div>
 </div>

 <h3 style={{fontSize:"25px" ,fontWeight:"bold" ,  lineHeight: "56px",paddingTop:"20px",marginLeft:"-160px"}}>Audience   </h3>
   <div className='d-flex flex-column align-items-start justify-content-start text-left'  style={{ height:"200px",marginLeft:"-170px"}}>
  <div style={{marginBottom:"20px" ,marginTop:"10px"}}><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
 </svg> Technical People</span></div>
  <div style={{marginBottom:"20px"}}>
 <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
   <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
   <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
 </svg> Engineering Students </span> </div> 


 <div style={{marginBottom:"20px" ,marginTop:"10px"}}><span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
 </svg>Programming Lover</span></div>

 </div>

    </div>
      
     
     
      </div> 




{/* mmmm */}
  
 
{/* </div> */}

</section>
<div >
<div style={{ marginTop:"170em" ,width:"90em" }}>
  <h3 style={{marginRight:"30px" ,paddingLeft:"40px"}}>
More Courses by studyhub-admin
<Link to="/courses" style={{color:"blueviolet" ,fontSize:"20px",textDecoration:"none" }}> &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Courses<FaArrowRight /></Link> </h3>


</div>
<div className='d-flex flex-row justify-content-around' style={{marginTop:"5em" ,width:"100%"}}>
 
        

        <section className="card" style={{ width: "25em"  }}>
          
           <img  src="https://studyhub.themewant.com/wp-content/uploads/2022/01/07-260x160.jpg"   className="card-img shadow-effect-hover" />
          
               <div className="outer-div">
             <div className="inner-div1">
              <BsFillBagFill />&nbsp;
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
          
              <h3 className="card-title">
    
    
    
    How to Run truly Productive in Meetings – and add value</h3>
          
            
            <section className="card-reviews">
            <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/>
            
            </section>
            <section className="card-price">
              <div className="price">
                <del>4.00 </del> Free
              </div>
            </section>
          </div>
        </section>
        
        <section className="card" style={{ width: "25em"  }}>
          
           <img  src="https://studyhub.themewant.com/wp-content/uploads/2022/01/06-260x160.jpg"   className="card-img shadow-effect-hover" />
          
               <div className="outer-div">
             <div className="inner-div1">
              <BsFillBagFill />&nbsp;
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
          
              <h3 className="card-title">
    
    
    
    How to Run truly Productive in Meetings – and add value</h3>
          
            
            <section className="card-reviews">
            <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/>
            
            </section>
            <section className="card-price">
              <div className="price">
                <del>5.00 </del> Free
              </div>
            </section>
          </div>
        </section>
        <section className="card" style={{ width: "25rem"  }}>
          
           <img  src="https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg"   className="card-img shadow-effect-hover" />
          
               <div className="outer-div">
             <div className="inner-div1">
              <BsFillBagFill /> &nbsp;
              <span> 4 Lessons</span>
             </div>
             <div className="inner-div">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fillRule="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <span> 1 student</span>
            </div>
          </div>
          <div className="card-details">
          
              <h3 className="card-title">
    
    
    
    How to Run truly Productive in Meetings – and add value</h3>
          
            
            <section className="card-reviews " style={{textAlign:"center"}} >
            <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/> <FaStar style={{color:"orange"}}/>
            
            </section>
            <section className="card-price">
              <div className="price">
                <del>5.00 </del> Free
              </div>
            </section>
          </div>
        </section>
      
      
</div>
</div>
{/* <div className='container  '>
  <div className='row '>
    <div className="col-lg-12 gace-img pt-1 d-flex align-items-start " style={{backgroundColor:"blue"}}>
    <img src="https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.svg" alt="" />
    
  <div style={{marginTop:"125px" ,width:"20px" }}><img   src="https://studyhub.themewant.com/wp-content/uploads/2024/03/women-1.png"  alt=""/></div>
    
      <div className=" d-flex align-items-start justify-content-center  " style={{marginLeft:"250px" ,marginTop:"220px"}}>
      <div style={{ height: "20px " }} className='bg-black'>
        <h2 className='bg-black' style={{ color: "white", fontWeight: "bold", textAlign: 'left', fontSize: "2em" }}>
          Skills Certificate From <br />
          the Think Thank
        </h2>
      </div>
      <div class="hovery" style={{marginTop:"-20px"}} >
    <a class="react_button" href="">
      <span class="btn_text">
        View All Course
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </span>
    </a>
  </div>
    </div>
    </div>
    
  </div>
</div> */}
    </div>
   ); 
   };
   const styles = {

    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.16)',
      width: '43em',
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    info: {
      textAlign: 'center',
      marginTop: '15px',
    },
    name: {
      margin: '5px 0',
      fontSize: '22px',
      color: '#333',
    },
    title: {
      margin: '5px 0',
      fontSize: '16px',
      color: '#777',
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      margin: '10px 0',
    },
    ratingValue: {
      marginRight: '10px',
      fontSize: '16px',
      color: '#ff9900',
    },
    stars: {
      fontSize: '16px',
      color: '#ff9900',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      margin: '10px 0',
      fontSize: '14px',
      color: '#555',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      margin: '10px 0',
      textAlign: 'left',
    },
    social: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '15px',
    },
    socialLink: {
      margin: '0 5px',
      fontSize: '20px',
      color: '#555',
      textDecoration: 'none',
    }
  };
 export default InfoCourses;