import React from "react";
import "./input.css";

const input = ({type,label}) => {
  return (
    <div>
      <form action="">
      <div class="input-group">
        <input type={type} name="" id="text1" placeholder=" " />
        <label for="text1">{label}</label>
      </div>
    </form>
    </div>
  );
};

export default input;
