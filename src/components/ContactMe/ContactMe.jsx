import React from "react";
import "./ContactMe.css";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactMe() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-content_wrapper">
        <div className="contact-page_heading">
          <h3>{"<Contact/>"}</h3>
          <h4>Get in Touch</h4>
        </div>
        <div className="contact-description">
          <p>
            Feel free to contact me. Please fill out the form below and I will{" "}
            <br />
            get back to you as soon as possible.
          </p>
          <p>
            <MdEmail />
            singhimat99@gmail.com
          </p>
        </div>
        <div className="contact-content">
          {/* <div className="contact-info_container">
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
          </div> */}
          <div className="contact-form_container">
            <form action="" method="post" className="contact-form">
              <div className="form-name">
                <label htmlFor="input_name">Name:</label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  name="Name"
                  id="input_name"
                  class="contact_form-input"
                />
              </div>
              <div className="form-email">
                <label htmlFor="input_email">Email:</label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  name="Email"
                  id="input_email"
                  class="contact_form-input"
                />
              </div>
              <div className="form_message">
                <label htmlFor="input_message">Message:</label>
                <textarea
                  required=""
                  cols="30"
                  rows="10"
                  class="contact_form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="input_message"
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
