// src/CommentSection.js

import React from 'react';
import Comment from './Comment';

const CommentSection = () => {
  const comments = [
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei.',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg"',
      replies: [],
    },
    {
      author: 'Jane Smith',
      date: 'AUG 15, 2021',
      text: 'Esse euismod urbanitas ut sed, et duo scaevola pericula splendide.',
      avatar: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg",
      replies: [],
    },
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei.',
      avatar:     "  https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg",

      replies: [
        {
          author: 'Kakashi Hatake',
          date: 'AUG 14, 2021',
          text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.',
          avatar: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg",
          replies: [],
        },
      ],
    },
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.',
      avatar: "https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg",
      replies: [],
    },
  ];

  return (
    <div className="comment-section" style={{margin:"auto" ,width:"60%"}}>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment}  />
      ))}
    </div>
  );
};

export default CommentSection;
