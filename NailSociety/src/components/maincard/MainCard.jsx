import React from 'react'
import './maincard.css'

function MainCard(props) {
  return (
    <div className="card bg-dark text-white img-container ">
      <img src={props.url} className="card-img img1" alt="..." />
      <div className="grey-overlay"></div>
      <div className="card-img-overlay">
        <h5 className="card-title card-title-overwrite old-standard-tt-regular">{props.title}</h5>
      </div>
    </div>
  )
}

export default MainCard; 