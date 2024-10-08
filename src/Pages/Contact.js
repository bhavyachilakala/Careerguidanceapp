import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const formRef = useRef(null); // Create a reference for the form

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Your message has been sent!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    // Reset the form after submission
    formRef.current.reset();
  };

  const handleReset = () => {
    // Reset the form fields
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleWhatsAppClick = () => {
    // Redirecting to WhatsApp with a pre-defined message
    const message = 'Hello, I need assistance with...'; // Customizable message
    const phoneNumber = '9392665386'; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <form ref={formRef} onSubmit={handleEmailSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Name:</label>
          <input type="text" name="name" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Email:</label>
          <input type="email" name="email" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Message:</label>
          <textarea name="message" required style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }} />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#ee82ee', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginBottom: '10px' }}>
          Send Email
        </button>
        <button type="button" onClick={handleReset} style={{ width: '100%', padding: '10px', backgroundColor: '#6a5acd', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Reset Form
        </button>
      </form>
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Or Contact Us Via WhatsApp</h2>
      <button onClick={handleWhatsAppClick} style={{ width: '100%', padding: '10px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Message Us on WhatsApp
      </button>
    </div>
  );
};

export default Contact;
