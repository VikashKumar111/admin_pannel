import React from "react";
import "./Custominput.css";

const CustomInput = ({ type, label, i_id, i_class }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        placeholder={label}
      />
      <label htmlFor={i_id}>{label}</label>
    </div>
  );
};

export default CustomInput;
