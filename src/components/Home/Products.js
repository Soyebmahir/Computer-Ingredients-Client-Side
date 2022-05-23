import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{setProducts(data);})
    },[])
    return (
        <div>
            <p>Products part</p>
            <div className='grid lg:grid-cols-3'>
                {
                    products.map(product=><Product
                    key={product._id}
                    product ={product}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;