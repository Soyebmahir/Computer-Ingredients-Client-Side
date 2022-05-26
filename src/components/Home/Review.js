import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        
        <div className="card-body ">
          <h2 className="card-title text-cyan-900 ">Name : {review?.name}</h2>
          <h2 className="card-title">Email :{review.email}</h2>
          <h2 className="card-title">Saying :{review.review}</h2>
          <h2 className="card-title">Rating :{review.rating} Stars</h2>
          {/* <div className="card-actions">
            
          </div> */}
        </div>
      </div>
    );
};

export default Review;