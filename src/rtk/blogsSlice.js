import { createSlice } from "@reduxjs/toolkit";
import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../utils/images/blog1-img.jpg';
import Blog2Img from '../utils/images/blog2-img.jpg';
import Blog3Img from '../utils/images/blog3-img.jpg';
import Blog4Img from '../utils/images/blog4-img.jpg';
import Blog5Img from '../utils/images/blog5-img.jpg';
import Blog6Img from '../utils/images/blog6-img.jpg';
import Blog7Img from '../utils/images/blog7-img.jpg';
import Blog8Img from '../utils/images/blog8-img.jpg';
import Blog9Img from '../utils/images/blog9-img.jpg';

export const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
      blogs : [
            {
                id: 1,
                img: [Blog1Img],
                title: 'Blog 1',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 2,
                img: [Blog2Img],
                title: 'Blog 2',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 3,
                img: [Blog3Img],
                title: 'Blog 3',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 4,
                img: [Blog4Img],
                title: 'Blog 4',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 5,
                img: [Blog5Img],
                title: 'Blog 5',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 6,
                img: [Blog6Img],
                title: 'Blog 6',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 7,
                img: [Blog7Img],
                title: 'Blog 7',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 8,
                img: [Blog8Img],
                title: 'Blog 8',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
            {
                id: 9,
                img: [Blog9Img],
                title: 'Blog 9',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.'
            },
        ],
    },
    reducers: {
      setBlogs: (state, action) => {
        state.blogs.push(action.payload);
      },
    },
  });
  
  export const { setBlogs } = blogsSlice.actions;
  
  export const selectBlogs = (state) => state.blogs.blogs;
  
  export default blogsSlice.reducer;