import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainHeader from './main_header/main_header';
import MainBenner from './main_benner/main_benner';
import MainLecture from './main_lecture/main_lecture';
import BeginnerLecture from './main_lecture/lecture_beginner';
import Roadmap from './main_roadmap/main_roadmap';
import Article from './main_article/main_article';
import NewLecture from './main_lecture/lecture_new';
import MainCount from './main_count/main_count';
import FooterBenner from './footer_benner/footer_benner';
import FooterCompany from './footer_comapny/footer_company';
import FooterService from './footer_service/footer_service';
import FooterNav from './footer_nav/footer_nav';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainHeader />
    <MainBenner />
    <MainLecture />
    <BeginnerLecture/>
    <Roadmap />
    <Article />
    <NewLecture />
    <MainCount />
    <FooterBenner />
    <FooterCompany />
    <FooterService />
    <FooterNav />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
