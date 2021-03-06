import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://rocky-savannah-82621.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{

            const slicedData =data.slice(0,6)
            setProducts(slicedData);
        })
    },[])
    return (
        <div>
            <p className='text-center font-bold  text-6xl text-cyan-900 '>Tools We Provides</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
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