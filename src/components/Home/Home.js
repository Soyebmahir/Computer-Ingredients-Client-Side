import React from 'react';
// import { Footer } from 'react-day-picker';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';
import Footer from './Footer';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
            
            

        </div>
    );
};

export default Home;