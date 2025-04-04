import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './blogpage.css';
import Footer from '../../footer/Footer';
import MainCard from '../../maincard/MainCard';
import { renderDescription } from '../../reusable/utils';

function BlogPage({ language }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>This blog does not exist.</div>;

  const title = language === 'geo' ? blog.title_geo : blog.title_eng;
  const description = language === 'geo' ? blog.description_geo : blog.description_eng;

  return (
    <>
      <MainCard url={blog.file} title={title}></MainCard>
      <div className='blog-page'>
        <div className='blog-info'>
          <h1>{title}</h1>
          <div className='blog-description text-break text-wrap'>
            <p className='text-break text-wrap'>{renderDescription(description)}</p>
          </div>
        </div>
        <div className='blog-header'>
          <img src={blog.file} alt={title} className='blog-image' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
