import React from "react";
import CustomInput from "../components/Custominput";
import "./Resetpassword.css"; 

const Resetpassword = () => {
  return (
    <div className="reset-container">
       <br />
      <br />
      <div className="reset-form-container">
        <h3 className="text-center">Reset Password</h3>
        <p className="text-center">Please Enter your new password</p>
        <form action="">
          <CustomInput type="password" label="New Password" id="newPassword" />
          <CustomInput type="password" label="Confirm Password" id="confirmPassword" />
          <button  className="reset-button" type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
