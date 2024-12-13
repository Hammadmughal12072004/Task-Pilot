import React from "react";
import "../Styles/ListView.css"; // Updated CSS file for styling
import { FaSearch, FaPlus } from "react-icons/fa";

function ListView() {
  return (
    <div className="list-view-container">
      <div className="project-header">
        <h2>Task Pilot</h2>
        <div className="header-tabs">
          <button className="tab">Dashboard</button>
          <button className="tab active">List</button>
          <button className="tab">Board</button>
          <button className="tab">Backlog</button>
          <button className="tab">Reports</button>
        </div>
      </div>

      <div className="filter-and-search">
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <div className="filter-bar">
          <select>
            <option>Assignee</option>
            <option>Hammad</option>
            <option>Aamir</option>
            <option>Alex</option>
            <option>David</option>
          </select>
          <select>
            <option>Status</option>
            <option>To-do</option>
            <option>In-Progress</option>
            <option>completed</option>
          </select>
          <input type="date" placeholder="Due Date" />
        </div>
        <button className="create-sprint-button">
          <FaPlus /> Create New Task
        </button>
      </div>

      <div className="sprint-section">
        <h3>Sprint 1</h3>
        <div className="table-div">
          <table className="task-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Tag</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>1</td>
                <td>Login Functionality</td>
                <td>Hammad</td>
                <td><span className="status todo">To Do</span></td>

                <td>Nov 15, 2024</td>
                <td><span className="priority high">High</span></td>
                <td>Frontend</td>
              </tr>
              <tr>
                <td>2</td>
                <td>SRS Document Review</td>
                <td>Aamir</td>
                <td><span className="status in-progress">In Progress</span></td>
                <td>Nov 19, 2024</td>
                <td><span className="priority low">Low</span></td>
                <td>Backend</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Database Connectivity</td>
                <td>Hammad</td>
                <td><span className="status completed">completed</span></td>
                <td>Oct 12, 2024</td>
                <td ><span className="priority medium">Low</span></td>
                <td>Frontend</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="messaging-bar">
        <input type="text" placeholder="Type a message or use '/' for commands" />
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

export default ListView;
