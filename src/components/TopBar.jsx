import React from "react";
import "../index.css";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar-container pe-3">
      <div className="topbar d-flex flex-row align-items-center justify-content-between py-2 px-4">
        <div className="d-flex flex-row">
          <div className="me-2">Mon-Fri: 9AM - 5PM</div>
          <div className="">yourbusiness@business.com</div>
        </div>
        <div className="d-flex flex-row gap-2">
          <Link to="#" className="anchor-tag">
            <FaInstagram />
          </Link>
          <Link to="#" className="anchor-tag">
            <FaLinkedin />
          </Link>
          <Link to="#" className="anchor-tag">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
