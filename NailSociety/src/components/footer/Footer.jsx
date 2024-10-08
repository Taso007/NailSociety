import React from 'react';
import './footer.css';
import logo from '../../images/image.webp';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          <span>
            <img src={logo} className="footer_img" alt="GNRS Logo" />
          </span>
        </h3>
      </div>

      <div className="footer-center">
        <div> 
          <i className="fa fa-map-marker"></i>
          <p className='old-standard-tt-regular'>{t('footer_street')}</p>
        </div>

        <div className='phone_content mt-2'>
          <p className='old-standard-tt-regular'>+(995) 599 25 66 15</p>
          <p className='old-standard-tt-regular'>+(995) 597 50 50 59</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about old-standard-tt-regular">
          <span className='old-standard-tt-regular'>{t('footer_about_title')}</span>
          {t('footer_about')}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
