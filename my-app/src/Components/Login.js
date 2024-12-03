import React from 'react';
import '../Styles/Login.css'; // Custom CSS file
import LoginImage from '../images/4.jpg'; // Replace with your actual image path
import Logo from '../images/4.png'; // Replace with your logo path
import GoogleIcon from '../images/googleicon.png'; // Add the Google icon image
function Login() {
  return (
    <div className="login-container">
      {/* Left Section - Form */}
      <div className="login-form-section">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h1 className='welcome-text'>Welcome back 👋</h1>
        <p className="subtitle">We are happy to have you back</p>
        <form className="login-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <div className="checkbox-container">
            <input className='login-checkbox' type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className='or-section'>
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button className="google-login-btn">
          <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
          Create account with Google
        </button>
        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>

      {/* Right Section - Image */}
      <div className="login-image-section">
        <img src={LoginImage} alt="Login Visual" className="login-image" />
      </div>
    </div>
  );
}

export default Login;
