import React from "react";
import { FaTasks, FaUserCheck, FaChartBar, FaListAlt, FaClipboardList } from "react-icons/fa";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "../Styles/Report.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Report = () => {
  const barData = {
    labels: ["Hammad", "Asad", "Ali", "Talha"],
    datasets: [
      {
        label: "Workload to Team Members",
        data: [5, 3, 7, 10],
        backgroundColor: ["#4caf50", "#03a9f4", "#ff9800", "#f44336"],
      },
    ],
  };

  const doughnutData = {
    labels: ["To Do", "Completed", "In Progress"],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ["#4caf50", "#03a9f4", "#ff9800"],
      },
    ],
  };

  return (
    <div className="report-container">
      {/* Header */}
      <div className="header">
        <h1 className="project-title">Project Name</h1>
        <button className="ask-ai-btn">Ask AI</button>
      </div>

      {/* Navigation Tabs */}
      <nav className="tabs">
        <button className="tab">
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
        <button className="tab active">
          <FaUserCheck /> Reports
        </button>
      </nav>

      {/* Content */}
      <h2 className="section-title">Generate Reports According to the Members</h2>

      <div className="charts">
        <div className="chart">
          <h3>Workload to Team Member</h3>
          <Bar data={barData} />
        </div>
        <div className="chart">
          <h3>Work Log</h3>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      {/* Team Member Section */}
      <div className="team-member-section">
        <h3>Team Member</h3>
        <div className="team-member-select">
          <select>
            <option>Hammad</option>
            <option>Asad</option>
            <option>Ali</option>
            <option>Talha</option>
          </select>
          <button className="generate-btn">Generate Report</button>
        </div>
      </div>

      {/* Overall Performance */}
      <div className="performance-section">
        <h3>Overall Performance</h3>
        <div className="performance-chart">
          <Doughnut
            data={{
              labels: ["On Time", "Delayed"],
              datasets: [
                {
                  data: [80, 20],
                  backgroundColor: ["#4caf50", "#f44336"],
                },
              ],
            }}
          />
        </div>
        <div className="performance-value">80</div>
        <p>On Time</p>
      </div>
    </div>
  );
};

export default Report;
