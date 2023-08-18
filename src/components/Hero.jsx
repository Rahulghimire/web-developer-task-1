import React from "react";
import Button from "./Button";
import TCarousel from "./TCarousel";
const Hero = () => {
  return (
    <div
      className="d-flex flex-row justify-content-between hero-content-container"
      style={{ padding: "12rem 5rem" }}
    >
      <div>
        <div>
          <p style={{ color: "#fff", margin: "0" }}>Building with Confidence</p>
        </div>
        <div className="d-flex flex-row">
          <p
            className="text-capitalize"
            style={{
              color: "#fff",
              fontSize: "3rem",
              fontWeight: "800",
              margin: "0",
            }}
          >
            <span style={{ color: "#34d6ff" }}>Building</span> and
            <span style={{ color: "#34d6ff" }}> Maintaining</span> your dreams
          </p>
        </div>
        <div>
          <p style={{ color: "#fff" }}>
            Fast, friendly home repair service done right the first time!!
          </p>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div
        className="d-none d-md-block"
        style={{ width: "100%", height: "100%" }}
      >
        <TCarousel />
      </div>
    </div>
  );
};

export default Hero;
