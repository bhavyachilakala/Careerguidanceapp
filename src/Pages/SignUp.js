import React from 'react';
import './style.css';  

function SignUp() {
  return (
    <div className="page-container">
      

      <div className="signup-container">
        <div className="signup-form">
          <h1>Sign Up</h1>
          <form>
            <table>
              <tbody>
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
                  <td><label htmlFor="confirm-password">Confirm Password:</label></td>
                  <td><input type="password" id="confirm-password" name="confirm-password" required /></td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit">Sign Up</button>
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

export default SignUp;
