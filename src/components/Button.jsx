import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import arrow from "../assets/arrow-right.svg";

const Button = ({ buttonText, bgColor, color }) => {
  return (
    <>
      <button
        style={{
          color: color,
          padding: "0.8rem 1.8rem",
          border: "none",
          backgroundColor: bgColor,
        }}
      >
        {buttonText}
        <span
          className="ms-1"
          style={{
            color: color,
          }}
        >
          <IoIosArrowForward />
          {/* <img src={arrow} alt="arrow" /> */}
        </span>
      </button>
    </>
  );
};

export default Button;
