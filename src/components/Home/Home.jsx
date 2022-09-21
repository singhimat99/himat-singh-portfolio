import React from "react";
import { Parallax } from "react-parallax";
import mountains from "../images/mountain_stars_background.jpg";
import my_face from "../images/my_face.jpg";
import "./Home.css";

export default function Homepage() {
  return (
    <section className="home" id="home">
      <div className="home-background-image"></div>
      <div className="home_content">
        <div className="home_content-text">
          <h4>HEY, I'M HIMAT SINGH</h4>
          <h1>I am a Web Developer</h1>
          <p>
            I am Front End Web developer who focuses on building User Interfaces
            for Web Applications that lead to success of the overall product.
          </p>
          <button>CONTACT ME</button>
        </div>
      </div>
    </section>
  );
}
// <div className="home_content-image-container">
//   <img
//     src={my_face}
//     alt="image of Himat Singh"
//     className="home_content-image"
//   />
