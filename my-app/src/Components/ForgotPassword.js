import React from 'react';
import '../Styles/ForgotPassword.css'; // Make sure this path matches your folder structure
import Logo from '../images/4.png'; // Replace with the actual path to your logo
import ForgotPasswordGraphic from '../images/3.jpg'; // Replace with the actual path to your graphic

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      {/* Left Section - Form */}
      <div className="form-section">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h1 className="forgot-password-title">Forget Password</h1>
        <p className="subtitle">
          Enter your email address and we will send you instructions to reset your password.
        </p>
        <form className="forgot-password-form">
          <input
            type="email"
            placeholder="Enter your Email Address"
            required
          />
          <button type="submit" className="confirm-btn">Confirm</button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="image-section">
        <img
          src={ForgotPasswordGraphic}
          alt="Forgot Password Graphic"
          className="graphic-img"
        />
      </div>
    </div>
  );
}

export default ForgotPassword;
