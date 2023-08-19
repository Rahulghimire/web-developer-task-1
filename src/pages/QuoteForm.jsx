import React from "react";

const QuoteForm = () => {
  return (
    <div className="position-relative">
      <div className="">
        <div className="position-relative quote-form-container">
          <div style={{ padding: "3.1rem 5rem" }}>
            <div className="d-flex align-items-center flex-row justify-content-center">
              <p className="m-0 text-capitalize" style={{ color: "#34d6ff" }}>
                Hame some work for us?
              </p>
              <div className="line ms-2 p-0 m-0"></div>
            </div>
            <div>
              <h1
                className="text-capitalize text-center text-white"
                style={{
                  color: "#4273c1",
                  fontSize: "3.5rem",
                  fontWeight: "800",
                }}
              >
                Request a quote today
              </h1>
            </div>
            <div className="mb-2">
              <p
                className="m-0 text-capitalize text-center text-white"
                style={{ color: "#000" }}
              >
                Please contact us with all your water needs. We look forward to
                serving you
              </p>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            className="d-flex flex-row flex-wrap justify-content-between"
            style={{ padding: "5.5rem 5rem" }}
          >
            <div
              className="col-md-5 position-absolute "
              style={{ top: "-45px", zIndex: "0", backgroundColor: "#fff" }}
            >
              <div
                className="form"
                style={{
                  boxShadow: "7px 7px #bbf1ff",
                  border: "1px solid #dbdbdb",
                  padding: "1.5rem",
                }}
              >
                <h3
                  className="text-capitalize mb-2"
                  style={{ color: "#4273c1", fontWeight: "800" }}
                >
                  Request a Free quote
                </h3>
                <form>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      max={10}
                      className="form-control"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Service Title"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Service Description"
                    ></textarea>
                  </div>
                  <div
                    className="form-group "
                    style={{ width: "100%", marginBottom: "6rem" }}
                  >
                    <button
                      style={{
                        color: "#fff",
                        padding: "0.8rem 1.8rem",
                        border: "none",
                        backgroundColor: "#4273c1",
                        width: "100%",
                      }}
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="offset-md-6 position-relative quote-form-margin"
              style={{ padding: "0 0 0 1.6rem" }}
            >
              <div className="d-flex align-items-center flex-row">
                <p className="m-0 text-capitalize" style={{ color: "#7e9ece" }}>
                  Visit Our Office
                </p>
                <div className="line ms-2 p-0 m-0"></div>
              </div>
              <div>
                <h4
                  className=""
                  style={{
                    color: "#4273c1",
                    fontSize: "2rem",
                    fontWeight: "800",
                  }}
                >
                  Our Main Office
                </h4>
              </div>
              <div className="mb-3">
                <p className="m-0 text-capitalize" style={{ color: "#000" }}>
                  You are welcome to visit our office during office hour. Find
                  details of our location and our business details below.
                </p>
              </div>
              <div
                className="p-0 mb-3"
                style={{
                  backgroundColor: "#dbdbdb",
                  width: "150px",
                  height: "1px",
                }}
              ></div>
              <div>
                <div>
                  <p>
                    Address:
                    <span className="ms-2" style={{ color: "#5e5458" }}>
                      LaPorte, IN 46350
                    </span>
                  </p>
                  <p>
                    Phone:
                    <span className="ms-2" style={{ color: "#5e5458" }}>
                      (123) 123-1234
                    </span>
                  </p>
                  <p>
                    Business Hours:
                    <span className="ms-2" style={{ color: "#5e5458" }}>
                      Mon-Fri: 9am-5pm
                    </span>
                  </p>
                  <p>
                    Email Address:
                    <span className="ms-2" style={{ color: "#5e5458" }}>
                      yourbusiness@business.com
                    </span>
                  </p>
                </div>
                <div>
                  <div>
                    <p
                      style={{
                        color: "#4273c1",
                        fontSize: "1.5rem",
                        fontWeight: "800",
                      }}
                    >
                      Area Covered
                    </p>
                  </div>
                  <div>
                    <p className="mb-0">LaPorte Counties</p>
                    <p className="mb-0">Porter Counties</p>
                    <p className="mb-0">Michigan City</p>
                    <p className="mb-0">Michigan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
