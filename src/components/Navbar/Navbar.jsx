import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={styles.nav_container}>
      <h3>Himat Singh</h3>
      <nav className={styles.nav}>
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact Me</a>
        <button></button>
      </nav>
      <button></button>
    </header>
  );
}
