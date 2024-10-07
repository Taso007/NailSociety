import React from 'react';
import './pdfdownload.css';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useTranslation } from 'react-i18next';

function PdfDownload({ title, file}) { 
  const { t } = useTranslation();

  const downloadFile = () => {
    const storage = getStorage();
    const fileRef = ref(storage, `${file}.pdf`); 

    getDownloadURL(fileRef)
      .then((url) => {
        const xhr = new XMLHttpRequest(); 
        xhr.responseType = 'blob';
        xhr.onload = () => {
          const blob = xhr.response;
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.target = '_blank';
          link.download = `${title}.pdf`; 
          link.click();
          URL.revokeObjectURL(link.href); 
        };
        xhr.open('GET', url);
        xhr.send();
      })
      .catch((error) => {
        console.error('Error downloading the file:', error);
      });
  }; 

  return (
    <div className='pdf-container'>
      <div className='pdf-head-container mb-3'>
        <h3 className='old-standard-tt-regular text-wrap text-break'>{title}</h3>
      </div>
        <div className="pdf-download" onClick={downloadFile}>
          <div className="pdf-download__icon">
            <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 441 512.399">
              <path fill="#3C4D7A" fillRule="nonzero" d="M218.984 16.163c0-5.729 4.647-10.376 10.376-10.376 5.728 0 10.376 4.647 10.376 10.376v74.253c1.021 13.737 5.819 24.535 14.302 31.783 8.667 7.404 21.488 11.544 38.4 11.835v-.037h46.737c5.729 0 10.376 4.647 10.376 10.376 0 5.728-4.647 10.376-10.376 10.376h-46.737v-.042h-.161c-22.046-.349-39.33-6.222-51.694-16.784-12.849-10.979-20.063-26.614-21.504-46.039a10.145 10.145 0 01-.095-1.404V16.163z"/>
              <path fill="#88BCF4" fillRule="nonzero" d="M102.778 354.886c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372h85.568a148.095 148.095 0 00-7.597 20.744h-77.971zm0-145.37c-5.727 0-10.372-4.645-10.372-10.372 0-5.726 4.645-10.372 10.372-10.372h151.288c5.727 0 10.372 4.646 10.372 10.372 0 5.727-4.645 10.372-10.372 10.372H102.778zm0 72.682c-5.727 0-10.372-4.646-10.372-10.373 0-5.727 4.645-10.372 10.372-10.372H246.05c2.83 0 5.395 1.134 7.265 2.971a149.435 149.435 0 00-25.876 17.774H102.778z"/>
              <path fill="#3C4D7A" d="M324.263 278.925c32.23 0 61.418 13.067 82.544 34.192C427.933 334.241 441 363.43 441 395.66c0 32.236-13.067 61.419-34.193 82.544-21.126 21.126-50.31 34.195-82.544 34.195-32.232 0-61.419-13.069-82.543-34.195-21.125-21.125-34.194-50.312-34.194-82.544s13.069-61.417 34.194-82.543c21.126-21.125 50.309-34.192 82.543-34.192zM60.863 0h174.809c3.382 0 6.384 1.619 8.279 4.124l110.107 119.119a10.292 10.292 0 012.745 7.012h.053v119.817a149.591 149.591 0 00-20.752-3.111V134.239l-104.9-113.487H60.863c-11.02 0-21.049 4.516-28.321 11.79-7.274 7.272-11.79 17.301-11.79 28.321v338.276c0 11.015 4.521 21.037 11.796 28.311 7.278 7.28 17.31 11.802 28.315 11.802h120.749a148.132 148.132 0 008.116 20.752H60.863c-16.73 0-31.958-6.85-42.987-17.881C6.852 431.099 0 415.882 0 399.139V60.863C0 44.114 6.842 28.894 17.87 17.87 28.894 6.842 44.114 0 60.863 0zm310.804 383.915c3.798.158 6.491 1.419 8.045 3.789 4.227 6.335-1.543 12.586-5.541 16.991l-42.666 43.374c-4.602 4.531-9.925 4.593-14.528 0l-43.687-44.564c-3.746-4.216-8.38-9.967-4.477-15.801 1.585-2.37 4.257-3.631 8.057-3.789h21.04v-32.687c0-6.221 5.124-11.397 11.397-11.397h29.9c6.285 0 11.409 5.124 11.409 11.397v32.687h21.051z"/>
            </svg>
          </div>
          <div className="pdf-download__text old-standard-tt-regular">
            {t('download')}
          </div>
        </div>
    </div>
  );
}

export default PdfDownload;
