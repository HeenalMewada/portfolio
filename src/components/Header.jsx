import React from "react";
import "./Header.css";cd 
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
           < FaGithub/> GitHub
          </a>

          <a
            href="www.linkedin.com/in/heenal-mewada-7562a5360"
            target="_blank"

          >
          <FaLinkedin/>  LinkedIn
          </a>

          <button className="btn-resume">
  Resume

</button>        


</div>
      </div>
    

  );
}

export default Header;