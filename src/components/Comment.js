

import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.avatar} alt="Avatar" className="avatar" />
      <div className="comment-content">
        <div className="comment-author">
          <span>{comment.author}</span>
         
          <span className="comment-date">{comment.date}</span>
          <span className="comment-reply">Reply</span>
        </div>
        <p>{comment.text}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div className="comment-replies">
            {comment.replies.map((reply, index) => (
              <Comment key={index} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
