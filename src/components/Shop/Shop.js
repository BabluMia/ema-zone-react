import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  
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
    addToDb(product.id)
  }

  return (
    <div className="products">
      <div className="carts-div">
        {newProd.map((product) => (
          <Product product={product} cartCount={cartCount} key={product.id}></Product>
        ))}
      </div>
      <div className="side-cart">
       <Cart cart={count}></Cart>
      </div>
    </div>
  );
};

export default Shop;
