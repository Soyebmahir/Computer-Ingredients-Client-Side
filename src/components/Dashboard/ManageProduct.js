import React from 'react';
import swal from 'sweetalert';

const ManageProduct = ({product,handleDelete}) => {
    // console.log(product);
    const {_id,name,img,description,minQuantity,stockQuantity,price}=product

    

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-cyan-900 ">Name : {name}</h2>
          <h2 className="card-title">Details :{description}</h2>
          <h2 className="card-title">Stock :{stockQuantity} Piece</h2>
          <h2 className="card-title">Minimum Order :{minQuantity}</h2>
          <h2 className="card-title">Price :{price} Per Piece</h2>
         
          <div className="card-actions">
            <button className="btn btn-primary" onClick={() => handleDelete(_id)} >Delete Item</button>
          </div>
        </div>
      </div>
    );
};

export default ManageProduct;