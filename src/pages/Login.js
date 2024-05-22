import React from "react";
import CustomInput from "../components/Custominput";
import "./Login.css"; // Ensure the path is correct

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
        <button className="login-button" type="submit">
          Login
        </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
