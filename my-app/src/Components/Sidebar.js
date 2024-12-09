import React from "react";
import '../Styles/Sidebar.css';
import {
  FaHome,
  FaProjectDiagram,
  FaCog,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";
import Logo from "../images/4.png"; // Replace with your logo path

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Header Section */}
      <div className="sidebar-header">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">
          Task <span className="logo-highlight">pilot</span>
        </span>
      </div>

      {/* Menu Section */}
      <div className="sidebar-menu">
        <ul>
          <li className="active">
            <FaHome className="icon" /> Home
          </li>
          <li>
            <FaProjectDiagram className="icon" /> Projects
          </li>
          <li>
            <FaCog className="icon" /> Settings
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="sidebar-footer">
        <hr />
        <p className="footer-heading">Other</p>
        <ul>
          <li>
            <FaLock className="icon" /> Change password
          </li>
          <li>
            <FaSignOutAlt className="icon" /> Logout
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
