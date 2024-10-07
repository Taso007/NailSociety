import { useState, useEffect } from 'react';
import i18n from '../../translation/i18n';

const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'geo'; 
  });

  const changeLanguage = (lang) => {
    if (lang === 'eng') {
      setLanguage('eng');
      localStorage.setItem('language', 'eng');
       
    } else {
      setLanguage('geo');
      localStorage.setItem('language', 'geo'); 
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  
  return { language, changeLanguage };
};

export default useLanguage;
