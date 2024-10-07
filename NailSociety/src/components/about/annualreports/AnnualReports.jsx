import React, { useState, useEffect } from 'react'
import MainCard from '../../maincard/MainCard';
import Footer from '../../footer/Footer';
import img1 from '../../../images/report.webp';
import './annualreports.css';
import useChange from '../../reusable/useChange';
import { useTranslation } from 'react-i18next';
import PdfDownloadReports from './pdfdownload/PdfDownloadReports';

function AnnualReports({ language }) { 
  const {t} = useTranslation();
  const reports = useChange('reports');
  const [displayedReports, setDisplayedReports] = useState([]);

  useEffect(() => {
    const updatedReports = reports.map((report) => ({
      ...report,
      title: language === 'geo' ? report.title_geo : report.title_eng,
      file: language === 'geo' ? report.file_geo : report.file_eng
    }));
    setDisplayedReports(updatedReports);
  }, [language, reports]);

  return (
    <>
    <MainCard url={img1} title={t('nav_reports')}></MainCard>
    <div className='pdfDownload-container'>
      {displayedReports.map((report) => (
        <PdfDownloadReports
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

export default AnnualReports;