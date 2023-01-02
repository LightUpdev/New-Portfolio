import React from "react";
import profile from "../Images/card-image/Profile_pics.png";

const About = () => {
  return (
    <main className="about-me">
      <section>
        <div className="container">
          <h5 className="section-title h1" id="about">
            About Me
          </h5>
          <p>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="profile-img d-block">
                  <img
                    src={profile}
                    alt="profile"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    className="img-fluid align-center mx-auto"
                    width="350px"
                  />
                  <div className="profile-text text-center ">
                    <h3 className="mt-4">Lenity Stephen</h3>
                    <p>
                      Full Stack Developer
                      <br />
                      <small className="fw-bold">React Js/Laravel 8</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="about-me-text m-5 p-3">
                  <p className="fw-bold">
                    Dedicated worker with excellent communication, time
                    management and computer skills. Aiming to leverage my
                    abilities to successfully fill the vacancy at your company.
                    Frequently praised as hardworking by my peers, I can be
                    relied upon to help your company achieve its goals.
                  </p>
                  <p className="fw-bold">
                    A fullstack developer with 5+ years of experience.
                    I build and maintain websites and web applications, using programming, design tools, and languages such as HTML, CSS, PHP and JavaScript to meet both client and end-user needs.
                  </p>
                </div>
              </div>
            </div>
          </p>
        </div>
      </section>
    </main>
  );
};




export default About