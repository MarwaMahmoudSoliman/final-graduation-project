import ArtCourseImg from '../utils/images/art-course.jpg'
import BusinessCourseImg from '../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../utils/images/education-course.jpg';
import HealthcareCourseImg from '../utils/images/healthcare-course.jpg';
import LawCourseImg from '../utils/images/law-course.jpg';
import MusicCourseImg from '../utils/images/music-course.jpg';
import SportCourseImg from '../utils/images/sport-course.jpg';
// import FaqAccordion from '../utils/images/faq-accordion.jpg';
import { createSlice } from "@reduxjs/toolkit";


export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses : [
        {
            id: 1,
            img: [ArtCourseImg],
            title: 'Art Course',
            description: 'An art course offers a captivating journey into the realm of creativity, expression, and technique. Its a sanctuary where imagination flourishes and skills are honed, inviting participants to explore the depths of their creativity while mastering the fundamentals of various artistic mediums.'
        },
        {
            id: 2,
            img: [BusinessCourseImg],
            title: 'Business Course',
            description: 'A business course serves as a gateway to the dynamic world of commerce, strategy, and innovation. It provides individuals with the knowledge, skills, and tools necessary to navigate the complexities of the modern business landscape and thrive in diverse professional environments.'
        },
        {
            id: 3,
            img: [ComputerScienceCourseImg],
            title: 'Computer Science Course',
            description: ' A computer science course is an exhilarating voyage into the heart of technology, computation, and innovation. It serves as a gateway to understanding the foundational principles, methodologies, and applications that underpin the digital world we inhabit.'
        },
        {
            id: 4,
            img: [EducationCourseImg],
            title: 'Education Course',
            description: 'An education course serves as a guiding light, illuminating the pathways to knowledge, empowerment, and transformation. It embodies the principles of pedagogy, curriculum design, and instructional strategies that shape the learning experiences of individuals across diverse contexts and discipline'
        },
        {
            id: 5,
            img: [HealthcareCourseImg],
            title: 'Healthcare Course',
            description: 'A healthcare course is a profound exploration into the intricate world of medicine, compassion, and service to humanity. It serves as a foundational platform where individuals embark on a journey to acquire the knowledge, skills, and values necessary to contribute meaningfully to the health and well-being of individuals and communities.'
        },
        {
            id: 6,
            img: [LawCourseImg],
            title: 'Law Course',
            description: 'A law course serves as a gateway to the intricate world of justice, advocacy, and the rule of law. It represents a foundational journey where individuals immerse themselves in the principles, doctrines, and practices that govern society and uphold the principles of justice and equity.'
        },
        {
            id: 7,
            img: [MusicCourseImg],
            title: 'Music Course',
            description: 'A music course is a harmonious journey into the captivating world of melody, rhythm, and expression. It serves as a gateway where individuals embark on a transformative exploration of sound, creativity, and artistic mastery.'
        },
        {
            id: 8,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
      
        {
            id: 9,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
      
        {
            id: 10,
            img: [SportCourseImg],
            title: 'Sport Course',

description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
        {
            id: 11,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
        {
            id: 12,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
        {
            id: 13,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
        },
        {
            id: 14,
            img: [SportCourseImg],
            title: 'Sport Course',
            description: 'A sport course is an exhilarating journey into the world of athleticism, teamwork, and competition. It serves as a platform where individuals embark on a transformative exploration of physical fitness, skill development, and sportsmanship'
  
    
      },
    ],
  },
  reducers: {
    setCourses: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const { setCourses } = coursesSlice.actions;

export const selectCourses = (state) => state.courses.courses;

export default coursesSlice.reducer;