import React from "react";
import '../Styles/Logout.css';
import Logo from "../images/4.png"; // Replace with the path to your logo

function Logout() {
  const handleLogout = () => {
    console.log("User logged out"); // Add logout logic here
  };

  const handleCancel = () => {
    console.log("Logout canceled"); // Add cancel logic here
  };

  return (
    <div className="logout-container">
      <img src={Logo} alt="Logo" className="logout-logo" />
      <h1 className="logout-title">Logout</h1>
      <p className="logout-email">Hi user@email.com,</p>
      <p className="logout-confirmation">
        Are you sure you want to log out from <span>Task Pilot</span>?
      </p>
      <div className="logout-buttons">
        <button className="btn-cancel" onClick={handleCancel}>
          No
        </button>
        <button className="btn-confirm" onClick={handleLogout}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default Logout;
