import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    console.log(product);
    const {_id,name,img,description,minQuantity,stockQuantity,price}=product
    const navigate =useNavigate()
    const handlePurchase=(id)=>{
        navigate(`/home/${id}`)

    }
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body ">
          <h2 class="card-title text-success">Name : {name}</h2>
          <h2 class="card-title">Details :{description}</h2>
          <h2 class="card-title">Stock :{stockQuantity} Piece</h2>
          <h2 class="card-title">Minimum Order :{minQuantity}</h2>
          <h2 class="card-title">Price :{price} Per Piece</h2>
          {/* <h2 class="card-title">{description}</h2> */}
          <div class="card-actions">
            <button class="btn btn-primary" onClick={()=>handlePurchase(_id)}>Place Order</button>
          </div>
        </div>
      </div>
    );
};

export default Product;