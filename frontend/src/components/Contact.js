import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",  // Replace with your EmailJS Service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
      e.target,
      "YOUR_PUBLIC_KEY"   // Replace with your EmailJS Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => alert("Failed to send message. Please try again."));
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Get in Touch</h2>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/komal-birare-78239b2b8" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://github.com/kryptos16" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button type="submit" className="send-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}
