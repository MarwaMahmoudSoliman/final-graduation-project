import React, { useState } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTranslationContext } from '../Context/TranslationContext';
const CommentSec = () => {
  const {t} = useTranslation();
  const [comments, setComments] = useState([
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei.',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg',
      replies: [],
    },
    {
      author: 'Jane Smith',
      date: 'AUG 15, 2021',
      text: 'Esse euismod urbanitas ut sed, et duo scaevola pericula splendide.',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg',
      replies: [],
    },
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Sumo euismod dissentiunt ne sit, ad eos iudico qualisque adversarium, tota falli et mei.',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg',
      replies: [
        {
          author: 'Kakashi Hatake',
          date: 'AUG 14, 2021',
          text: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.',
          avatar: 'https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg',
          replies: [],
        },
      ],
    },
    {
      author: 'John Doe',
      date: 'AUG 14, 2021',
      text: 'Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg',
      replies: [],
    },
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    website: '',
    text: '',
    avatar: 'https://studyhub.themewant.com/wp-content/uploads/2022/01/01-260x160.jpg',
    replies: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((prevComments) => [
      ...prevComments,
      {
        ...newComment,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      },
    ]);
    setSubmitted(true);
    setNewComment({
      author: '',
      email: '',
      website: '',
      text: '',
      avatar: 'https://studyhub.themewant.com/wp-content/uploads/2024/03/03-2.jpg',
      replies: [],
    });
  };

  return (
    // <div className="comment-section" style={{ margin: 'auto', width: '60%' }}>
    //   {comments.map((comment, index) => (
    //     <Comment key={index} comment={comment} />
    //   ))}

    //   <div className="form-container w-50" style={{ margin: 'auto', marginBottom: '100px' }}>
        
       
    //       <div style={{ border: 'none' }}>
    //         <h2 style={{ textAlign: 'center' }}>Add Comment</h2>
    //         <p style={{ textAlign: 'center' }}>Your email address will not be published.</p>
    //         <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
    //           <div className="form-group" style={{ width: '100%' }}>
    //             <input
    //               type="text"
    //               name="author"
    //               placeholder="Your Name"
    //               style={{ width: '50%', display: 'inline-block', marginRight: '0px' }}
    //               value={newComment.author}
    //               onChange={handleInputChange}
    //             />
    //             <input
    //               type="email"
    //               name="email"
    //               placeholder="Your Email"
    //               style={{ width: '50%' }}
    //               value={newComment.email}
    //               onChange={handleInputChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <input
    //               type="text"
    //               name="website"
    //               placeholder="Website"
    //               style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}
    //               value={newComment.website}
    //               onChange={handleInputChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <textarea
    //               name="text"
    //               placeholder="Your Message"
    //               style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}
    //               value={newComment.text}
    //               onChange={handleInputChange}
    //             ></textarea>
    //           </div>
    //           <button type="submit" style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}>
    //             Add Comment
    //           </button>
    //         </form>
    //       </div>
     
    //   </div>
    // </div>
  
    <div className="comment-section" style={{ margin: 'auto', width: '60%' }}>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}

      <div className="form-container w-50" style={{ margin: 'auto', marginBottom: '100px' }}>
        <div style={{ border: 'none' }}>
          <h2 style={{ textAlign: 'center' }}>{t('Add Comment')}</h2>
          <p style={{ textAlign: 'center' }}>{t('Your email address will not be published.')}</p>
          <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
            <div className="form-group" style={{ width: '100%' }}>
              <input
                type="text"
                name="author"
                placeholder={t('Your Name')}
                style={{ width: '50%', display: 'inline-block', marginRight: '0px' }}
                value={newComment.author}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder={t('Your Email')}
                style={{ width: '50%' }}
                value={newComment.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="website"
                placeholder={t('Website')}
                style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}
                value={newComment.website}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="text"
                placeholder={t('Your Message')}
                style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}
                value={newComment.text}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" style={{ width: '100%', display: 'inline-block', marginTop: '20px' }}>
              {t('Add Comment')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};





export default CommentSec;
