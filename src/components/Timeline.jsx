import React from "react";
import "./Timeline.css";

const glassStyle = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  borderRadius: "16px",
  padding: "16px 20px",
  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
  transition: "all 0.3s ease",
};

const timelineData = [
  {
    title: "Full-Stack Developer",
    company: "Self Learning & Projects",
    duration: "2025 - Present",
    type: "tech",
    points: [
      "Building real-world applications using React, Node.js, Express, MySQL",
      "Developed Job Portal and Swiggy Clone",
      "Focused on responsive UI, API integration, and backend logic",
    ],
  },
  {
    title: "Key Projects",
    company: "Portfolio Work",
    duration: "2025",
    type: "project",
    points: [
      "HMS (Express + Node + MySQL)",
      "Swiggy Clone (Frontend + API integration)",
      "To-Do App (CRUD + Local Storage)",
    ],
  },
  {
    title: "Office Admin",
    company: "Golden Manpower consultants",
    duration: "2022 - Present",
    type: "non-tech",
    points: [
      "Managed daily office operations and coordination",
      "Handled documentation, scheduling, and communication",
      "Developed strong organizational and multitasking skills",
    ],
  },
];

const badgeColor = {
  tech: { background: "#2563eb", color: "#fff" },
  project: { background: "#16a34a", color: "#fff" },
  "non-tech": { background: "#6b7280", color: "#fff" },
};

const Timeline = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 className="section_title">Experience & Timeline</h2>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content" style={glassStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <h5 className="timeline-title">{item.title}</h5>
                <span style={{
                  ...badgeColor[item.type],
                  padding: "3px 10px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}>
                  {item.type === "tech" ? "Tech" : item.type === "project" ? "Projects" : "Non-Tech"}
                </span>
              </div>

              <p className="timeline-company">{item.company}</p>
              <small className="timeline-duration">{item.duration}</small>

              <ul className="timeline-points">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
