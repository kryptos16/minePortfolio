import React from "react";
import "./Hero.css"; // Create this CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <h1 className="hero-title">Komal Birare</h1>

        <p >
        I am a passionate Full-Stack Web Developer with a strong command of Java and modern web technologies.
         From designing sleek front-end interfaces to building powerful back-end architectures, high-performance applications that make an impact. 
          I turn ideas into reality through clean, efficient code.
          

        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Me</a>
          <a href="#projects" className="btn btn-secondary">Let's Talk</a>
        </div>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="profile-circle">
        <img src="/profile.jpg" alt="Komal Birare" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
