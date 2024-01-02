import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ApilynLogo from './images/Apilyn-logo.svg';
import { Link } from "react-router-dom";

export default function About() {


  return (
    <div>
      <Header />
      <div className="container">
        <div className="row m-5 main-section">
          <div className="col-lg-6 word-section">
            <h1 className="mb-4 heading">Apilyn Bonny</h1>
            <h2 className="based mb-4">
              Frontend Developer, based in New York City
            </h2>
            <p className="text-muted description">
              I am seeking an entry-level Frontend developer position that will
              enable me to use and grow my knowledge in Frontend development. My
              abilities to problem-solve, work on teams, and my desire to learn
              as well as my various skills including HTML5, CSS3, JavaScript,
              React, Responsive Web Development, will all be great assets that I
              intend on using to best contribute to whichever team and company I
              have the pleasure of joining.
            </p>
            <div className="view-btn-div">
              <Link
                className="view-more-btns"
                to="/projects"
                title="View Apilyn's Projects"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="col-lg-6 image">
            <img
              src={ApilynLogo}
              alt="Apilyn Bonny Logo"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}