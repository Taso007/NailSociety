import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import './blogpage.css';
import Navbar from '../../Navbar';
import Footer from '../../footer/Footer';
import MainCard from '../../maincard/MainCard';


function BlogPage({ language }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchblog = async () => {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBlog(docSnap.data()); 
      } else {
        console.log('No such document!');
      }
    };

    fetchblog();
  }, [id]);

  useEffect(() => {
    if (blog) {
      setBlog((prevBlog) => ({
        ...prevBlog,
        title: language === 'geo' ? prevBlog.title_geo : prevBlog.title_eng,
        description: language === 'geo' ? prevBlog.description_geo : prevBlog.description_eng,
      }));
    }
  }, [language, blog]);

  if (!blog) return <div>This blog does not exist.</div>;

  return (
    <>
    <MainCard url={blog.file} title={blog.title}></MainCard>
    <div className='blog-page'>
    <div className='blog-info'>
      <h1>{blog.title}</h1>
      <div className='blog-description text-break text-wrap'>
        <p className='text-break text-wrap'>{blog.description}</p>
      </div>
    </div>
    <div className='blog-header'>
      <img src={blog.file} alt={blog.title} className='blog-image' />
    </div>
    </div>   
    <Footer></Footer> 
    </>

  );
}

export default BlogPage;
