import React from "react";
import waterTreatmentImg from "../assets/watertreatment.jpg";
import p3 from "../assets/p3.jpg";
import Button from "../components/Button";
const About = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #fff, #eeeceb)",
      }}
      className="about-container"
    >
      <div
        className="container-fluid"
        style={{
          padding: "5rem 5rem",
          background: "linear-gradient(to right, #fff, #eeeceb)",
        }}
      >
        <div className="row" style={{ maxWidth: "1500px" }}>
          <div className="col-md-6">
            <div className="position-relative">
              <div style={{ maxWidth: "30rem" }}>
                <img
                  src={waterTreatmentImg}
                  alt="waterTreatmentImg"
                  className="img-fluid"
                  style={{
                    boxShadow:
                      "5px 5px 3px #e6e6e6, -5px -5px 3px #e6e6e6, 5px -5px 3px #e6e6e6, -5px 5px 3px #e6e6e6",
                    padding: "0.5rem",
                  }}
                />
              </div>
              <div
                className="position-absolute"
                style={{
                  bottom: "-100px",
                  right: "-2px",
                }}
              >
                <img
                  src={p3}
                  alt="p3"
                  style={{
                    objectFit: "contain",
                    maxWidth: "15rem",
                    maxHeight: "15rem",
                    margin: "1.3rem",
                    boxShadow: "5px 5px 3px #e6e6e6,-5px -5px 3px #e6e6e6",
                  }}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 my-md-0 about-background-image"
            style={{ margin: "5.7rem 0 0 0 " }}
          >
            <div className="">
              <div className="d-flex flex-row align-items-center">
                <p className="m-0" style={{ color: "#7e9ece" }}>
                  About Our Company
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
                  Your Business Name LLC
                </h1>
              </div>
              <div>
                <p className="text-justify">
                  We are locallly owned and operated company with 20 years of
                  industry insurance.We are locallly owned and operated company
                  with 20 years of industry insurance. We are locallly owned and
                  operated company with 20 years.
                </p>
              </div>
              <div>
                <p className="text-justify">
                  We are locallly owned and operated company with 20 years of
                  industry insurance.We are locallly owned and operated company
                  with 20 years of industry insurance. We are locallly owned and
                  operated companye.
                </p>
              </div>
              <div className="mt-1">
                <Button buttonText="Read More" bgColor="#4273c1" color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
