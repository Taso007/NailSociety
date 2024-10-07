import React from 'react';
import './eventcard.css';
import { useNavigate } from 'react-router-dom';


function EventCard({ id, url, title, location, date }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/event/${id}`); 
  };

  return (
    <div className='EventCard' style={{ fontSize: '14px' }}>
      <div className='EventImg-container' onClick={handleClick}>
        <img src={url} className='EventImg mb-2' alt={title} />
      </div>
      <p className='mb-0'><strong>{title}</strong></p>
      <p className='mb-0'>{location}</p>
      <p className='mb-0 no-wrap'>{date}</p>
    </div>
  );
}

export default EventCard;
