import React from 'react';
import './home.css';
import SmallCard from './smallcard/SmallCard';
import MainCard from '../maincard/MainCard';
import Footer from '../footer/Footer';
import { useTranslation } from 'react-i18next';

// images
import img1 from '../../images/about-main.webp'
import img2 from '../../images/Collaborative.webp'
import img3 from '../../images/progressive.webp'
import img4 from '../../images/inclusive.webp'
import img5 from '../../images/trusted.webp'

function Home() {
  const {t} = useTranslation();

  return (
    <>
      <MainCard url={img1} title={t('about')}></MainCard>
      <div className='home-container'>
        <div>
          <h1 className='home-title old-standard-tt-bold'>{t('home_title')}</h1>
          <div className='text-break text-wrap h4'>
            <p className='old-standard-tt-regular'>
              {t('home_1_paragraph')} 
            </p>
            <p className='old-standard-tt-regular'>
              {/* {t('home_2_paragraph')} */}
            </p> 
          </div>
        </div>
        <div className='values-container'>
          <div className="heading">
            <h1 className="heading__title old-standard-tt-bold">{t('values')}</h1>
          </div>
          <div className='card-containerr'>
            <SmallCard url={img2} title={t('collaborative_title')} description={t('collaborative_description')} />
            <SmallCard url={img3} title={t('progressive_title')} description={t('progressive_description')}/>
            <SmallCard url={img4} title={t('inclusive_title')} description={t('inclusive_description')} />
            <SmallCard url={img5} title={t('trusted_title')} description={t('trusted_description')} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </> 
  );
}

export default Home;
