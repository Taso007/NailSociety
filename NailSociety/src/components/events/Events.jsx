import React, { useState, useEffect } from 'react';
import './events.css';
import MainCard from '../maincard/MainCard';
import Footer from '../footer/Footer';
import EventCard from './eventcards/EventCard';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

// Images
import img1 from '../../images/events.webp';

function Events({ language }) {
  const {t} = useTranslation();
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [displayedEvents, setDisplayedEvents] = useState([]);
 
  //not reusable because of visibility additions.
  useEffect(() => {
    const q = query( 
      collection(db, 'events'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const eventsArray = [];
      querySnapshot.forEach((doc) => {
        eventsArray.push({ id: doc.id, ...doc.data() });
      });
      setEvents(eventsArray);
      const categories = [...new Set(eventsArray.map(event => event.category))];
      const initialVisibility = {};
      categories.forEach(category => {
        initialVisibility[category] = 4; 
      });
      setVisibleEvents(initialVisibility); 
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const updatedEvents = events.map((event) => ({
      ...event,
      title: language === 'geo' ? event.title_geo : event.title_eng,
      location: language === 'geo' ? event.location_geo : event.location_eng
    }));
    setDisplayedEvents(updatedEvents);
  }, [language, events]);


  const groupedEvents = displayedEvents.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {});

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
    setVisibleEvents(prev => ({
      ...prev,
      [category]: prev[category] === groupedEvents[category].length ? 4 : groupedEvents[category].length
    }));
  };

  return (
    <>
      <MainCard url={img1} title={t('nav_events')} />
      <div className='events-container'>
        <div className='events-text-container text-break text-wrap h4 old-standard-tt-regular'>
          {t('events_paragraph')}
        </div>
        <div className='EventsList'>
          {Object.keys(groupedEvents).map((category) => (
            <div key={category} className='card card-body p-5 eventbox-container'>
              <h5>
                {t('events_latest')} {category === 'symposium / სიმპოზიუმი' ? t('events_symposium') : t('events_congress')}
              </h5>
              <p>{t('events_click')} {category === 'symposium / სიმპოზიუმი' ? t('events_symposium') : t('events_congress')} {t('events_highlit')}</p>
              <div className='row row-cols-xl-4 row-cols-l-4 row-cols-md-4 row-cols-sm-3 row-cols-xs-3'>
                {groupedEvents[category]
                  .slice(0, 4) 
                  .map((event) => (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      url={event.file}
                      title={event.title}
                      location={event.location}
                      date={event.date}
                    />
                  ))}
              </div>
              {groupedEvents[category].length > 4 && (
                <div className='load-more-event-container'>
                  <button 
                    className='load-more-event-btn' 
                    onClick={() => toggleCategory(category)}
                  >
                    {expandedCategories[category] 
                      ? (<>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3C4D7A"><path d="m280-400 200-200 200 200H280Z"/></svg> {t('events_previous')} {category === 'symposium / სიმპოზიუმი' ? t('events_symposium') : t('events_congress')}
                          </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3C4D7A">
                            <path d="M480-360 280-560h400L480-360Z"/>
                          </svg> 
                          {t('events_previous')} {category === 'symposium / სიმპოზიუმი' ? t('events_symposium') : t('events_congress')}
                        </>
                      )
                    }
                  </button>

                </div>
              )}
              {expandedCategories[category] && groupedEvents[category].length > 4 && (
                <div className='row row-cols-xl-4 row-cols-l-4 row-cols-md-4 row-cols-sm-3 row-cols-xs-3'>
                  {groupedEvents[category]
                    .slice(4, visibleEvents[category]) 
                    .map((event) => (
                      <EventCard
                        key={event.id}
                        id={event.id}
                        url={event.file}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                      />
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
