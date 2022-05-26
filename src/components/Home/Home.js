import React from 'react';
import Banner from './Banner';
// import { Footer } from 'react-day-picker';
import BusinessSummary from './BusinessSummary';
import Carousel from './Carousel';
import Products from './Products';

import Reviews from './Reviews';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Products></Products>
            <SecondSection></SecondSection>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Banner></Banner>
            
            
            

        </div>
    );
};

export default Home;