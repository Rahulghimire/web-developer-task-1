import React from "react";
import p4 from "../assets/p4.jpg";
import p2 from "../assets/p2.jpg";
import p5 from "../assets/p5.jpg";

const Projects = () => {
  return (
    <div style={{ padding: "0 0 0 0" }}>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex align-items-center flex-row">
          <p className="m-0 text-capitalize" style={{ color: "#7e9ece" }}>
            Honorable Mentions
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
            Featured Projects
          </h1>
        </div>
        <div className="mb-3">
          <p className="m-0 text-capitalize" style={{ color: "#000" }}>
            Some of the projects Business Name Required
          </p>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap">
        <div
          className="card-1 position-relative"
          style={{
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        >
          <div
            className="position-absolute text-white "
            style={{ top: "5px", right: "0", textAlign: "right" }}
          >
            <h4
              className=""
              style={{ padding: "10px 10px 0 0", fontWeight: "800" }}
            >
              Project Title 01
            </h4>
            <span className="text-right" style={{ padding: "10px 10px 0 0" }}>
              Jan 15, 2020
            </span>
          </div>
          <img
            src={p4}
            alt="service-image"
            className="img-fluid object-cover"
            width={267}
            height={267}
          />
        </div>
        <div
          className="card-2  position-relative"
          style={{
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        >
          <div
            className="position-absolute text-white "
            style={{ top: "5px", right: "0", textAlign: "right" }}
          >
            <h4
              className=""
              style={{ padding: "10px 10px 0 0", fontWeight: "800" }}
            >
              Project Title 02
            </h4>
            <span className="text-right" style={{ padding: "10px 10px 0 0" }}>
              Jan 15, 2020
            </span>
          </div>
          <img
            src={p2}
            alt="service-image"
            className="img-fluid object-cover"
            width={283}
            height={283}
          />
        </div>
        <div
          className="card-3  position-relative"
          style={{
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        >
          <div
            className="position-absolute text-white "
            style={{ top: "5px", right: "0", textAlign: "right" }}
          >
            <h4
              className=""
              style={{ padding: "10px 10px 0 0", fontWeight: "800" }}
            >
              Project Title 03
            </h4>
            <span className="text-right" style={{ padding: "10px 10px 0 0" }}>
              Jan 15, 2020
            </span>
          </div>
          <img
            src={p5}
            alt="service-image"
            className="img-fluid obect-cover"
            width={283}
            height={283}
          />
        </div>
        <div
          className="card-4 position-relative"
          style={{
            maxWidth: "700px",
            maxHeight: "700px",
          }}
        >
          <div
            className="position-absolute text-white "
            style={{ top: "5px", right: "0", textAlign: "right" }}
          >
            <h4
              className=""
              style={{ padding: "10px 10px 0 0", fontWeight: "800" }}
            >
              Project Title 04
            </h4>
            <span className="text-right" style={{ padding: "10px 10px 0 0" }}>
              Jan 15, 2020
            </span>
          </div>
          <img
            src={p4}
            alt="service-image"
            className="img-fluid obect-cover"
            width={267}
            height={267}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
