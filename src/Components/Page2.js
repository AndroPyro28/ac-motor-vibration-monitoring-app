import React, { useState } from 'react';
import { FaFacebook, FaEnvelope, FaInstagram, FaTwitter, } from 'react-icons/fa';
import "../Styles/home.css"

const Page2 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div className="contact-container">
        <div className="contact-form">
          <h2 className="contact-heading">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit1">Submit</button>
            <div className="social-logos">
            <a href="https://www.facebook.com"><FaFacebook /></a>
              <a href="mailto:example@example.com"><FaEnvelope /></a>
              <a href="https://www.instagram.com"><FaInstagram /></a>
              <a href="https://www.twitter.com"><FaTwitter /></a>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Page2;