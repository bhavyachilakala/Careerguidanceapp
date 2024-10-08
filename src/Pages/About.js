import React from 'react';

const AboutUs = () => {
  // Inline styles for the table
  const tableStyle = {
    width: '80%',
    margin: 'auto',
    borderCollapse: 'collapse',
    marginTop: '20px',
    border: '1px solid #ccc',
    backgroundColor: 'purple', // Set table background to black
    color: 'white' // Set text color to white for visibility
  };

  const thStyle = {
    backgroundColor: '#444', // Dark gray for header background
    padding: '12px',
    textAlign: 'left',
    border: '1px solid #ddd'
  };

  const tdStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    textAlign: 'left'
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <p style={{ textAlign: 'center' }}>
        Welcome to our website! Here’s a brief overview of our functionalities:
      </p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Feature</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>User Registration</td>
            <td style={tdStyle}>Allows users to create an account on the platform.</td>
          </tr>
          <tr>
            <td style={tdStyle}>User Login</td>
            <td style={tdStyle}>Secure login for returning users to access their accounts.</td>
          </tr>
          <tr>
            <td style={tdStyle}>Profile Management</td>
            <td style={tdStyle}>Users can manage their personal information and preferences.</td>
          </tr>
          <tr>
            <td style={tdStyle}>Career Guidance</td>
            <td style={tdStyle}>Provides personalized career advice based on user profiles.</td>
          </tr>
          <tr>
            <td style={tdStyle}>Contact Support</td>
            <td style={tdStyle}>Users can reach out for help through our contact form.</td>
          </tr>
          <tr>
            <td style={tdStyle}>Service Overview</td>
            <td style={tdStyle}>Detailed information about services offered by the platform.</td>
          </tr>
          <tr>
            <td style={tdStyle}>About Us</td>
            <td style={tdStyle}>Information about our mission and values.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AboutUs;
