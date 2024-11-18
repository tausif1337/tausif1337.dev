import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import './assets/styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="intro-text">I’d love to hear from you! Whether it's a project, collaboration, or just a friendly chat, feel free to reach out.</p>
      <div className="contact-container">
        <div className="contact-info">
          <p>
            <FaEnvelope /> <span>Email:</span> <a href="mailto:tausif1337@gmail.com">tausif1337@gmail.com</a>
          </p>
          <p>
            <FaPhone /> <span>Phone:</span> <a href="tel:+8801748181448">+8801748181448</a>
          </p>
          <p>
            <FaWhatsapp /> <span>WhatsApp:</span> <a href="https://wa.me/8801748181448" target="_blank" rel="noopener noreferrer">+8801748181448</a>
          </p>
          <p>
            <FaLinkedin /> <span>LinkedIn:</span> <a href="https://linkedin.com/in/tausif1337" target="_blank" rel="noopener noreferrer">linkedin.com/in/tausif1337</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
