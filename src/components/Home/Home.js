import React from 'react';
// import { Footer } from 'react-day-picker';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
            
            

        </div>
    );
};

export default Home;