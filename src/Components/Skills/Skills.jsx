import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = ["Python", "JavaScript", "HTML & CSS", "PSpice", "Cadence Virtuoso", "MATLAB"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="skill"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
