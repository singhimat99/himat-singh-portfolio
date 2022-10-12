import React, { useRef } from "react";
import "./ContactMe.css";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4giz8m5",
        "template_4nwbg37",
        form.current,
        "ThpDWhmxSJ3owe4ym"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert(
      "You have successfully sent me a message! I will get back to you as soon as possible."
    );
    e.target.reset();
  };
  return (
    <section className="contact-page" id="contact">
      <div className="contact-content_wrapper">
        <div className="contact-page_heading">
          <h3>{"<Contact/>"}</h3>
          <h4>Get in Touch</h4>
        </div>
        <div className="contact-description">
          <p>
            Feel free to contact me. Please fill out the form below and I will
            get back to you as soon as possible.
          </p>
          <p>
            <MdEmail />
            singhimat99@gmail.com
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-form_container">
            <form
              action=""
              ref={form}
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="form-name">
                <label htmlFor="input_name">Name:</label>
                <input
                  required
                  placeholder="Enter Your Name"
                  type="text"
                  name="from_name"
                  id="input_name"
                  className="contact_form-input"
                />
              </div>
              <div className="form-email">
                <label htmlFor="input_email">Email:</label>
                <input
                  required
                  placeholder="Enter Your Email"
                  type="email"
                  name="from_email"
                  id="input_email"
                  className="contact_form-input"
                />
              </div>
              <div className="form_message">
                <label htmlFor="input_message">Message:</label>
                <textarea
                  required=""
                  cols="30"
                  rows="10"
                  className="contact_form-input"
                  placeholder="Enter Your Message"
                  name="message"
                  id="input_message"
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="submit-btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="contact-info_container">
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
                  </div> */
}
