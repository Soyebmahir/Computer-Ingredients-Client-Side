import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
// import auth from '../../firebase.init';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder,setSingleOrder]=useState({})
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            console.log(user);
            fetch('http://localhost:5000/order', {
                method: 'GET',
                headers:{
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data =>{ 
                    console.log(data);
                    setOrders(data)})
        }

    }, [user]);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    const handleStatus = (id) => {
        
        
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }
            
        })
            .then(res => res.json())
            .then(data => {
                fetch('http://localhost:5000/order', {
                    method: 'GET',
                    headers:{
                        "authorization": `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data =>{ 
                        console.log(data);
                        setOrders(data)})
              
              console.log(data)}
              
              
              )
    }
    return (
        <div>
            <div>
                <h4>All Order list</h4>
            </div>
            <div className='mt-10'>
                <h2 className='mb-4 text-primary font-semibold'>All Orders: {orders.length}</h2>
                <div className="overflow-x-auto mr-5">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Customer Name</th>
                                <th>Order Product</th>
                                <th>Order Quantity</th>
                                <th>Payable</th>
                                <th>Shipping Address</th>
                                <th>Phone</th>
                                <th>Payment Status</th>
                                <th>Delivery Status</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <th>{order.name}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.total_price}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-warning text-white'>Unpaid</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='btn btn-xs btn-success text-white'>Paid</span></p>
                                            <p>Transaction ID:{order.transactionId} </p>
                                        </div>}
                                    </td>
                                    <td>{(order.paid) && <button onClick={() => handleStatus(order._id)} className='btn btn-xs btn-error text-white' value="Pending" id="myButton1">{!order.status ? 'Pending':'Shipped'}</button>}</td>
                                    <td>{(!order.paid) && <button onClick={() => handleDelete(order._id)}
                                        className='btn btn-xs btn-error text-white'>Cancel</button>
                                        }</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;