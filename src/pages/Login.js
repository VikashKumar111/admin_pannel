import React from "react";
import CustomInput from "../components/Custominput";
import "./Login.css"; // Ensure the path is correct

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form-container">
        <CustomInput type="text" label="Email" id="email" />
        <CustomInput type="text" label="Password" id="pass" />
      </div>
    </div>
  );
};

export default Login;
