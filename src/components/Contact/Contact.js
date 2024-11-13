import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa'; // Import relevant icons
import './assets/styles/Contact.css'; // Ensure this file exists and is correctly styled

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Feel free to reach out for collaborations or just a friendly chat.</p>
      <div className="contact-info">
        <p>
          <FaEnvelope /> Email: <a href="mailto:tausif1337@gmail.com">tausif1337@gmail.com</a>
        </p>
        <p>
          <FaPhone /> Phone: <a href="tel:+8801748181448">+8801748181448</a>
        </p>
        <p>
          <FaWhatsapp /> WhatsApp: <a href="https://wa.me/8801748181448" target="_blank" rel="noopener noreferrer">+8801748181448</a>
        </p>
        <p>
          <FaLinkedin /> LinkedIn: <a href="https://linkedin.com/in/tausif1337" target="_blank" rel="noopener noreferrer">linkedin.com/in/tausif1337</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;