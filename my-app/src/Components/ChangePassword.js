
import React from 'react';
import '../Styles/ChangePassword.css';
import Logo from '../images/4.png'; // Replace with your actual logo path
import ChangePasswordGraphic from '../images/3.jpg'; // Renamed the imported graphic

function ChangePassword() {
  return (
    <div className="change-password-container">
      {/* Form Section */}
      <div className="form-section">
        <div className='form-upper-section'>
          <div className="change-password-logo">
            <img src={Logo} alt="App Logo" />
          </div>
          <h1 className='change-password-text'>Change Password</h1>
          <p className='forget-password-text'>Forgot Password</p>
        </div>

        <form className='change-password-form'>
          <input type="email" placeholder="Enter your email address" />
          <div className="password-input">
            <input type="password" placeholder="Enter your old password" />
            <i className="fas fa-eye"></i>
          </div>
          <div className="password-input">
            <input type="password" placeholder="Enter your new password" />
            <i className="fas fa-eye"></i>
          </div>
          <div className="password-input">
            <input type="password" placeholder="Confirm New Password" />
            <i className="fas fa-eye"></i>
          </div>
          <button type="submit" className="confirm-btn">Confirm New Password</button>
        </form>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img src={ChangePasswordGraphic} alt="Security Graphic" className="graphic-img" />
      </div>
    </div>
  );
}

export default ChangePassword;
