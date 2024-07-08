import React from 'react';
import './Stage.css';

const Stage = ({ stage }) => {
  return (
    <div className="stage">
      <h2 className="stage-title">{stage.title}</h2>
      <p className="stage-description">{stage.description}</p>
      <div className="video-container">
        <iframe
          title={stage.title}
          width="560"
          height="315"
          src={stage.video}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Stage;
