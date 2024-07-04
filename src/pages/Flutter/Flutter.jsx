import React from 'react';
import './Flutter.css'; // Import your CSS file

const Flutter = () => {
  const roadmapData = [
    {
      id: 1,
      title: "Introduction to Flutter",
      description: "Overview of Flutter and Dart, Installation and setup, First Flutter app",
      video: "https://www.youtube.com/embed/1ukSR1GRtMU",
    },
    {
      id: 2,
      title: "Core Flutter Concepts",
      description: "Widgets and the widget tree, State management, Navigation and routing",
      video: "https://www.youtube.com/embed/luBmskXY2-o",
    },
    {
      id: 3,
      title: "UI Design in Flutter",
      description: "Building responsive layouts, Customizing widgets, Animation and motion",
      video: "https://www.youtube.com/embed/Zp3GW33Ak5s",
    },
    {
      id: 4,
      title: "Flutter and Firebase",
      description: "Setting up Firebase with Flutter, Authentication, Firestore database integration",
      video: "https://www.youtube.com/embed/YLdIzx7iBJo",
    },
    {
      id: 5,
      title: "Advanced Flutter Topics",
      description: "Using Flutter for web and desktop, Performance optimization, Testing and debugging",
      video: "https://www.youtube.com/embed/R2_bH0ZVLr4",
    },
    {
      id: 6,
      title: "Deployment and DevOps",
      description: "Preparing for release, CI/CD, Publishing to app stores",
      video: "https://www.youtube.com/embed/R2_bH0ZVLr4",
    },
  ];

  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Flutter Developer Roadmap</h1>
      {roadmapData.map((item) => (
        <div key={item.id} className="roadmap-item">
          <h2 className="roadmap-item-title">{item.title}</h2>
          <p className="roadmap-item-description">{item.description}</p>
          <div className="video-container">
            <iframe
              src={item.video}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flutter;
