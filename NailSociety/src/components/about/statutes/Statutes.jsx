import React, { useState, useEffect } from 'react'
import MainCard from '../../maincard/MainCard';
import PdfDownload from './pdfdownload/PdfDownload';
import Footer from '../../footer/Footer';
import img1 from '../../../images/StockCake-Legal Study Essentials_1728240863.webp';
import './statutes.css';
import useChange from '../../reusable/useChange';
import { useTranslation } from 'react-i18next';

function Statutes({ language }) { 
  const {t} = useTranslation();
  const statutes = useChange('statutes');
  const [displayedstatutes, setDisplayedStatutes] = useState([]);

  useEffect(() => {
    const updatedStatutes = statutes.map((report) => ({
      ...report,
      title: language === 'geo' ? report.title_geo : report.title_eng,
      file: language === 'geo' ? report.file_geo : report.file_eng
    }));
    setDisplayedStatutes(updatedStatutes);
  }, [language, statutes]);

  return (
    <>
    <MainCard url={img1} title={t('nav_statutes')}></MainCard>
    <div className='pdfDownload-container'>
      {displayedstatutes.map((report) => (
        <PdfDownload
          key={report.id}
          title={report.title} 
          file={report.file}  
        />
      ))}
    </div>
    <Footer></Footer>
    </>
  )
}

export default Statutes;