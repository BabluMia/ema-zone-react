import React from "react";
import "./Header.css";
import Img from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Img} alt="" />
      </div>
      <div className="effect">
        <a href="/shop">Shop</a>
        <a href="/Order">Order</a>
        <a href="/ Inventory">Inventory</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default Header;
