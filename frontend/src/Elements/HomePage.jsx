import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-primary">
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '600px' }}>
        
        <div className="text-center mb-4">
          <img src="src\Images\logo.png" alt="Logo" style={{ width: '100px' }} />
          <h4 className="mt-3">Nalanda Open University</h4>
          <p className="text-muted">NOU E-Gyan Portal</p>
        </div>

        <div className="mb-3">
          <div className="card mb-3">
            <div className="card-header bg-light fw-bold">University</div>
            <div className="card-body">
              <p>The university admin can login to monitor the portal, provide access to stakeholders & upload study material.</p>
              <button className="btn btn-primary w-100" onClick={() => navigate('/admin-login')}>
                University Login
              </button>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header bg-light fw-bold">Study Centers</div>
            <div className="card-body">
              <p>Study centres can track student progress, enroll students, schedule assignments & generate reports.</p>
              <button className="btn btn-primary w-100" onClick={() => navigate('/college-login')}>
                Study Centers Login
              </button>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-header bg-light fw-bold">Student</div>
            <div className="card-body">
              <p>Students can view notifications, access e-contents, give assignments & track their progress report.</p>
              <button className="btn btn-primary w-100" onClick={() => navigate('/student-login')}>
                Student Login
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted small mt-3">
          Copyright © 2025 | <strong>NOU E-Gyan Portal</strong><br />
          A Concept by Nalanda Open University, Bihar
        </p>

      </div>
    </div>
  );
}

export default HomePage;
