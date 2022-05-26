import React from 'react';
// import banner1 from '../../../image/banner/banner1.jpg';
// import banner2 from '../../../image/banner/banner2.jpg';
// import banner3 from '../../../image/banner/banner3.jpg';
// import banner4 from '../../../image/banner/banner4.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full h-96 my-5 shadow-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://www.howtogeek.com/wp-content/uploads/2018/10/cpu_lede.png?height=200p&trim=2,2,2,2&crop=16:9' className="w-full" alt='img' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://hetmanrecovery.com/pic/blog/a134/sata-ssd.webp" className="w-full" alt='img'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://cdn.mos.cms.futurecdn.net/aFrdtqm8QLfdsRBkwhDjcC.jpg" className="w-full" alt='img'/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src='https://cdn.mos.cms.futurecdn.net/aFrdtqm8QLfdsRBkwhDjcC.jpg' className="w-full" alt='img'/> 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
            </div>

        </div>
    );
};

export default Carousel;