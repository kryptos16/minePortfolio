import React from "react";
import { FaReact, FaDatabase, FaJava, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import "./Skills.css"; // Import the CSS file

const skills = [
  { name: "Full Stack Development", icon: <FaNodeJs />, level: "Expert" },
  { name: "React.js", icon: <FaReact />, level: "Advanced" },
  { name: "Java Development", icon: <FaJava />, level: "Advanced" },
  { name: "Database Management", icon: <FaDatabase />, level: "Expert" },
  { name: "MongoDB", icon: <SiMongodb />, level: "Intermediate" },
  { name: "MySQL", icon: <SiMysql />, level: "Intermediate" },
  { name: "Express.js", icon: <SiExpress />, level: "Intermediate" },
];

const Skills = () => {
  return (

    <section id="skills" className="skills-container">
  <h2 className="skills-heading">My Skills</h2>
 {/* Skills Content */}
  



 
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;


