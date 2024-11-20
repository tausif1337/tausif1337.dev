import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './assets/styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Feel free to contact me; submit your queries here, and I will get back to you as soon as possible.</p>
          <p><FaPhone /> <span>Phone:</span> <a href="tel:+8801748181448">+8801748181448</a></p>
          <p><FaEnvelope /> <span>Email:</span> <a href="mailto:tausif1337@gmail.com">tausif1337@gmail.com</a></p>
          <p><FaWhatsapp /> <span>WhatsApp:</span> <a href="https://wa.me/8801748181448" target="_blank" rel="noopener noreferrer">+8801748181448</a></p>
          <p><FaMapMarkerAlt />Narayanganj, Dhaka, Bangladesh</p>
          <div className="social-handles">
            <h4>Follow Me</h4>
            <a href="https://linkedin.com/in/tausif1337" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/yourTwitterHandle" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/yourInstagramHandle" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com/yourFacebookHandle" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Me Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
