import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const [signInWithEmailAndPassword,loading,user,error] = useSignInWithEmailAndPassword(auth)

  const handleEmailBlur = event =>{
    setEmail(event.target.value)
  }

  const handlePasswordBlur = event =>{
    setPassword(event.target.value)
  }

  const handleUserLogin = event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email , password)
    if(user){
      navigate('/shop')
    }
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Login Here ..</h2>
        <form onSubmit={handleUserLogin} action="">
          <div className="input-grup">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="1" required />
          </div>
          <div className="input-grup">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="2" required />
          </div>
          <p>{error?.message}</p>
          {
            loading && <p>Loading...</p>
          }
          <input type="submit" value="Login" className="form-submit" />
        </form>
        <p>
          New in Ema-zone ? 
           <Link className="from-link" to="/signup">
             Create an acount
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
