import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
// import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3QlPHql4U8K2m6vDUD1gGlclIOc71RaHZ2nJW7UhvrFRTQrNbFRLdnAi4df4vwxegbmWUN8bGEomOQ7dlDd7bx00g3ifz7Th');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`

    const { data: order, isLoading } = useQuery(['new-order', id], () => fetch(url).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="mt-20 bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <p className="text-success font-semibold">Hello, {order.name}</p>
                            <h2 class="card-title">Pay for <span className='text-orange-400'>{order.productName}</span></h2>
                            <p className='font-semibold'>You have Ordered: {order.quantity} pieces</p>
                            <p className='font-semibold'>Please pay: ${order.total_price}</p>
                        </div>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;