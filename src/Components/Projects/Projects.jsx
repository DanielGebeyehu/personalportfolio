import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: (
        <a
          style={{ textDecoration: "none", color: "red" }}
          href="https://teal-brigadeiros-7b5eee.netlify.app/"
        >
          Nelfix-Clone
        </a>
      ),
      desc: "Netflix Clone",
    },
    {
      title: (
        <a
          style={{ textDecoration: "none", color: "Orange" }}
          href="https://amazoncloo.netlify.app/"
        >
          Amazon-Clone
        </a>
      ),
      desc: "Netflix Clone",
    },
    {
      title: (
        <a
          style={{ textDecoration: "none", color: "Black" }}
          href="https://danielgebeyehu.com/"
        >
          First Portfolio
        </a>
      ),
      desc: "Portfolio",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.title}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
