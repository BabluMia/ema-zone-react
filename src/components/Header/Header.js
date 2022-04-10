import React from "react";
import "./Header.css";
import Img from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={Img} alt="" />
      </div>
      <div className="effect">
        <Link to='/'>Shop</Link>
        <Link to='/orders'>Order</Link>
        <Link to='/inventory'>Inventory</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Header;
