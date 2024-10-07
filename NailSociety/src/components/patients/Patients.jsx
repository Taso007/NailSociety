import React, { useEffect, useState } from 'react';
import './patients.css';
import img1 from '../../images/leaflet.webp';
import Footer from '../footer/Footer';
import MainCard from '../maincard/MainCard';
import LeafletCard from './leaflet/LeafletCard';
import useChange from '../reusable/useChange';
import { useTranslation } from 'react-i18next';

function Patients({ language }) {
  const {t} = useTranslation();
  const leaflets = useChange('leaflets');
  const [displayedLeaflets, setDisplayedLeaflets] = useState([]);

  useEffect(() => {
    const updatedLeaflets = leaflets.map((leaflet) => ({
      ...leaflet,
      category: language === 'geo' ? leaflet.category_geo : leaflet.category_eng,
      title: language === 'geo' ? leaflet.title_geo : leaflet.title_eng,
      file: language === 'geo' ? leaflet.file_geo : leaflet.file_eng
    }));
    setDisplayedLeaflets(updatedLeaflets);
  }, [language, leaflets]);


  const groupedLeaflets = displayedLeaflets.reduce((acc, leaflet) => {
    const category = leaflet.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(leaflet);
    return acc;
  }, {}); 

  return (
    <>
      <MainCard url={img1} title={t('nav_patients')} />
      <div className="leaflets-section">
        {Object.keys(groupedLeaflets).map((category, index) => (
          <LeafletCard 
            key={index} 
            title={category} 
            leaflets={groupedLeaflets[category]} 
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Patients;
