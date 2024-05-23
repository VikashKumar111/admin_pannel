import React from "react";
import CustomInput from "../components/Custominput";
import "./Forgotpassword.css"; // Import your CSS file

const Forgotpassword = () => {
  return (
    <div className="forgot-container">
      <br />
      <br />
      <div className="forgot-form-container">
        <h3 className="text-center">Forgot Password</h3>
        <p className="text-center">
          Please Enter your registered Email to get reset password mail
        </p>
        
        <form action="">
          <CustomInput type="email" label="Email Address" id="email" />
          <button className="forgot-button" type="submit">
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgotpassword;
