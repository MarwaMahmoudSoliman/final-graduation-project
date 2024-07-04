import React, { useEffect } from 'react';

const DashRedirect = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:3001/'; // Replace with the actual external URL
  }, []);

  return null; // This component doesn't render anything
};

export default DashRedirect;
