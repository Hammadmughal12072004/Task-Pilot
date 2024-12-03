import React from "react";
import "../Styles/CreateProject.css";

function CreateProject() {
  return (
    <div className="create-project-container">
      {/* Header */}
      <div className="create-project-header">
        <span className="user-info">
          <img
            src="path-to-user-icon"
            alt="User"
            className="user-avatar"
          />
          <span className="user-name">Hammad Mughal</span>
          <span className="user-role">User</span>
        </span>
      </div>

      {/* Card */}
      <div className="create-project-card">
        <h2>Create New Project</h2>
        <form>
          {/* ICON AND NAME */}
          <div className="form-group">
            <label>ICON AND NAME</label>
            <div className="icon-name-group">
              <span className="icon-placeholder">TM</span>
              <input
                type="text"
                placeholder="Task Management System"
                className="input-field"
              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>DESCRIPTION (OPTIONAL)</label>
            <input
              type="text"
              placeholder="Project Management Software"
              className="input-field"
            />
          </div>

          {/* ONLY PRIVATE */}
          <div className="form-group toggle-group">
            <label>ONLY PRIVATE</label>
            <div className="toggle-container">
              <input type="checkbox" className="toggle" />
              <span className="toggle-info">
                Only You and Invited members have Access.
              </span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="form-buttons">
            <button type="button" className="btn save">
              Save and Continue
            </button>
            <button type="button" className="btn cancel">
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProject;
