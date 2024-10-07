import React from 'react';
import eng from '../images/64px-English_language.svg.webp';
import geo from '../images/64px-Flag_of_Georgia.svg.webp';
import { useTranslation } from 'react-i18next';
import './navbar.css';

function Navbar({ changeLanguage, language }) {
  const { t } = useTranslation();

  return (
    <div style={{ marginBottom: '56px' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand old-standard-tt-regular" href="/">Georgian Nail Research Society</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle old-standard-tt-regular" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('about')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item old-standard-tt-regular" href="/">{t('nav_academy')}</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item old-standard-tt-regular" href="/members">{t('nav_members')}</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item old-standard-tt-regular" href="/statutes">{t('nav_statutes')}</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item old-standard-tt-regular" href="/annualReports">{t('nav_reports')}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link old-standard-tt-regular" href="/events">{t('nav_events')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link old-standard-tt-regular" href="/blogs">{t('nav_blogs')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link old-standard-tt-regular" href="/patients">{t('nav_patients')}</a>
              </li>
            </ul>
            <div className='d-flex gap-2'>
              <a
                className="nav-link lang"
                onClick={() => changeLanguage('eng')}
                style={{ filter: language === 'geo' ? 'grayscale(100%)' : 'none' }}
              >
                <img src={eng} style={{ height: '1rem' }} alt="English" />
              </a>
              <a
                className="nav-link lang"
                onClick={() => changeLanguage('geo')}
                style={{ filter: language === 'eng' ? 'grayscale(100%)' : 'none' }}
              >
                <img src={geo} style={{ height: '1.1rem' }} alt="Georgian" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
