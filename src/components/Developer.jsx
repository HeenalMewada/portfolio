import React from "react";
import "./Developer.css"

const statsData = [
  { label: "Projects Created", value: 12 },
  { label: "Technologies Used", value: 8 },
  { label: "Clients Served", value: 5 },
  { label: "Open Source Contributions", value: 3 },
];

export default function DeveloperStats() {
  return (
    <section className="developer-stats">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}