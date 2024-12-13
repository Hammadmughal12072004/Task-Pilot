import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ChangePassword from './Components/ChangePassword';
import CreateProject from './Components/CreateProject';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home'; // Import the Home component
import Sidebar from './Components/Sidebar';
import ForgotPassword from './Components/ForgotPassword';
import Logout from './Components/Logout';
import CreateSprint from './Components/CreateSprint';
import Board from './Components/Board'; // Import Board component
import ProjectDashboard from './Components/ProjectDashboard'; // Import ProjectDashboard component
import Report from './Components/Report'; // Import Report component
import ListView from './Components/ListView'; // Import the ListView component
import TaskDetails from './Components/TaskDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Routes with Sidebar */}
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<Home />} /> {/* Home page route */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="create-sprint" element={<CreateSprint />} />
          <Route path="board" element={<Board />} /> {/* Board route */}
          <Route path="project-dashboard" element={<ProjectDashboard />} /> {/* ProjectDashboard route */}
          <Route path="reports" element={<Report />} /> {/* Report route */}
          <Route path="ListView" element={<ListView />} />
          <Route path="TaskDetails" element={<TaskDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

// Separate MainLayout to handle sidebar visibility
function MainLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
