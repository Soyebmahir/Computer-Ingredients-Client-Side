import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{console.log(data);})
    },[])
    return (
        <div>
            <p>Products part</p>
            <Product></Product>
        </div>
    );
};

export default Products;