import React, { useState } from "react";
import "../Styles/Dashboard.css";

function Dashboard() {
  const [selectedProject, setSelectedProject] = useState("ODP Project");

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <div className="dashboard-header">
        <div className="header-title">
          <span className="dashboard-title">Projects</span>
        </div>
        <div className="header-right">
          <button className="create-project-btn">Create Project</button>
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <div>
              <div className="user-name">Hammad Mughal</div>
              <div className="user-role">User</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <div className="project-card">
          <h2>Which Project Data You want to visualize?</h2>
          <p>
            Task Pilot Dashboard helps you to visualize data from your tasks.
            Select a project to source your data from.
          </p>

          <div className="form-group">
            <label>Select Project</label>
            <div className="dropdown">
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
              >
                <option value="Task pilot project">Task pilot project</option>
                <option value="DSA project">DSA project</option>
                <option value="ODP Project">ODP Project</option>
                <option value="Ecommerce Project">Ecommerce Project</option>
                <option value="JIRA Project">JIRA Project</option>
              </select>
            </div>
          </div>

          <div className="button-group">
            <button className="btn create-reports">Create Reports</button>
            <button className="btn create-dashboard">Create Dashboard</button>
            <button className="btn back">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
