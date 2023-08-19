import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ServicesCard = ({ maxWidth, headerText, paraText }) => {
  return (
    <div
      className="services-card"
      style={{ maxWidth: maxWidth, backgroundColor: "#fff" }}
    >
      <div>
        <h2 style={{ color: "#5692d3" }}>{headerText}</h2>
      </div>
      <div>
        <p>
          <span className="d-inline pe-1" style={{ fontWeight: "500" }}>
            Business Name
          </span>
          employs access to an exclusive team of certified plumbing
          contarctors,with 24-hour plumbing services available at cost-efficient
          pricing.
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <button
          style={{
            color: "#7fe5ff",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          View More
          <span
            className="ms-1"
            style={{
              color: "#7fe5ff",
            }}
          >
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ServicesCard;
