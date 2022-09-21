import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoImage from "../images/my_face_grey.jpg";
import { Link } from "react-scroll";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="nav-container">
      <div className="logo-container">
        {/* <img src={logoImage} alt="logo image" /> */}
        <h3>HS</h3>
      </div>
      <nav className="nav-items" ref={navRef}>
        <Link
          to="home"
          smooth={true}
          offset={200}
          duration={500}
          className="nav-item-link"
        >
          HOME
        </Link>
        <Link
          to="about"
          smooth={true}
          offset={200}
          duration={500}
          className="nav-item-link"
        >
          ABOUT
        </Link>
        <Link
          to="projects"
          smooth={true}
          offset={200}
          duration={500}
          className="nav-item-link"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          smooth={true}
          offset={200}
          duration={500}
          className="nav-item-link"
        >
          CONTACT
        </Link>
        <button className="exit-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
