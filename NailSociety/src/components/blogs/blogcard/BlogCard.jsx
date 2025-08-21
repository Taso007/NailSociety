import React from 'react';
import './blogcard.css';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

function BlogCard({ id, url, title, description, date }) {
  const {t} = useTranslation();

  return (
    <div className="card BlogCard" style={{ width: '19rem', height: '35rem' }}>
      <img src={url} className="card-img-top BlogImg" alt={title} />
      <div className="card-body" >
        <h4 className="card-title text-multiline-truncate"><strong>{title}</strong></h4>
        <p className="card-text text-multiline-truncate" > {description}</p>
      </div>
      <div className="mb-3">
        <Link to={`/blog/${id}`} className="card-link blogcard-link">{t('read_more')}</Link>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{date}</li>
      </ul>
    </div>
  );
} 

export default BlogCard;
