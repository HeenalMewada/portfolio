import React from "react";
import "./Skills.css";
import physics from "../images/physics.png"
import js from "../images/js.png"
import css from "../images/css.png"
import html from "../images/html.png"
import node from "../images/node.png"
import php from "../images/php.png"
import database from "../images/database.png"
import github from "../images/github.png"
import logo from "../images/logo.png"

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="text-center mb-5 section_title">Skills</h2>

     <div className="skill_cards">
        <div className="card">
            <div className="gradient-card">
          <div className="card-inner">
<h5 className="mt-2">Frontend</h5>
<ul>
    <li><img src={html} alt="" / ><br></br>HTML</li>
    <li><img src={css} alt="" /><br></br>CSS</li>
    <li><img src={js} alt=""  /><br></br>JS</li>
    <li><img src={physics} alt=""  /><br></br>React</li>
</ul>
</div>
</div>
</div>
       <div className="card">
        <div className="gradient-card">
          <div className="card-inner">
<h5 className="mt-2">Backend</h5>
<ul>
    <li><img src={node} alt="" /><br></br>Node.js</li>
    <li><img 
  src="https://cdn.simpleicons.org/express/ffffff" 
  alt="Express.js" 
  width="30" 
/><br></br>Express js</li>
    <li><img src={php} alt="" /><br></br>PHP</li>
    <li><img src={database} alt="" /><br></br>My SQL</li>
</ul>
</div>
</div>
</div>
      <div className="card">
        <div className="gradient-card">
          <div className="card-inner">
<h5 className="mt-2">Tools</h5>
<ul>
    <li><img src={github} alt="" className="dark-icon" /><br></br>Github</li>
    <li><img src={logo} alt=""  className="dark-icon" /><br></br>VS Code</li>
    
</ul>
</div>
</div>
</div>
     </div>

      </div>
  );
}



export default Skills;