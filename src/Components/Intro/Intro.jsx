import React from "react";

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <h2>
          Hello, I'm <span>Daniel</span>
        </h2>
        <p>Electrical Engineer | Web Developer | Problem Solver</p>
        <a href="#projects" className="button">
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Intro;
