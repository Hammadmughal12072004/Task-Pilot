import React from "react";
import "../Styles/Home.css";
import { FaHome } from "react-icons/fa"; // Import the home icon

function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <div className="header-left">
          <FaHome className="home-icon" />
          <h1>Home</h1>
        </div>
        <div className="header-right">
          <span className="user-info">
            <img
              src="path-to-avatar" // Replace with actual avatar path
              alt="User"
              className="user-avatar"
            />
            <span className="user-name">Hammad Mughal</span>
            <span className="user-role">User</span>
          </span>
          <div className="manage-cards">Manage Cards</div>
        </div>
      </div>
      <div className="home-content">
        <h2>Good Morning, Hammad</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Recents</h3>
            <div className="card-content">
              <p>Your recent tasks will appear here.</p>
              <p>Scroll to see more content...</p>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="card">
            <h3>My Work</h3>
            <div className="card-content">
              <p>Tasks you are currently working on.</p>
              <p>Scroll to see more content...</p>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="card">
            <h3>Assigned to Me</h3>
            <div className="card-content">
              <p>Tasks assigned to you.</p>
              <p>Scroll to see more content...</p>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
          <div className="card">
            <h3>Notification</h3>
            <div className="card-content">
              <p>All your notifications will appear here.</p>
              <p>Scroll to see more content...</p>
              <p>Lorem ipsum dolor sit amet...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
