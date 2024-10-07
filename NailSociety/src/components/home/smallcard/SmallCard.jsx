import React from 'react';
import './smallcard.css'

function SmallCard(props) {
  return (
    <>
      <div className="card home-card" style={{ width: '19rem' }}>
        <div className='smallcard-img-container'>
          <img src={props.url} className="card-img-top" alt={props.url} />
        </div>
        <div className="card-body">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
