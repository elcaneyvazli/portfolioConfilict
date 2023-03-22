import React from "react";
import "./input.css";

const input = ({type,label}) => {
  return (
    <div>
      <form action="">
      <div className="input-group">
        <input type={type} name="" id="text1" placeholder=" " />
        <label htmlFor="text1" >{label}</label>
      </div>
    </form>
    </div>
  );
};

export default input;
