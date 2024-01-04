import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import reactDictionary from "./images/react-dictionary.png";
import reactWeather from "./images/react-weather.png";
import weatherImg from "./images/weather.png";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="projects">
          <h1 className="mb-5">
            Take a look at what I've <br />
            been working on!
          </h1>

          <div className="row sections  projects-sections px-5">
            <div className="col-md-6">
              <a
                href="https://cheery-sprinkles-19de4d.netlify.app"
                alt="React Weather App Project Preview"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <img
                  src={reactWeather}
                  alt="React Weather Project"
                  className="img-fluid react-weather-img"
                />
                <h3 className="text-center project-title">React Weather App</h3>
              </a>
              <p className="text-center text-muted">
                Built with HTML & CSS with React
              </p>
            </div>

            <div className="col-md-6 ">
              <a
                href="https://soft-dolphin-dac899.netlify.app"
                alt="React Dictionary App Project Preview"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <img
                  src={reactDictionary}
                  alt="Dictionary Project"
                  className="img-fluid"
                  id="dictionary"
                />
                <h3 className="text-center project-title">Dictionary App</h3>
              </a>
              <p className="text-center text-muted">
                Built with HTML & CSS with React
              </p>
            </div>
          </div>
          <div className="row sections px-5">
            <div className="col-md-6" id="weather-app">
              <a
                href="https://dreamy-starburst-3b8fcb.netlify.app/"
                alt=" Weather App Project Preview"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <img
                  src={weatherImg}
                  alt="Weather Project"
                  className="img-fluid weather-project-img"
                />
                <h3 className="text-center project-title">Weather App</h3>
              </a>
              <p className="text-center text-muted">
                Built with HTML, CSS, & JavaScript{" "}
              </p>
            </div>

            <h3 className="text-center mt-5 more-projects">
              I'm always working on something so look out for more!
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
