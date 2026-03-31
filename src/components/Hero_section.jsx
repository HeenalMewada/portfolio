import React from "react";
import "./Hero_section.css";
import {Link} from "react-router-dom";
import TypingText from "./Typing";
// import { useState } from "react";
import Contact from "./Contact";
import Projectcards from "./Projectcards";


function Hero_section() {
   const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
   
  return (

    <div className="hero_section">
      <div className="left">
        <h2 className="text-5xl font-bold">
          Hii.. 👋  I'm Heenal
        </h2>

        <div className="typingText">
          <TypingText />
        </div>


        <p className="text-gray-600">
          Builds scalable web apps
        </p>

 
<div className="buttons d-flex gap-2">


<button onClick={() => scrollTo("projects")} className="btn btn-primary">View Projects</button>
<button onClick={() => scrollTo("contact")} className="btn btn-success">Contact</button>

   
</div>
      </div>
      <div className="right">
        <div className="codebox-wrapper">
          <div className="codebox-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <div className="codebox-body">
            <p><span className="keyword">const</span> dev = {"{"}</p>
            <p>&nbsp;&nbsp;<span className="key">role</span>: <span className="string">"Full Stack Developer"</span>,</p>
            <p>&nbsp;&nbsp;<span className="key">skills</span>: [<span className="string">"React"</span>, <span className="string">"JS"</span>]</p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Hero_section;