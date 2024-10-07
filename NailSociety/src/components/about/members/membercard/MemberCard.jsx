import React from 'react';
import './membercard.css';
import pfp from '../../../../images/blank-profile-picture-973460_640.webp'

function MemberCard({ url, name, description }) { 
  const imageUrl = url || pfp;
  console.log(imageUrl);
 
  
  return (
    <li>
      <a className="card-member">
        <img 
          src={imageUrl}   
          className="card-member__image" 
          alt={name || "Default Profile"}
        />
        <div className="card-member__overlay">
          <div className="card-member__header">
            <svg className="card-member__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>    
            <div className="card-member__header-text">
              <h3 className="card-member__title">{name}</h3>     
            </div>
          </div>
          <p className="card-member__description">{description}</p>
        </div>
      </a>      
    </li>
  );
} 
export default MemberCard;
