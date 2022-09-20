import React from "react";
import { Parallax } from "react-parallax";
import mountains from "../images/mountain_stars_background.jpg";
import my_face from "../images/my_face.jpg";
import "./Home.css";

export default function Homepage() {
  return (
    <section className="homepage">
      <div className="name-container">
        <p>Hey, I'm Himat</p>
        <h1>I am Web Developer</h1>
      </div>
      <div className="image-container">
        <img src={my_face} alt="image of Himat Singh" className="my-face" />
      </div>
    </section>
  );
}
