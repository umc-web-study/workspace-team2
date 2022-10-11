import React from 'react';
import './App.css';
import Header from './Header'
import Nav from './Nav'
import Banner from './Banner';
import MiddleSearch from './MiddleSearch';
import Tag from './Tag';
import FreeCourse from './FreeCourse';
import WelcomeCourse from './WelcomeCourse';
import RoadMap from './RoadMap';
import Curation from './Curation';
import NewCourse from './NewCourse';
import Review from './Review';
import BottomBanner from './BottomBanner';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Banner />
    <MiddleSearch />
    <Tag />
    <FreeCourse />
    <WelcomeCourse />
    <RoadMap />
    <Curation />
    <NewCourse />
    <Review />
    <BottomBanner />
    </>
  );
}

export default App;
