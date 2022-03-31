import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getStordCard } from "../../utilities/fakedb";
import useProducts from "../../hooks/useProducts";


const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);
  const newProd = products.slice(0, 20);

  useEffect(() => {
    const storedCart = getStordCard()
    const savedCart = []
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id)
      if(addedProduct){  
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products]);
 

  

  // cart cart

  const handleAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
        selectedProduct.quantity = 1;
        newCart = [...cart, selectedProduct];
    }
    else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }
    
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  
  return (
    <div className="products">
      <div className="carts-div">
        {newProd.map((product) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="side-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;


