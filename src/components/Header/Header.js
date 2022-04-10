import React from "react";
import "./Header.css";
import Img from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const Header = () => {
  const [user] =useAuthState(auth)

  const handleLogout = ()=>{
    signOut(auth)
  }
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
        {/* <Link to='/login'>Login</Link> */}
        {
          user ? <button onClick={handleLogout} style={{color:'white',backgroundColor:"transparent"}}>Log Out</button> :<Link to='/login'>Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Header;
