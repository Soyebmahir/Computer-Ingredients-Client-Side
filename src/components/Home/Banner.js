import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-row rounded-tl-lg border-slate-900 items-start mt-10	'>
            <div className='w-50 text-3xl font bold text-black'>
                we always give priority to our customers. We Beleieve in service well and fast.
            </div>
            <div className='w-50'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFwSauh57yDTbvn4JoSdAjtNLV6NxwKL6rIeXKWZs77wK7eDFAa957lNl0Rj5aIAcxejQ&usqp=CAU' alt=''></img>
            </div>
        </div>
    );
};

export default Banner;