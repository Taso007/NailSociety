import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './eventpage.css';
import Navbar from '../../Navbar';
import Footer from '../../footer/Footer';
import MainCard from '../../maincard/MainCard';

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

  useEffect(() => {
    if (event) {
      setEvent((prevEvent) => ({
        ...prevEvent,
        title: language === 'geo' ? prevEvent.title_geo : prevEvent.title_eng,
        location: language === 'geo' ? prevEvent.location_geo : prevEvent.location_eng,
        description: language === 'geo' ? prevEvent.description_geo : prevEvent.description_eng,
      }));
    }
  }, [language, event]);

  if (!event) return <div>This event does not exist.</div>;

  return (
    <>
      <MainCard url={event.file} title={event.title} />
      <div className='event-page'>
        <div className='event-info'>
          <h1>{event.title}</h1>
          <p className='event-location'>{event.location}</p>
          <p className='event-date'>{event.date}</p>
          <div className='event-description text-break text-wrap'>
            <p className='text-break text-wrap'>{event.description}</p>
          </div>
        </div>
        <div className='event-header'>
          <img src={event.file} alt={event.title} className='event-image' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPage;
