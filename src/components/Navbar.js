import React, { useState } from "react";
import { Link } from "react-router-dom";
import iomplogo from "../images/iomplogo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  const handleProfile = () => {
    if (localStorage.getItem("role") === "student") {
      navigate("/studentProfile");
    } else {
      navigate("/professionalProfile");
    }  
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-md h-5 py-1 fixed-top"
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "2px solid grey", // Add black border at the bottom
        }}
      >
        <a href="/" className="navbar-brand">
          <img
            src={iomplogo}
            alt=""
            style={{ height: "8vh", width: "12vw", paddingRight: "10px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                href="/"
                className="nav-link pl-4 pr-4"
                style={{
                  color: "#013220",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/about"
                className="nav-link pl-4 pr-4"
                style={{
                  color: "#013220",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/features"
                className="nav-link pl-4 pr-4"
                style={{
                  color: "#013220",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/working"
                className="nav-link pl-4 pr-4"
                style={{
                  color: "#013220",
                  fontWeight: "bold",
                  fontSize: "22px",
                }}
              >
                Working
              </a>

                
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
