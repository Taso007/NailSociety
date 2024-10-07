import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './translation/i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <I18nextProvider i18n={i18n}>
        <App /> 
      </I18nextProvider>
    </Router>
  </StrictMode>
);
