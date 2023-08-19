import React from "react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import man from "../assets/man.jpg";
const Testimonials = () => {
  return (
    <div className="" style={{ padding: "0 5rem 5rem 5rem" }}>
      <div className="d-flex flex-row flex-wrap justify-content-between">
        <div className="testimonials-left">
          <div className="d-flex align-items-center flex-row">
            <p className="m-0 text-capitalize" style={{ color: "#7e9ece" }}>
              What our clients say
            </p>
            <div className="line ms-2 p-0 m-0"></div>
          </div>
          <div>
            <h1
              className=""
              style={{
                color: "#4273c1",
                fontSize: "3.5rem",
                fontWeight: "800",
              }}
            >
              Client's Testimonials
            </h1>
          </div>
          <div className="mb-3">
            <p className="m-0 text-capitalize" style={{ color: "#000" }}>
              Here's what our Customers are saying about Your Business Name LLC
            </p>
          </div>
        </div>
        <div className="testimonials-right position-relative mx-3 mx-md-3">
          <TestimonialCarousel />
          <div
            style={{
              position: "absolute",
              bottom: "-70px",
              left: "-89px",
              zIndex: "1",
            }}
          >
            <img
              src={man}
              alt="man"
              width={100}
              height={100}
              style={{
                border: "10px solid #38d2fb",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
