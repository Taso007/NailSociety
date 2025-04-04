import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './eventpage.css';
import Footer from '../../footer/Footer';
import MainCard from '../../maincard/MainCard';
import Carousel from './carousel/Carousel';
import { renderDescription } from '../../reusable/utils';
 
function EventPage({ language }) {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'events', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchEvent();
  }, [id]);

  const languageSpecificEvent = event
    ? {
        title: language === 'geo' ? event.title_geo : event.title_eng,
        location: language === 'geo' ? event.location_geo : event.location_eng,
        description: language === 'geo' ? event.description_geo : event.description_eng,
      }
    : null;

  if (!event) return <div>This event does not exist.</div>;

  return (
    <>
      <MainCard url={event.file[0]} title={languageSpecificEvent.title} />
      <div className='event-page'>
        <div className='event-info'>
          <h1 className='text-break text-wrap'>{languageSpecificEvent.title}</h1>
          <p className='event-location text-break text-wrap'>{languageSpecificEvent.location}</p>
          <p className='event-date'>{event.date}</p>
          <div className='event-description text-break text-wrap'>
            <p className='text-break text-wrap'>{renderDescription(languageSpecificEvent.description)}</p>
          </div>
        </div>
        <div className='event-header'>
          {event.file.length === 1 ? (
            <img src={event.file[0]} alt="carousel-img" className='event-image'/>
          ) : (
            <Carousel imageArray={event.file} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
