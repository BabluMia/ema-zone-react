import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const newProd = products.slice(0,20)


// cart count 
  const [count,setCount] = useState([])
  const cartCount =(product)=>{
    // setCount(count + 1)
    const newCount = [...count,product]
    setCount(newCount)
  }

  return (
    <div className="products">
      <div className="carts-div">
        {newProd.map((product) => (
          <Product product={product} cartCount={cartCount} key={product.id}></Product>
        ))}
      </div>
      <div className="side-cart">
        <h2>Order Summary</h2>
        <p>Selected Items: {count.length} </p>
        <p>Total Price:$</p>
        <p>Total Shipping Charge: $5</p>
        <p>Tax: $114 6</p>
        <h2>Grand Total: $1559</h2>
        <button className="button"
          style={{ backgroundColor: "#FF3030", border: "2px solid #FF3030" }}
        >
          Add To Cart {element}
        </button>
        <br />
        <button className="button"
          style={{ backgroundColor: "#FF9900", border: "2px solid #FF9900" }}
        >
          Review Order
        </button>
      </div>
    </div>
  );
};

export default Shop;
