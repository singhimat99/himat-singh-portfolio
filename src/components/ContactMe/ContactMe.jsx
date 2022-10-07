import React from "react";
import "./ContactMe.css";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

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
            <div className="phone">
              <MdCall />
              <h4>{"+1(530) 208-7643"}</h4>
            </div>
            <div className="email">
              <MdEmail />
              <h4>singhimat99@gmail.com</h4>
            </div>
            <div className="location">
              <MdLocationOn />
              <h4>Fremont, California</h4>
            </div>
          </div>
          <div className="contact-form_container">
            <form action="" method="post" className="contact-form">
              <div className="form-name">
                <label htmlFor="input_name">Name:</label>
                <input type="text" name="Name" id="input_name" />
              </div>
              <div className="form-email">
                <label htmlFor="input_email">Email:</label>
                <input type="email" name="Email" id="input_email" />
              </div>
              <div className="form_message">
                <label htmlFor="input_message">Message:</label>
                <input type="text" name="Message" id="input_message" />
              </div>
            </form>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
