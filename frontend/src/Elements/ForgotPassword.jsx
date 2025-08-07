import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px' }}>
        <h5 className="text-center mb-3">Forgot Password</h5>

        <div className="mb-3">
          <label className="form-label">Enter Your Roll Number</label>
          <input type="text" className="form-control" placeholder="Roll No." />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Your Email</label>
          <input type="email" className="form-control" placeholder="Email" />
        </div>

        <button className="btn btn-primary w-100" onClick={() => navigate('/')}>
          Click Here to Login
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
