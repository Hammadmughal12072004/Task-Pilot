import React from 'react';
import '../Styles/Login.css'; // Ensure your CSS is up-to-date
import LoginImage from '../images/4.jpg'; // Path to your image
import Logo from '../images/4.png'; // Path to your logo
import GoogleIcon from '../images/googleicon.png'; // Path to Google icon

function Login() {
  return (
    <div className="login-container">
      {/* Left Section - Form */}
      <div className="login-form-section">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h1 className="welcome-text">Welcome back 👋</h1>
        <p className="subtitle">We are happy to have you back</p>
        <form className="login-form">
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="or-section">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button className="google-login-btn">
          <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
          Login with Google
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
