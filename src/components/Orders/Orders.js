import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };

  const navigate = useNavigate();
  return (
    <div className="shop-container products">
      <div className="products-container w-50 h-100 mx-auto">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="side-cart pb-5">
        <Cart cart={cart}>
          <button
            onClick={() => navigate("/shipment")}
            style={{ background: "transparent", color: "black" }}
          >
            Proceed Shipment
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
