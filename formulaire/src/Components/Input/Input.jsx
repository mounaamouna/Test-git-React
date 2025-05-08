import React from "react";
import "./Input.css";

const Input = ({ value, type, placeholder, handleChange,className}) => {
  return (
    <input
    className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
