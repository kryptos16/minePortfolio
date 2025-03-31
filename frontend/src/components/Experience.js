import React, { useState } from "react";
import "./experience.css";

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      title: "Intern at Unified Mentor Pvt. Ltd. (Ongoing)",
      duration: "📅 [15/01/2025] - [15/05/2025]",
      role: "Full Stack Web Developer",
      description: "Worked on real-world projects as a Web Developer Intern.",
      projects: [
        "Basic Calculator – JavaScript-based arithmetic calculator",
        "Personal Portfolio Website – Responsive & modern portfolio",
        "Chat Application – Real-time messaging with authentication",
        "Music Player – Playlist management & audio controls",
        "Countdown Timer – Tracks important events in real-time",
      ],
      skills: ["MERN Stack", "React.js", "JavaScript", "Database Management"],
    },
    {
      id: 2,
      title: "Intern at Virunexa",
      duration: "📅 [10/02/2025] - [10/03/2025]",
      role: "Java Developer",
      description:
        "Worked on Java-based applications, tackling real-world development challenges.",
      projects: [
        "Java Task Management – Weekly reviews & progress tracking",
        "Core Java Development – Implemented scalable backend solutions",
      ],
      skills: ["Java", "Spring Boot", "SQL", "API Development"],
    },
  ];

  const handleExperienceClick = (id) => {
    setActiveExperience(activeExperience === id ? null : id);
  };

  return (
    <section id="experience" className="experience-container">
      <h2 className="section-heading">My Experience</h2>

      {experiences.map((exp) => (
        <div key={exp.id} className="experience-card">
          <div
            className="experience-header"
            onClick={() => handleExperienceClick(exp.id)}
          >
            <h3 className="experience-title">{exp.title}</h3>
            <p className="experience-duration">{exp.duration}</p>
          </div>

          <p className="experience-description">{exp.description}</p>

          {activeExperience === exp.id && (
            <div className="experience-details">
              <h4>Projects:</h4>
              <ul>
                {exp.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
              <h4>Skills:</h4>
              <div className="skill-tags">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
