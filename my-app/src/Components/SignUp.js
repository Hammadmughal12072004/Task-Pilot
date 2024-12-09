import React from 'react';
import '../Styles/SignUp.css';
import Logo from '../images/4.png'; // Replace with your logo path
import SignupImage from '../images/1.jpg'; // Replace with your left section image path
import GoogleIcon from '../images/googleicon.png'; // Replace with your Google icon path

function SignUp() {
  return (
    <div className="signup-container">
      {/* Left Image Section */}
      <div className="image-section">
        <img src={SignupImage} alt="AI Task Management" className="signup-image" />
      </div>

      {/* Right Form Section */}
      <div className="form-section">
        <div className="form-header">
          <img src={Logo} alt="App Logo" className="app-logo" />
          <h1 className="form-title">Create an account</h1>
        </div>

        {/* Google Button */}
        <button className="google-btn">
          <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
          Create account with Google
        </button>

        <div className="divider">
          <hr />
          <span>Or</span>
          <hr />
        </div>

        {/* Signup Form */}
        <form className="signup-form">
          <input type="email" placeholder="Enter your email address" required />
          <input type="text" placeholder="Enter your full name" required />
          <input type="password" placeholder="Enter your Password" required />
          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to terms & conditions</label>
          </div>
          <button type="submit" className="signup-btn">Register</button>
        </form>

        <p className="login-text">
          Already have an account? <a href="/login">Login</a>
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
