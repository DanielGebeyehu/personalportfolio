import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section className="intro">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>
          Hello, I'm <span>Daniel</span>
        </h2>
        <p>Electrical Engineer | Web Developer | Problem Solver</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
