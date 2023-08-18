import React from "react";
import waterTreatmentImg from "../assets/watertreatment.jpg";
import p3 from "../assets/p3.jpg";
const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative">
            <div>
              <img
                src={waterTreatmentImg}
                alt="waterTreatmentImg"
                className="img-fluid"
              />
            </div>
            <div className="position-absolute bottom-0" style={{}}>
              <img
                src={p3}
                alt="p3"
                style={{
                  objectFit: "contain",
                  maxWidth: "25rem",
                  maxHeight: "25rem",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <div>About Our Company</div>
            <div>
              <h1>Your Business Name LLC</h1>
            </div>
            <div>
              <p>
                We are locallly owned and operated company with 20 years of
                industry insurance.We are locallly owned and operated company
                with 20 years of industry insurance. We are locallly owned and
                operated company with 20 years of industry insurance. We are
                locallly owned and operated company with 20 years of industry
                insurance.
              </p>
            </div>
            <div>
              <p>
                We are locallly owned and operated company with 20 years of
                industry insurance.We are locallly owned and operated company
                with 20 years of industry insurance. We are locallly owned and
                operated company with 20 years of industry insurance. We are
                locallly owned and operated company with 20 years of industry
                insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
