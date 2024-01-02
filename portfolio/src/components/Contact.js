import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="container contact">
        <h1 className="heading text-center mt-5">Lets Connect!</h1>
        <br />
        <div className="row">
          <div className="col-lg">
            <form name="contact" method="POST" data-netlify="true">
              <div className="mb-3">
                <label for="contact-name" className="form-label">
                  Your Name:{" "}
                </label>
                <input
                  type="text"
                  name="contact-name"
                  className="form-control"
                  placeholder="Johhny Appleseed"
                />
              </div>
              <div>
                <label for="email" className="form-label">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="user@mydomain.com"
                />
              </div>
              <div>
                <label for="subject" className="form-label">
                  Subject:{" "}
                </label>
                <input type="text" name="subject" className="form-control" />
              </div>
              <div>
                <label for="message" className="form-label">
                  Message:
                </label>
                <textarea name="message" className="form-control"></textarea>
              </div>
              <br />
              <div>
                <button type="submit" className="btn btn-dark">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg">
            <h3>
              <i className="fa-solid fa-envelope"></i> Email
            </h3>
            <p>
              <a
                href="mailto:apilynbonny@gmail.com"
                title="Email Apilyn Bonny's Email"
              >
                apilynbonny@gmail.com
              </a>
            </p>
            <h3>
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </h3>
            <p>
              <a
                href="https://www.linkedin.com/in/apilyn-bonny"
                target="_blank"
                title="Go to Apilyn Bonny's LinkedIn Profile"
              >
                @Apilyn Bonny
              </a>
            </p>
            <h3>
              <i className="fa-brands fa-github"></i> GitHub
            </h3>
            <p className="mb-5">
              <a
                href="https://github.com/apilynb"
                target="_blank"
                title="Go to Apilyn Bonny's GitHub Profile"
              >
                @apilynb
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
