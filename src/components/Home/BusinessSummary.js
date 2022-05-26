import React from 'react';
// import revenue from '../../../image/icon/revenew.jpg';
// import review from '../../../image/icon/review.jpg';
// import product from '../../../image/icon/product.png';

const BusinessSummary = () => {
    return (
        <div className='my-20  p-5 mx-auto bg-slate-600 grid'>
            <div className='text-center text-3xl font-bold p-4'>
                <h2 className='text-pink-700'>Business Summary</h2>
            </div>
            <div className="stats  stats-vertical lg:stats-horizontal text-center mb-10">
                <div className="stat my-3">
                    <div className="stat-figure text-primary">
                        <img className='w-10' src='https://bsmedia.business-standard.com/_media/bs/img/about-page/thumb/464_464/1578993039.jpg' alt="" />
                    </div>
                    <div className="stat-title">Revenue</div>
                    <div className="stat-value text-primary">$550/y</div>
                    <div className="stat-desc">13% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src='https://www.99techpost.com/wp-content/uploads/2018/11/Review-submission.jpg' alt="" />
                    </div>
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-secondary">3.5k</div>
                    <div className="stat-desc">30% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <img className='w-10' src='https://www.bequiet.com/admin/ImageServer.php?ID=857caa42486@be-quiet.net&omitPreview=true' alt="" />
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value text-secondary">2.8M</div>
                    <div className="stat-desc">This month available</div>
                </div>



            </div>
        </div>
    );
};

export default BusinessSummary;