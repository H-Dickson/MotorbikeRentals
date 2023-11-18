import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    setName('');
    setEmail('');
    setMessage('');

    setFormSent(true);
  };

  return (
    <div className={styles.contactFormContainer}>
      {formSent ? (
        <form className={styles.formSentMessage}>
          <p>Thank you! Your message has been sent.</p>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <h1>Contact Us</h1>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
