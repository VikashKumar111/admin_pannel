import React from "react";
import CustomInput from "../components/Custominput";
import { Link } from "react-router-dom";
import "./Login.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <br />
      <br />
      <div className="login-form-container">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="">
          <CustomInput type="text" label="Email" id="email" />
          <CustomInput type="text" label="Password" id="pass" />
          <div className="text-container">
            <Link to="forgot-password" className="">Forgot Password?</Link>
          </div>
          <Link to="/admin" className="login-button" type="submit">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
