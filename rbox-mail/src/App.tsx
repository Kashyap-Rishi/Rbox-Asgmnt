import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/login/Login';
import DashboardLayout from './components/dashboard/DashboardLayout';

const QueryParamHandler = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  if (token) {
    console.log(token);
    return <DashboardLayout />;
  }

  return <div>Invalid URL or Missing Token</div>;
};

function App() {
  return (
    <div className="App-main">
      <Router>
        <Routes>
        <Route path="/" element={<QueryParamHandler />} />
          <Route path="/login" element={<Login />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
