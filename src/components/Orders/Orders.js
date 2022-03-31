import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter(pd => pd.id !== product.id)
    setCart(rest)
    removeFromDb(product.id)
  };
  return (
    <div className="shop-container products">
      <div className="products-container w-50 mx-auto">
        {cart.map((product) => (
          <ReviewItem 
          key={product.id} 
          product={product}
          handleRemoveProduct={handleRemoveProduct}></ReviewItem>
        ))}
      </div>
      <div className="side-cart">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
