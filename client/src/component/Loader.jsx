import React from 'react';
import './CSS/Loader.css'; // Ensure the path is correct

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src="/images/loaders.gif" alt="Loading" className="loader-image" />
        <div className="loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
