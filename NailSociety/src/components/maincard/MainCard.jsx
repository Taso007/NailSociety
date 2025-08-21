 import React from 'react';
import './maincard.css';
import useFitText from './UseFitText.js';

function MainCard({ url, title }) {
  const { containerRef, textRef } = useFitText({ min: 14, max: 60 });

  return (
    <div className="card bg-dark text-white img-container">
      <img src={url} className="card-img img1" alt="" />
      <div className="grey-overlay"></div>
      <div className="card-img-overlay title-box" ref={containerRef}>
        <h5 ref={textRef} className="card-title card-title-overwrite old-standard-tt-regular">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default MainCard;
