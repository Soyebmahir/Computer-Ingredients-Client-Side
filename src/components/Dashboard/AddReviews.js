import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReviews = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = async data => {
        console.log(data);
        const product = { name: data.name, email: data.email, rating: data.rating, review: data.review }
        fetch('https://rocky-savannah-82621.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Review Post successfully');
                reset();
            })
    }
    return (
        <div>
            <div className='flex h-screen justify-center items-center bg-green-200'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add a Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user.displayName}

                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"

                                    defaultValue={user.email}
                                    placeholder="Your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Rating out of 10</span>
                                </label>
                                <input

                                    type="number"

                                    placeholder="Rating"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("rating", {
                                        required: {
                                            value: true,
                                            message: 'Rating is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Review</span>
                                </label>
                                <input
                                    type="text"


                                    placeholder="Product Review"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("review", {
                                        required: {
                                            value: true,
                                            message: 'Review is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                                </label>
                            </div>




                            <input className='btn w-full max-w-xs text-white' type="submit" value="Post" />
                        </form>


                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddReviews;