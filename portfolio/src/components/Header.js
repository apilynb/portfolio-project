import React from "react";
import { Link } from "react-router-dom";
import ABLogo from './images/AB-logo.svg';

export default function Header() {


  return (
    <nav className="navbar navbar-expand-lg bg-light home-nav-bar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          <img src={ABLogo} alt="Apilyn Bonny Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse home-navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                title="Homepage"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                title="About Apilyn Bonny Page"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                title="Apilyn Bonny's Work"
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                title=" Ways to Contact Apilyn Bonny"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
