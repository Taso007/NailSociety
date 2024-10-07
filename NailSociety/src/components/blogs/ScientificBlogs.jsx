import React, { useState, useEffect } from 'react';
import './scientificblogs.css';
import MainCard from '../maincard/MainCard';
import Footer from '../footer/Footer';
import Search from './searchbox/Search';
import BlogCard from './blogcard/BlogCard';
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

// imgs
import img1 from '../../images/blogs.webp';

function ScientificBlogs({ language }) {
  const {t} = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  useEffect(() => {
    const q = query(
      collection(db, 'blogs'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const blogsArray = [];
      querySnapshot.forEach((doc) => {
        blogsArray.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(blogsArray);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const updatedBlogs = blogs.map((blog) => ({
      ...blog,
      title: language === 'geo' ? blog.title_geo : blog.title_eng,
      description: language === 'geo' ? blog.description_geo : blog.description_eng
    }));
    setSearchResults(updatedBlogs);
  }, [language, blogs]);

  const loadMoreBlogs = () => {
    setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 6);
  };

  const handleSearch = (searchInput) => {
    if (searchInput === '') {
      const updatedBlogs = blogs.map((blog) => ({
        ...blog,
        title: language === 'geo' ? blog.title_geo : blog.title_eng,
        description: language === 'geo' ? blog.description_geo : blog.description_eng,
      }));
      setSearchResults(updatedBlogs);
    } else {
      const filteredResults = searchResults.filter(blog => {
        const title = language === 'geo' ? blog.title_geo : blog.title_eng;
        const description = language === 'geo' ? blog.description_geo : blog.description_eng;
  
        return (title?.toLowerCase().includes(searchInput.toLowerCase()) ||
                description?.toLowerCase().includes(searchInput.toLowerCase()));
      });
      setSearchResults(filteredResults);
    }
  };
  

  return (
    <>
      <MainCard url={img1} title={t('nav_blogs')}></MainCard>
      <div className='scientificBlogs-container'>
        <div className='text-break text-wrap h4 blogs-text-container'>
          <p className='old-standard-tt-regular'>
            {t('blogs_1_paragraph')}
          </p>
          <p className='old-standard-tt-regular'>
            {t('blogs_2_paragraph')}
          </p>
        </div>
        <div className='search__container'>
          <h4 className='search-title old-standard-tt-regular'>{t('blogs_search')}</h4>
          <Search onSearch={handleSearch}></Search>
        </div>

        <div className='blogcards-container container-xxl d-flex justify-content-center'>
          {searchResults.length > 0 ? (
            <div className='row mx-auto blogs-container'>
              {searchResults.slice(0, visibleBlogs).map((blog) => (
                <BlogCard className='col-lg-4 col-md-6 col-sm-12'
                  key={blog.id} 
                  id={blog.id}
                  url={blog.file}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div>
          ) : (
            <p className="no-blogs-message">There are no such blogs.</p>
          )}

          {visibleBlogs < searchResults.length && (
            <div className='load-more-container'>
              <button className='load-more-btn' onClick={loadMoreBlogs}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ScientificBlogs;
