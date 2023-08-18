import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Button = ({ buttonText, bgColor, color }) => {
  return (
    <>
      <button
        style={{
          color: "#4273c3",
          padding: "0.8rem 1.8rem",
          border: "none",
          backgroundColor: "#fff",
        }}
      >
        Explore More
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </>
  );
};

export default Button;
