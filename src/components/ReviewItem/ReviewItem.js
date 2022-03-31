import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/solid'

const ReviewItem = ({product,handleRemoveProduct}) => {
    const {name,price,shipping,quantity,img} = product
    const newName = name.slice(0,20) + '...'
    
    return (
        <div className='review-item '>
            <div className="row justify-content-between align-items-center px-2">
                <div className="col-3">
                    <img src={img} className='img-fluid rounded-lg' alt="" />
                </div>
                <div className="col-6">
                    <h5>{(name.length > newName.length)?newName : name}</h5>
                    <h6>Price: <span style={{color:'orange'}}>${price}</span> </h6>
                    <p>Shipping: <span style={{color:'orange'}}>${shipping}</span></p>
                    <p>Quantity: <span style={{color:'orange'}}>{quantity}</span></p>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-end">
                    <button onClick={()=>handleRemoveProduct(product)} className='rounded-pill  m-auto' style={{backgroundColor:'#95A0A7'}}><TrashIcon style={{width:'30px',height:'35px'}}></TrashIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;