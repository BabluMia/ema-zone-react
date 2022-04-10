import "./Cart.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart ,children}) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
       quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;   
    }
    const tax = +(total * .10).toFixed(2)
    
    const grandTotal =(total + tax + shipping) ;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity} </p>
      <p>Total Price:$ {total}</p>
      <p>Total Shipping Charge:$ {shipping}  </p>
      <p>Tax: $ {tax}</p>
      <h2>Grand Total: ${grandTotal }</h2>
      <button
        className="button"
        style={{ backgroundColor: "#FF3030", border: "2px solid #FF3030" }}
      >
        Add To Cart {element}
      </button>
      <br />
      <button
        className="button"
        style={{ backgroundColor: "#FF9900", border: "2px solid #FF9900" }}
      >
        {children}
      </button>
    </div>
  );
};

export default Cart;
