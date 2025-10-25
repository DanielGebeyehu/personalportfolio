import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Daniel Gebeyehu</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
}

export default Navbar;
