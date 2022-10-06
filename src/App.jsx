import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
