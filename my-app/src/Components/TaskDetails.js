import React from "react";
import "../Styles/TaskDetails.css"; // Import CSS file

function TaskDetails() {
  return (
    <div className="task-details-container">
      {/* Header */}
      <div className="task-header">
        <h3>Login Functionality</h3>
        <div className="task-id">
          <span>Task-ID:</span>
          <span className="task-id-value">234234</span>
        </div>
      </div>

      {/* Task Summary */}
      <div className="task-summary">
        <h2>Task Details</h2>
        <div className="task-info-grid">
          <div className="task-info-item">
            <span className="label">Status:</span>

            <span className="value to-do">To Do</span>
          </div>
          <div className="task-info-item">
            <span className="label">Due Date: </span>
            <span className="value">Oct 23</span>
          </div>
          <div className="task-info-item">
            <span className="label">Time Estimate:</span>
            <span className="value">4h</span>
          </div>
          <div className="task-info-item">
            <span className="label">Sprint Duration:</span>
            <span className="value">2 weeks</span>
          </div>
          <div className="task-info-item">
            <span className="label">Assignees:</span>
            <span className="value">Hammad👨</span>
          </div>
          <div className="task-info-item">
            <span className="label">Priority:</span>
            <span className="value high">High</span>
          </div>
          <div className="task-info-item">
            <span className="label">Tag:</span>
            <span className="value tag">Frontend</span>
          </div>
          <div className="task-info-item">
            <span className="label">Sprint Point:</span>
            <span className="value">2</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="task-section">
        <h3>Description</h3>
        <textarea placeholder="Add Description......" />
      </div>

      {/* Attachment */}
      <div className="task-section">
        <h3>Attachment</h3>
        <div className="attachment-box">Drop your files here to upload</div>
      </div>

      {/* Subtasks and Activity */}
      <div className="task-details-footer">
        <div className="subtasks">
          <h3>Subtasks</h3>
          <div className="subtask-item">
            <span>Login Functionality</span>
          </div>
          <div className="subtask-item">
            <span>UI Interface</span>
          </div>
          <button className="create-subtask">Create Subtask</button>
        </div>

        <div className="activity">
          <h3>Activity</h3>
          <textarea
            placeholder="Add a comment or add comments directly to the issue..."
          />
          <button className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
