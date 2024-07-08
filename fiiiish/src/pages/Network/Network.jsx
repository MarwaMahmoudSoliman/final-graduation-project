import React from 'react';
import './Network.css'; 
const roadmapData = [
    {
      category: "Network Engineer",
      items: [
        {
          id: 1,
          title: "Introduction to Networking",
          description: "Basic concepts of networking, Types of networks, Networking models (OSI and TCP/IP)",
          video: "https://www.youtube.com/embed/xyz12345", 
        },
        {
          id: 2,
          title: "Network Devices",
          description: "Understanding routers, switches, and hubs, Configuration of network devices",
          video: "https://www.youtube.com/embed/abc12345", 
        },
        {
          id: 3,
          title: "IP Addressing and Subnetting",
          description: "IPv4 and IPv6 addressing, Subnetting techniques and CIDR",
          video: "https://www.youtube.com/embed/def12345", // Replace with actual working video link
        },
        {
          id: 4,
          title: "Routing and Switching",
          description: "Static and dynamic routing protocols, VLANs and inter-VLAN routing",
          video: "https://www.youtube.com/embed/ghi12345", // Replace with actual working video link
        },
        {
          id: 5,
          title: "Network Security",
          description: "Fundamentals of network security, Firewalls and VPNs",
          video: "https://www.youtube.com/embed/jkl12345", // Replace with actual working video link
        },
        {
          id: 6,
          title: "Wireless Networking",
          description: "Wi-Fi standards, Configuring and securing wireless networks",
          video: "https://www.youtube.com/embed/mno12345", // Replace with actual working video link
        },
        {
          id: 7,
          title: "Network Troubleshooting",
          description: "Common networking issues, Tools and techniques for troubleshooting",
          video: "https://www.youtube.com/embed/pqr12345", // Replace with actual working video link
        },
        {
          id: 8,
          title: "Cloud Networking",
          description: "Introduction to cloud networking, Configuring networks in cloud environments (AWS, Azure)",
          video: "https://www.youtube.com/embed/stu12345", // Replace with actual working video link
        },
      ],
    },
  ];


const Newtwork = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-title">Network Engineer Roadmap</h1>
      {roadmapData.map((category) => (
        <div key={category.category} className="category-container">
          <h2 className="category-title">{category.category}</h2>
          {category.items.map((item) => (
            <div key={item.id} className="roadmap-item">
              <h3 className="roadmap-item-title">{item.title}</h3>
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
      ))}
    </div>
  );
};

export default Newtwork;
