import React from "react";
import "../Styles/Sidebar.css";
import { FaHome, FaColumns, FaProjectDiagram, FaCog, FaLock, FaSignOutAlt } from "react-icons/fa";
import Logo from "../images/4.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="Logo" className="logo-icon" />
        <span className="logo-text">
          Task <span className="logo-highlight">pilot</span>
        </span>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li><FaHome className="icon" /> Home</li>
          <li><FaColumns className="icon" /> Dashboard</li>
          <li className="active"><FaProjectDiagram className="icon" /> Create Projects</li>
          <li><FaProjectDiagram className="icon" /> Projects</li>
          <li><FaCog className="icon" /> Settings</li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <hr />
        <p className="footer-heading">other</p>
        <ul>
          <li><FaLock className="icon" /> Change password</li>
          <li><FaSignOutAlt className="icon" /> Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
