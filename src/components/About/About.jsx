import React from "react";
import my_face_grey from "../images/my_face.jpg";
import "./About.css";

export default function About() {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "GIT"];

  return (
    <section className="aboutpage" id="about">
      <div className="about_content">
        <div className="about_content-image">
          <div className="image-of-himatsingh"></div>
        </div>
        <div className="about_content-text">
          <div className="about_content-text-title">
            <h1>{"<About/>"}</h1>
            <h3>Himat Singh</h3>
          </div>
          <p>
            I am a Web Developer with a working profieciency in HTML, CSS, and
            Javascript. I am familiar with mobile-first design concepts and
            working with APIs. I have done both functional programming and
            object-oriented programming. <br /> <br /> I am always eager to grow
            as a developer and learning new things. Currently I am working on
            improving my skills in React and working with API’s. I am also
            interested in writing some server-side code to improve my knowledge
            of the backend.
            <br /> <br /> I would love to work in an environment where I can
            grow as a developer and work on providing real world solutions to
            improve the world we live in!
          </p>
          {/* <h4>SKILLS</h4> */}
          <div className="about_content-text-skills">
            {skills.map((skill, i) => {
              return (
                <div className="single-skill" key={i}>
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
