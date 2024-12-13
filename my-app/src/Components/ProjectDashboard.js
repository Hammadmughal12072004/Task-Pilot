import React from "react";
import { FaTasks, FaUserCheck, FaChartBar, FaListAlt, FaClipboardList } from "react-icons/fa";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import "../Styles/ProjectDashboard.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProjectDashboard = () => {
  const pieData = {
    labels: ["Completed", "On Hold", "In Progress", "Pending"],
    datasets: [
      {
        data: [32, 25, 18, 25],
        backgroundColor: ["#4caf50", "#ff9800", "#03a9f4", "#f44336"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Hammad", "Asad", "Ali", "Talha"],
    datasets: [
      {
        data: [10, 15, 25, 20],
        backgroundColor: ["#4caf50", "#ff9800", "#03a9f4", "#f44336"],
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <h1 className="project-title">Project Name</h1>
        <button className="ask-ai-btn">Ask AI</button>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs">
        <button className="tab active">
          <FaTasks /> Dashboard
        </button>
        <button className="tab">
          <FaListAlt /> List
        </button>
        <button className="tab">
          <FaChartBar /> Board
        </button>
        <button className="tab">
          <FaClipboardList /> Backlog
        </button>
        <button className="tab">
          <FaUserCheck /> Reports
        </button>
      </div>

      {/* Metrics */}
      <div className="metrics">
        <div className="metric" style={{ background: "linear-gradient(135deg, #8E44AD, #3498DB)" }}>
          <h2>1220</h2>
          <p>Total Tasks</p>
        </div>
        <div className="metric" style={{ background: "linear-gradient(135deg, #2ECC71, #16A085)" }}>
          <h2>125</h2>
          <p>In Progress</p>
        </div>
        <div className="metric" style={{ background: "linear-gradient(135deg, #F39C12, #E67E22)" }}>
          <h2>60</h2>
          <p>Unassigned</p>
        </div>
        <div className="metric" style={{ background: "linear-gradient(135deg, #E74C3C, #C0392B)" }}>
          <h2>100</h2>
          <p>Completed</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts">
        <div className="chart">
          <h3>Tasks</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart">
          <h3>Total tasks by assignee</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* Task Due Section */}
      <div className="task-due">
        <h3>Task Due</h3>
        <select>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>Week</option>
          <option>Month</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectDashboard;
