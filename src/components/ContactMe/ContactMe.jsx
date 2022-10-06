import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-content_wrapper">
        <div className="contact-page_heading">
          <h1>{"<Contact/>"}</h1>
          <h3>Get in Touch</h3>
        </div>
        <div className="contact-content">
          <div className="contact-info_container">
            <h4>Himat Singh</h4>
            <h4>singhimat99@gmail.com</h4>
            <h4>5302087643</h4>
          </div>
          <div className="contact-form_container"></div>
        </div>
      </div>
    </section>
  );
}
