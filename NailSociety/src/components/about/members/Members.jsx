import React, { useEffect, useState } from 'react';
import MainCard from '../../maincard/MainCard';
import img1 from '../../../images/members.webp';
import './members.css';
import MemberCard from './membercard/MemberCard';
import Footer from '../../footer/Footer';
import useChange from '../../reusable/useChange';
import { useTranslation } from 'react-i18next';


function Members({ language }) {
  const {t} = useTranslation();
  const members = useChange('members');
  const [displayedMembers, setDisplayedMembers] = useState([]);

  useEffect(() => {
    const updatedMembers = members.map((member) => ({
      ...member,
      name: language === 'geo' ? member.name_geo : member.name_eng,
      description: language === 'geo' ? member.description_geo : member.description_eng,
    }));
    setDisplayedMembers(updatedMembers);
  }, [language, members]);

  return (
    <>
      <MainCard url={img1} title={t('nav_members')} />
      <div> 
        <div className="heading members-heading">
          <h1 className="heading__title old-standard-tt-bold">{t('members')}</h1>
        </div>
        <ul className="cards-member">
          {displayedMembers.map((member) => (
            <MemberCard
              key={member.id}
              url={member.file}
              name={member.name}
              description={member.description}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Members;
