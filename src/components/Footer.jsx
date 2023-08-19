import React from "react";
import { Link } from "react-router-dom";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div
        style={{ padding: "4rem 5rem 5rem 5rem", backgroundColor: "#4273c1" }}
      >
        <div className="row">
          <div className="col col-md-3">
            <div
              className="mb-3 mb-sm-3"
              style={{ backgroundColor: "#fff", padding: "2rem" }}
            >
              <h4 className="mb-2" style={{ color: "#0d6efd" }}>
                Business Logo
              </h4>
              <p>
                Locally owned and opearted company with 20 years of industry
                experience. We value honesty and integrity in all aspects of our
                business
              </p>
            </div>
          </div>
          <div className="col col-md-3">
            <div>
              <div>
                <h4 style={{ color: "#34d6ff" }}>Quick Links</h4>
              </div>
              <div>
                <ul className="list-unstyled text-white">
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">About Us</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Portfolio</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Testimonials</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Service</li>
                  </Link>
                  <li className="mb-1">Contact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md-3">
            <div>
              <div>
                <h4 style={{ color: "#34d6ff" }}>Get In Touch</h4>
              </div>
              <div>
                <ul className="list-unstyled text-white">
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">About Us</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Portfolio</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Testimonials</li>
                  </Link>
                  <Link className="text-decoration-none text-white">
                    <li className="mb-1">Service</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md-3">
            <div>
              <div>
                <h4 style={{ color: "#34d6ff" }}>Basic Info</h4>
              </div>
              <div>
                <ul className="list-unstyled text-white">
                  <li className="mb-1">
                    <MdPlace />
                    <span className="ms-2">La Porte, IN 46350</span>
                  </li>
                  <li className="mb-1">
                    <FaPhone />
                    <span className="ms-2">(123) 123-1234</span>
                  </li>
                  <li className="mb-1">
                    <MdEmail />
                    <span className="ms-2">yourbusiness@business.comd</span>
                  </li>
                  <li className="mb-1">
                    <MdAccessTime />
                    <span className="ms-2">Mon-Fri: 9 AM - 5 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "0.6rem 5rem", backgroundColor: "#24437c" }}>
        <div className="d-flex flex-row flex-wrap justify-content-between">
          <div>
            <p className="text-white">
              Copyright <RiCopyrightLine />
              2023- All rights reserved. Designed by
              <Link to="/" className="text-white ms-1">
                Uptech Solutions
              </Link>
            </p>
          </div>
          <div className="d-flex flex-row gap-2">
            <div className="text-white">
              <FaFacebook
                style={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  padding: "2px",
                }}
              />
            </div>
            <div className="text-white">
              <FaInstagram
                style={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  padding: "2px",
                }}
              />
            </div>
            <div className="text-white">
              <FaLinkedin
                style={{
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  padding: "2px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
