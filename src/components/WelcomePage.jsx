import React, { useEffect } from 'react';

const WelcomePage = () => {
  useEffect(() => {
    window.location.href = 'https://novaform.vercel.app/';
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
};

export default WelcomePage;
