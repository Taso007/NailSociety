import React, { useState } from 'react';
import './search.css';
import { useTranslation } from 'react-i18next';


function Search({ onSearch }) {
  const {t} = useTranslation();
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <>
      <input 
        className="search__input" 
        type="text" 
        placeholder={t('search')}           
        value={searchInput}
        onChange={handleInputChange}
      />
    </>
  );
}

export default Search;
