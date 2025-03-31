import React from "react";
import { FaCalculator, FaUser, FaComments, FaMusic, FaClock } from "react-icons/fa";
import "./projects.css";

export default function Projects() {
  const projectData = [
    {
      icon: <FaCalculator className="project-icon" />,
      title: "Basic Calculator",
      description: "A web-based calculator using JavaScript for arithmetic operations.",
    },
    {
      icon: <FaUser className="project-icon" />,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio showcasing skills, projects, and experience.",
    },
    {
      icon: <FaComments className="project-icon" />,
      title: "Chat Application",
      description: "A real-time messaging app with authentication, database integration, and WebSockets.",
    },
    {
      icon: <FaMusic className="project-icon" />,
      title: "Music Player",
      description: "A dynamic music streaming web app with playlist management and audio controls.",
    },
    {
      icon: <FaClock className="project-icon" />,
      title: "Countdown Timer",
      description: "A customizable countdown timer for tracking important events.",
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            {project.icon}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
