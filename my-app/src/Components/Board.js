import React from "react";
import "../Styles/Board.css";
import {
  FaUser,
  FaCalendarAlt,
  FaExclamationCircle,
  FaBars,
  FaList,
  FaTasks,
  FaChartBar,
  FaChevronDown,
} from "react-icons/fa";

function Board() {
  const columns = [
    { title: "To Do", color: "#7c4dff" },
    { title: "On Progress", color: "#ffc107" },
    { title: "Done", color: "#28a745" },
    { title: "Review", color: "#dc3545" },
  ];

  const tabs = [
    { name: "Dashboard", icon: <FaBars style={{ color: "#AFE1AF" }} /> },
    { name: "List", icon: <FaList style={{ color: "#AFE1AF" }} /> },
    { name: "Board", icon: <FaTasks style={{ color: "#AFE1AF" }} />, active: true },
    { name: "Backlog", icon: <FaBars style={{ color: "#AFE1AF" }} /> },
    { name: "Reports", icon: <FaChartBar style={{ color: "#AFE1AF" }} /> },
  ];

  const dummyTasks = [
    { title: "Login Screen", date: "Dec 4", priority: "High", subtasks: "Subtasks" },
    { title: "Profile Screen", date: "Dec 5", priority: "Medium", subtasks: "Subtasks" },
  ];

  return (
    <div className="board-container">
      {/* Header Section */}
      <div className="board-header">
        <div className="project-info">
          <h1 className="project-name">Project Name</h1>
        </div>
        <div className="header-right">
          <button className="ask-ai-btn">Ask AI</button>
          <div className="user-info">
            <FaUser className="user-icon" />
            <div>
              <p className="user-name">Hammad Mughal</p>
              <p className="user-role">User</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button key={index} className={`tab ${tab.active ? "active" : ""}`}>
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>

      {/* Search and Filter Section */}
      <div className="filter-section">
        <input
          type="text"
          className="search-bar"
          placeholder="Search here..."
        />
        <button className="filter-dropdown">
          Status <FaChevronDown />
        </button>
        <button className="filter-dropdown">
          Filter Order <FaChevronDown />
        </button>
        <div className="filter-tags">
          <span className="filter-tag">Assignee</span>
          <span className="filter-tag">Status</span>
          <span className="filter-tag">Due Date</span>
          <span className="filter-tag">Priority</span>
          <span className="filter-tag">Tags</span>
        </div>
        <button className="search-btn">Search</button>
        <button className="create-sprint-btn">Create Sprint</button>
      </div>

      {/* Board Columns */}
      <div className="board-columns">
        {columns.map((column, index) => (
          <div className="board-column" key={index}>
            <div className="column-header">
              <span className="column-title">{column.title}</span>
              <div
                className="column-line"
                style={{ backgroundColor: column.color }}
              ></div>
            </div>
            {dummyTasks.map((task, taskIndex) => (
              <div className="task-card" key={taskIndex}>
                <h3 className="task-title">{task.title}</h3>
                <div className="task-details">
                  <div className="task-detail">
                    <FaUser style={{ color: "#AFE1AF" }} /> {task.date}
                  </div>
                  <div className="task-detail">
                    <FaCalendarAlt style={{ color: "#AFE1AF" }} /> {task.priority}
                  </div>
                  <div className="task-detail">
                    <FaExclamationCircle style={{ color: "#AFE1AF" }} /> {task.subtasks}
                  </div>
                </div>
              </div>
            ))}
            <button className="add-task-btn">+ Add Task</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
