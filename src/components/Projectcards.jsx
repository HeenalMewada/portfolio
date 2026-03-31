import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import swiggy from "../images/swiggy.png";
import hms from "../images/hms.png";
import todo from "../images/todo.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Projectcards() {
  return (
    <div className="projects" id="projects">
      <motion.h2
        className="text-center mb-5 fw-bold section_title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Recent Work
      </motion.h2>

      <motion.div
        className="project_cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Swiggy Clone */}
        <motion.div
          className="project_card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <img src={swiggy} alt="Swiggy Clone" />
          <div className="title">Swiggy Clone | React Application</div>
          <div className="description">
            <p>
              Swiggy Clone — Food ordering web app with dynamic restaurant
              listing and real-time data using API integration.
            </p>
          </div>
          <div className="live_links">
            <a
              href="https://swiggy-clone-react-ebon.vercel.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
            <a
              href="https://github.com/HeenalMewada/Swiggy_cloneReact"
              target="_blank"
              className="btn btn-success"
            >
              Github
            </a>
          </div>
        </motion.div>

        {/* HMS */}
        <motion.div
          className="project_card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <img src={hms} alt="HMS" />
          <div className="title">HMS | Fullstack (in progress)</div>
          <div className="description">
            <p>
              Web-based system to manage doctor appointments, patient records,
              and scheduling.
            </p>
          </div>
          <div className="live_links">
            <a
              href="https://github.com/HeenalMewada"
              target="_blank"
              className="btn btn-success"
            >
              Github
            </a>
          </div>
        </motion.div>

        {/* To-Do List */}
        <motion.div
          className="project_card"
          variants={cardVariants}
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <img src={todo} alt="To-Do List" />
          <div className="title">To-Do List Application</div>
          <div className="description">
            <p>
              Interactive task management app with CRUD functionality and
              persistent data storage.
            </p>
          </div>
          <div className="live_links">
            <a
              href="https://swiggy-clone-react-ebon.vercel.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Live
            </a>
            <a
              href="https://github.com/HeenalMewada/Swiggy_cloneReact"
              target="_blank"
              className="btn btn-success"
            >
              Github
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}

export default Projectcards;
