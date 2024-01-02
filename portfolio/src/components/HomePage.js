import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import reactDictionary from './images/react-dictionary.png';
import reactWeather from './images/react-weather.png';
import weatherImg from './images/weather.png';
import '../App.css';

export default function HomePage() {

  
  return (
    <div>
      <Header />
      <section className="hero">
        <p>👋🏾Hello, I am</p>
        <h1>Apilyn Bonny</h1>
        <h2 className="mb-5">Frontend Developer, based in New York City</h2>
        <div className="hero-button">
          <Link
            to="/contact"
            rel="noopener"
            className="btn btn-light"
            title="Contact Apilyn Bonny"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <div className="container">
        <p className="text-center in-between">
          Featured Projects were coded by Apilyn Bonny and are open-sourced on
          GitHub
        </p>

        <div className="main-body">
          <div className="row sections px-5">
            <div className="col word-section weather-section">
              <h2 className="mb-4">React Weather App</h2>
              <p className="text-muted">
                This Weather App was created using HTML5 and CSS3 with React.
                Using a Weather API, I was able to integrate the weather data.
                Different components were used to display the various sections
                and features of the application. A node package was used to
                integrate the animated react weather icons. A unit conversion
                feature was also integrated in order to transition between
                imperial and metric units of measurement to cater to a variety
                of users and enhance user experience.
              </p>
              <div className="mt-5 view-btn-div">
                <Link
                  to="/projects"
                  rel="noopener"
                  className="view-more-btns mt-5"
                  title="View Weather App Project"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={reactWeather}
                alt="Weather Project Preview"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="row sections px-5">
            <div className="col d-none d-lg-block">
              <img
                src={reactDictionary}
                alt="Dictionary Project Preview"
                className="img-fluid rounded"
              />
            </div>
            <div className="col word-section dictionary-section">
              <h2 className="mb-4">Dictionary Project</h2>
              <p className="text-muted">
                This Dictionary was created using HTML5 and CSS3 with React.
                Using a Dictionary API, I was able to render the dictionary data
                that includes the part(s) of speech, examples of the searched
                word used in sentences, and synonyms which are the most common
                uses for dictionaries. I also used an Image API to display
                images related to the searched word, if any, while also linking
                them to the source for curious users searching for more.
              </p>
              <div className="mt-5 view-btn-div">
                <Link
                  className="view-more-btns mt-5"
                  to="/projects.#dictionary"
                  rel="noopener"
                  title="View Dictionary App Project"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="row mb-5 sections px-5">
            <div className="col word-section dictionary-section">
              <h2 className="mb-4"> Weather App</h2>
              <p className="text-muted">
                This Dictionary was created using HTML5 and CSS3 with React.
                Using a Dictionary API, I was able to render the dictionary data
                that includes the part(s) of speech, examples of the searched
                word used in sentences, and synonyms which are the most common
                uses for dictionaries. I also used an Image API to display
                images related to the searched word, if any, while also linking
                them to the source for curious users searching for more.
              </p>
              <div className="mt-5 view-btn-div">
                <Link
                  className="view-more-btns mt-5"
                  to="/projects#weather-app"
                  rel="noopener"
                  title="View Dictionary App Project"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="col d-none d-lg-block">
              <img
                src={weatherImg}
                alt="Dictionary Project Preview"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}