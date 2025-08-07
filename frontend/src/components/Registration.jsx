import React from 'react';

function Registration() {
  return (
    <div className="container-fluid bg-primary min-vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: '700px', width: '100%' }}>
        <h2 className="text-center mb-4">Student Registration</h2>
        <form className="row g-3">

          {/*  Roll Number */}
          <div className="col-md-6">
            <label className="form-label">Roll Number</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-id-card"></i>
              </span>
              <input type="number" className="form-control" name="rollno" placeholder="Enter Roll Number" />
            </div>
          </div>

          {/* Name */}
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
              <input type="text" className="form-control" name="name" placeholder="Enter Name" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Father's Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-user-tie"></i></span>
              <input type="text" className="form-control" name="fname" placeholder="Enter father's Name"/>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Mother's Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-female"></i></span>
              <input type="text" className="form-control" name="mname" placeholder="Enter Mother's Name" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-venus-mars"></i></span>
              <select className="form-control" name="gender">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="col-md-12">
            <label className="form-label">Address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-map-marker-alt"></i></span>
              <textarea className="form-control" name="address" placeholder="Enter Permanent Address"></textarea>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Program</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
              <input type="text" className="form-control" name="program" placeholder="Enter Program"/>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Branch</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-code-branch"></i></span>
              <input type="text" className="form-control" name="branch" placeholder="Enter Branch" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Year</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-calendar-alt"></i></span>
              <input type="text" className="form-control" name="year" placeholder="e.g. 2025" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-phone"></i></span>
              <input type="text" className="form-control" name="contactno" placeholder="Contact No." />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
              <input type="email" className="form-control" name="emailaddress" placeholder="Enter Email" />
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="fas fa-lock"></i></span>
              <input type="password" className="form-control" name="password" placeholder="Password"/>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-warning w-100">
              <i className="fas fa-paper-plane me-2"></i>Register
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Registration;
