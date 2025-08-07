import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentLogin() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Student Login</h4>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input type="text" className="form-control" placeholder="Enter username" />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>

        <button className="btn btn-primary w-100">Login</button>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-link p-0" onClick={() => navigate('/forgot-password')}>
            Forgot Password?
          </button>
          <button className="btn btn-link p-0" onClick={() => navigate('/')}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
