import React from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Header() {

  return (
    <div className="header">

      <h3>&lt;Heenal's Portfolio/&gt;</h3>




      {/* Links */}
      <div className="navlink">
        <a
          href="https://github.com/HeenalMewada"
          target="_blank"
        >
          < FaGithub /> GitHub
        </a>

        <a
          href="www.linkedin.com/in/heenal-mewada-7562a5360"
          target="_blank"

        >
          <FaLinkedin />  LinkedIn
        </a>
        <a href="./Heenal Mewada CV.pdf" target="_blank">
          <button className="btn-resume" >
            Resume

          </button>
        </a>


      </div>
    </div>


  );
}

export default Header;