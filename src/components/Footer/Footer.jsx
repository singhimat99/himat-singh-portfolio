import React, { useRef } from "react";
import { Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  const navRef = useRef();
  return (
    <footer className="footer">
      <div className="footer-content_container">
        <div className="footer-heading">
          <h4>Himat Singh</h4>
          <p>
            I am Front End Web developer who focuses on building User Interfaces{" "}
            <br />
            for Web Applications that lead to success of the overall product.
          </p>
        </div>
        <div className="footer-nav">
          <ul className="nav-list-items">
            <li>
              <Link
                to="home"
                smooth={true}
                offset={-200}
                duration={500}
                id="footer_nav-item-link"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-70}
                duration={700}
                id="footer_nav-item-link"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={700}
                id="footer_nav-item-link"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                offset={200}
                duration={700}
                id="footer_nav-item-link"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <ul className="socials-list">
            <li>
              <a href="#">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="#">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>
            Made by <a href="/">Himat Singh</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
