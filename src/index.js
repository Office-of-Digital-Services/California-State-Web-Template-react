import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UtilityHeader from './structure/UtilityHeader/UtilityHeader';
import SiteFooter from './structure/SiteFooter/SiteFooter';
import Footer from './structure/Footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UtilityHeader />
    <App />
    <SiteFooter />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
