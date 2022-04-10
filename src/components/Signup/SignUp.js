import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signup.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const [createUserWithEmailAndPassword,user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
    
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
    
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
    
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError(`Your Password's doesn't match..`);
      return;
    }
    if (password.length < 6) {
      setError("Password must be more then 6 cherecter..");
      return;
    }
    createUserWithEmailAndPassword(email, password)
    
    // console.log("email:", email);
    // console.log("pass:", password);
    // console.log("conpass:", confirmPassword);
    
  };

  if(user){
    navigate('/shop')
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up Here ..</h2>
        <form onSubmit={handleCreateUser} action="">
          <div className="input-grup">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-grup">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-grup">
            <label  htmlFor="password">
              Confirm Password
            </label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="Confirm password" id="" required />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          
          <input type="submit" value="Sign up" className="form-submit" />
        </form>
        <p>
          Already have an acount ?
          <Link className="from-link" to="/login">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
