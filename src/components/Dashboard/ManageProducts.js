import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';
import swal from 'sweetalert';


const ManageProducts = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{

           
            setProducts(data);
        })
    },[])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url =` http://localhost:5000/products/${id}`;
                    console.log(url);
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            const remaining = products.filter(order => order._id !== id);
                            setProducts(remaining);
                        })
                    swal("Your order has been canceled!", {
                        icon: "success",
                    });
                } else {
                    swal("Please pay!");
                }
            });
    }
    return (
        <div>
            <p className='text-center font-bold  text-6xl text-cyan-900 '>All Tools</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
                {
                    products.map(product=><ManageProduct
                    key={product._id}
                    product ={product}
                    handleDelete={handleDelete}
                    ></ManageProduct>)
                }
            </div>
            
        </div>
    );
};

export default ManageProducts;