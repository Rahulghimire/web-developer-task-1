import React from "react";
import ServicesCard from "../components/ServicesCard";
const Services = () => {
  return (
    <div className="position-relative services-outer-container">
      <div
        className="position-relative services-container"
        style={{ padding: "5rem" }}
      >
        <div className="d-flex align-items-center flex-row">
          <p className="m-0 text-capitalize" style={{ color: "#7e9ece" }}>
            What we are offering
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
            Our Services
          </h1>
        </div>
        <div className="mb-3">
          <p className="m-0 text-capitalize" style={{ color: "#000" }}>
            No job is too big or too small for the crew at Your Business Name
            LLC
          </p>
        </div>
        <div className="services-card-container d-flex flex-row flex-wrap gap-4">
          <ServicesCard maxWidth="400px" headerText="Plumbing" paraText="" />
          <ServicesCard
            maxWidth="400px"
            headerText="Water Treatment"
            paraText=""
          />
          <ServicesCard
            maxWidth="520px"
            headerText="Commercial Property Maintenance"
            paraText=""
          />
          <ServicesCard
            maxWidth="520px"
            headerText="Preventive Maintenance"
            paraText=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
