import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import physics from "../images/physics.png";
import js from "../images/js.png";
import css from "../images/css.png";
import html from "../images/html.png";
import node from "../images/node.png";
import php from "../images/php.png";
import database from "../images/database.png";
import github from "../images/github.png";
import logo from "../images/logo.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <div className="skills-section">
      <motion.h2
        className="text-center mb-5 section_title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skill_cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Frontend */}
        <motion.div className="card" variants={cardVariants}>
          <motion.div
            className="gradient-card"
            whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
          >
            <div className="card-inner">
              <h5 className="mt-2">Frontend</h5>
              <ul>
                <li><img src={html} alt="html" /><br />HTML</li>
                <li><img src={css} alt="css" /><br />CSS</li>
                <li><img src={js} alt="js" /><br />JS</li>
                <li><img src={physics} alt="React" /><br />React</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Backend */}
        <motion.div className="card" variants={cardVariants}>
          <motion.div
            className="gradient-card"
            whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
          >
            <div className="card-inner">
              <h5 className="mt-2">Backend</h5>
              <ul>
                <li><img src={node} alt="node" /><br />Node.js</li>
                <li>
                  <img
                    src="https://cdn.simpleicons.org/express/ffffff"
                    alt="Express.js"
                    width="30"
                  /><br />Express js
                </li>
                <li><img src={php} alt="php" /><br />PHP</li>
                <li><img src={database} alt="sql" /><br />My SQL</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Tools */}
        <motion.div className="card" variants={cardVariants}>
          <motion.div
            className="gradient-card"
            whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
          >
            <div className="card-inner">
              <h5 className="mt-2">Tools</h5>
              <ul>
                <li><img src={github} alt="github" className="dark-icon" /><br />Github</li>
                <li><img src={logo} alt="vscode" className="dark-icon" /><br />VS Code</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Skills;
