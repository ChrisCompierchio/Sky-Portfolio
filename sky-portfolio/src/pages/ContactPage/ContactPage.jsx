import React from 'react'
import './ContactPage.css';

function ContactPage({ marginTop }) {
  return (
    <div className="page-container" style={{ marginTop: `${marginTop}px` }}>
      <h1 className="pageTitle">Reach Out!</h1>
      <div className="contact-form">
        <input type="text" id="name" name="name" placeholder='Name'/>
        <input type="email" id="email" name="email" placeholder='Email'/>
        <textarea id="message" name="message" placeholder='Message'/>
        <button type="submit">Send</button>
      </div>
    </div>
  );
}

export default ContactPage