import React from "react";
import skills from "./Skill-set";

const Skills = () => {
  return (
    <main className="main-skills">
      <section id="skill" className="pb-5">
        <div className="container">
          <h5 className="section-title h1" id="skill-set">
            My Skills
          </h5>
          <div className="row">
            {skills.map((skill) => {
              const {
                id,
                text,
                stack,
                image,
                linkedIn,
                facebook,
                github,
                gmail,
                proficiency,
              } = skill;
              const { strength, level, percentage } = proficiency;

              return (
                <div key={id} className="col-xs-12 col-sm-6 col-md-4">
                  <div className="image-flip">
                    <div className="main-flip flip-0">
                      <div className="front-side">
                        <div className="card">
                          <div className="card-body text-center">
                            <p>
                              <img
                                className=" img-fluid"
                                src={image}
                                alt="card"
                              />
                            </p>
                            <h4 className="card-title">{stack}</h4>
                            <p className="card-text">
                              <span className="fw-bold">Strength: </span>
                              <span>{strength}</span> <br />
                              <span className="fw-bold">Level:</span>
                              <span> {level}</span>
                              <br />
                              <span className="fw-bold">Percentage Rate: </span>
                              <span>{percentage}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="backside">
                        <div className="card">
                          <div className="card-body text-center mt-4">
                            <h4 className="card-title">{stack}</h4>
                            <p className="card-text">{text}</p>
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  rel="noreferrer"
                                  href={facebook}
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  rel="noreferrer"
                                  href={linkedIn}
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  rel="noreferrer"
                                  href={github}
                                >
                                  <i className="fa fa-github"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a
                                  className="social-icon text-xs-center"
                                  target="_blank"
                                  rel="noreferrer"
                                  href={`mailto:${gmail}`}
                                >
                                  <i className="fa fa-google"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
