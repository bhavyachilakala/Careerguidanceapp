import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';  

function Login() {
  return (
    <div className="page-container">
      

      <div className="signup-container">
        <div className="signup-form">
          <h1>Login</h1>
          <form > 
            <table>
              <tbody >
                <tr>
                  <td><label htmlFor="username">Username:</label></td>
                  <td><input type="text" id="username" name="username" required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="email">Email:</label></td>
                  <td><input type="email" id="email" name="email" required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="password">Password:</label></td>
                  <td><input type="password" id="password" name="password" required /></td>
                </tr>
                <tr>
                  <td><label htmlFor="phone">Phone:</label></td>
                  <td><input type="text" id="phone" name="phone" /></td>
                </tr>
                <tr>
                  <td><label htmlFor="address">Address:</label></td>
                  <td><input type="text" id="address" name="address" /></td>
                </tr>
                
                <tr>
                  <td><label htmlFor="dob">Date of Birth:</label></td>
                  <td><input type="date" id="dob" name="dob" /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit">Login</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="reset">Reset</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
