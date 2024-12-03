import React from 'react';
import '../Styles/SignUp.css'; // Your custom CSS file
import Logo from '../images/4.png';
import Signupimage from '../images/2.jpg';
import GoogleIcon from '../images/googleicon.png'; // Add the Google icon image
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importing Font Awesome styles

function SignUp() {
  return (
    <div className="signup-container">
      {/* Image Section */}
      <div className="image-section">
        <div className="image-container">
          <img src={Signupimage} alt="AI Task Management" className="image" />
        </div>
      </div>

      {/* Form Section */}
      <div className="form-section">
        <div className="logo">
          <img src={Logo} alt="App Logo" />
        </div>
        <h1 className='create-account-text'>Create an account</h1>

        {/* Google Button with Icon */}
        <button className="google-btn">
          <img src={GoogleIcon} alt="Google Icon" className="google-icon" />
          Create account with Google
        </button>
        <div className='signup-or-section'>
          <hr />
          <p>or</p>
          <hr />
        </div>
        {/* Signup Form */}
        <form className='signup-form'>
          <input type="email" placeholder="Enter your email address" />
          <input type="text" placeholder="Enter your full name" />
          <input type="password" placeholder="Create your password" />
          <button type="submit" className="signup-btn">Create an account</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
