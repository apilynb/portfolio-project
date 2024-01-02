import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div>
        <section className="row footer m-5">
          <div className="col-md-6 main-footer d-flex justify-content-center">
            <p>
              <span className="heading"> Work Inquiry</span>
              <br />
              Lets get in touch and work together!
            </p>
          </div>
          <div className="col-md-6 footer-link">
            <Link to="/contact" title="Get in touch with Apilyn Bonny">
              Get in Touch
            </Link>
          </div>
        </section>
        <div className="email-div">
          <a
            className="email"
            href="mailto:apilynbonny@gmail.com"
            title="Connect with Apilyn Bonny by Email"
          >
            apilynbonny@gmail.com
          </a>
        </div>
        <div className="icons mb-4">
          <a
            href="mailto:apilynbonny@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="Email Apilyn Bonny"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/apilyn-bonny"
            target="_blank"
            rel="noreferrer"
            title="Apilyn's LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/apilynb"
            target="_blank"
            rel="noreferrer"
            title="Apilyn's GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <p className="text-center mb-5 my-tag">
        This Portfolio was created by Apilyn Bonny is open-sourced on{" "}
        <span>
          <a
            href="https://github.com/apilynb/portfolio-project"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository for this Project"
          >
            GitHub
          </a>
        </span>
      </p>
    </div>
  );
}
