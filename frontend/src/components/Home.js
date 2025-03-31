import React from "react";
import "./home.css"; // Import the CSS file

export default function Home() {
  return (
    <section id="home" className="home-container">
      {/* Welcome Text */}
      <h1 className="welcome-text">Welcome to My Portfolio</h1>

      <div className="home-content">
        {/* About Me Section */}
        <div className="text-section">
          <h2 className="home-heading">Hi, I'm <span className="highlight">Komal Birare</span></h2>
          <p className="home-description">
          I'm Komal Birare<strong> a passionate B.Tech student,I specialize in crafting dynamic, responsive web applications using the latest technologies, from front-end designs to robust back-end systems.</strong> 
           Whether it's developing interactive UIs or designing efficient APIs, I love bringing ideas to life with clean code and seamless user experiences.
          Take a look around to explore my projects, skills, and the exciting work I’ve done so far. Let’s build something amazing together!
          </p>
        </div>

        {/* Profile Picture Section */}
        <div className="image-section">
          <img src="/profile.jpeg" alt="Profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}
