import React from 'react';
import './leafletcard.css'; 

function LeafletCard({ title, leaflets }) {
  return (
    <div className="leaflet-category"> 
      <h3 className='old-standard-tt-regular'>{title}</h3>
      <ul>
        {leaflets.map((leaflet) => (
          <li key={leaflet.id} className="leaflet">
            <a href={leaflet.file} target="_blank" rel="noopener noreferrer" className="leaflet-link">
              <div className="leaflet-content">
                <svg
                  className="leaflet-icon"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 303.188 303.188"
                  fill="#000000"
                >
                  <g>
                    <polygon fill="#E8E8E8" points="219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525" />
                    <path
                      fill="#474171"
                      d="M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936
                      c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202
                      c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251
                      c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594
                      c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603
                      c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02
                      c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024
                      c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387
                      c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205
                      c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119
                      c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57
                      C231.127,152.765,230.756,151.257,230.013,149.935z"
                    />
                    <polygon fill="#474171" points="227.64,25.263 32.842,25.263 32.842,0 219.821,0" />
                    <polygon fill="#D1D3D3" points="219.821,50.525 270.346,50.525 219.821,0" />
                  </g>
                </svg>
                <span className="leaflet-text">{leaflet.title}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeafletCard;
