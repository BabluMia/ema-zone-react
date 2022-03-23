import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const {handleAddToCart,product} = props
  const { img, price, name, seller, ratings } = product;
  // console.log(props);
  
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="name" style={{ fontSize: "21px" }}>
          {name}
        </p>
        <p className="mt" style={{ fontSize: "21px" }}>
          Price:${price}
        </p>
        <p>Menufecterar:{seller}</p>
        <p className="mt">Ratings: {ratings} star</p>
       
      </div>
      <button onClick={()=> handleAddToCart(product)}  className="btn">Add To Cart {element}</button>
    </div>
  );
};

export default Product;
