import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Login from "./components/login/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (token) {
      console.log(token);
      localStorage.setItem("token", token);
    } else {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <div className="App-main">
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

const RootApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;
