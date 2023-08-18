import React from "react";
import "../index.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Hero from "./Hero";

const Navigation = () => {
  return (
    <>
      <div className="hero-background-image positon-relative">
        <Navbar
          expand="lg"
          className="navbar d-flex align-items-center justify-content-between w-100 py-0"
        >
          <Container
            fluid
            className="d-flex flex-row align-items-center justfy-content-between px-0 mx-4 my-2"
            style={{ zIndex: "1" }}
          >
            <Navbar.Brand
              href="/"
              className="py-0"
              style={{ color: "#fff", fontSize: "2rem", fontWeight: "600" }}
            >
              Business Logo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
              <Nav
                exact="true"
                className="text-white"
                navbarScroll
                style={{ color: "#fff" }}
              >
                <NavLink
                  exact="true"
                  to="/"
                  className="nav-item"
                  activeClassName="active"
                >
                  Home
                </NavLink>
                <NavLink
                  exact="true"
                  to="/about"
                  className="nav-item"
                  activeClassName="active"
                >
                  About
                </NavLink>

                <NavLink
                  to="/projects"
                  className="nav-item"
                  activeClassName="active"
                >
                  Projects
                </NavLink>
                <NavLink
                  exact="true"
                  to="/services"
                  className="nav-item"
                  activeClassName="active"
                >
                  Services
                </NavLink>
                <NavLink
                  exact="true"
                  to="/contact"
                  className="nav-item pe-3"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#34d6ff",
          color: "#fff",
          padding: "2rem 0rem 2rem 4.7rem",
        }}
      >
        <p style={{ fontSize: "3rem", fontWeight: "700" }}>
          20+ Years of Experience
        </p>
      </div>
      <div className="position-absolute top-0 left-0">
        <Hero />
      </div>
    </>
  );
};

export default Navigation;
