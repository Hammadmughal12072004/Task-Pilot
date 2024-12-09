import React from "react";
import "../Styles/Home.css";
import { FaHome } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="home-header">
        <div className="header-left">
          <FaHome className="home-icon" />
          <h1>Home</h1>
        </div>
        <div className="header-right">
          <div className="user-info">
            <img
              src="path-to-avatar"
              alt="User"
              className="user-avatar"
            />
            <div>
              <div className="user-name">Hammad Mughal</div>
              <div className="user-role">User</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="home-content">
        <h2>Good Morning, Hammad</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Recents</h3>
          </div>
          <div className="card">
            <h3>My Work</h3>
          </div>
          <div className="card">
            <h3>Assigned to Me</h3>
          </div>
          <div className="card">
            <h3>Notification</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
