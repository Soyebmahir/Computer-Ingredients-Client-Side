import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://rocky-savannah-82621.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>{setReviews(data);})
    },[])

    return (
        <div>
        <p className='text-center font-bold  text-6xl text-cyan-900 mb-3 '>Reviews We got</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
            {
                reviews.map(review=><Review
                key={review._id}
                review ={review}
                ></Review>)
            }
        </div>
        
    </div>
    );
};

export default Reviews;