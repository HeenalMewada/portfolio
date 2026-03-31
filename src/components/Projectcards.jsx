import React from "react";
import "./Project.css";
import swiggy from "../images/swiggy.png";
import hms from "../images/hms.png";
import todo from "../images/todo.png";
function Projectcards() {
    return (
        <div className="projects" id="projects">
            <h2 className="text-center mb-5 fw-bold section_title">Recent Work</h2>
            <div className="project_cards">
                <div className="project_card">
                    <img src={swiggy} alt="" />
                    <div className="title">
                        Swiggy Clone | React Application
                    </div>
                    <div className="description">
                        <p>Swiggy Clone
Food ordering web app with dynamic restaurant listing and real-time data using API integration.</p>
                    </div>
<div className="live_links">
    <a href="https://swiggy-clone-react-ebon.vercel.app/" target="_blank" className="btn btn-primary">Live</a>
    <a href="https://github.com/HeenalMewada/Swiggy_cloneReact" target="_blank" className="btn btn-success">Github</a>
</div>
                </div>
                <div className="project_card">
                    <img src={hms} alt="" />
                    <div className="title">
                        HMS | Fullstack (in progress)
                    </div>
                    <div className="description">
                       
<p>Web-based system to manage doctor appointments, patient records, and scheduling.   </p>                 </div>
<div className="live_links">
    
    <a href="https://github.com/HeenalMewada" target="_blank" className="btn btn-success">Github</a>
</div>
                </div>  
                <div className="project_card">
                    <img src={todo} alt="" />
                    <div className="title">
                       To-Do List Application
                    </div>
                    <div className="description">
                        <p>Interactive task management app with CRUD functionality and persistent data storage</p>
                    </div>
<div className="live_links">
    <a href="https://swiggy-clone-react-ebon.vercel.app/" target="_blank" className="btn btn-primary">Live</a>
    <a href="https://github.com/HeenalMewada/Swiggy_cloneReact" target="_blank" className="btn btn-success">Github</a>
</div>
                </div>                             
            </div>
        </div>
    )
}

export default Projectcards;