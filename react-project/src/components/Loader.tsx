import React from 'react';
import '../assets/styles/Loader.scss';

const Loader = () => {
  return (
    <div className="spinner-container" data-testid="loader">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loader;
