import React from 'react';
import '../Styles/ChangePassword.css';
import Logo from '../images/4.png'; // Replace with your logo path
import ChangePasswordGraphic from '../images/3.jpg'; // Replace with your graphic path

function ChangePassword() {
  return (
    <div className="change-password-container">
      {/* Form Section */}
      <div className="form-section">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h1 className="change-password-title">Change Password</h1>
        <form className="change-password-form">
          <div className="input-group">
            <div className="password-input">
              <input
                type="password"
                id="old-password"
                placeholder="Enter your old password"
                required
              />
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <div className="input-group">
            <div className="password-input">
              <input
                type="password"
                id="new-password"
                placeholder="Enter your new password"
                required
              />
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        <p className="back-to-login">
          Back to <a href="/login">Sign In</a>
        </p>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={ChangePasswordGraphic}
          alt="Change Password Graphic"
          className="graphic-img"
        />
      </div>
    </div>
  );
}

export default ChangePassword;
