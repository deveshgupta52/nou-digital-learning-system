import React from 'react';

const StudentProfile = ({ studentData }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Student Profile</h3>
      
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header text-white" style={{ background: '#ff8c00' }}>
              <h5 className="mb-0">Profile Photo</h5>
            </div>
            <div className="card-body text-center">
              <div className="mb-3">
                <div className="rounded-circle mx-auto d-flex align-items-center justify-content-center text-white fw-bold" 
                     style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #ff8c00, #ffa500)', fontSize: '2rem' }}>
                  JS
                </div>
              </div>
              <button className="btn text-white" style={{ background: '#ff8c00' }}>Upload Photo</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header text-white" style={{ background: '#ff8c00' }}>
              <h5 className="mb-0">Basic Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>Full Name:</strong> {studentData.name}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Student ID:</strong> {studentData.id}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Email:</strong> {studentData.email}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Phone:</strong> {studentData.phone}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Date of Birth:</strong> {studentData.dob}
                </div>
                <div className="col-md-6 mb-3">
                  <strong>Gender:</strong> {studentData.gender}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header text-white" style={{ background: '#ffa500' }}>
              <h5 className="mb-0">Academic Information</h5>
            </div>
            <div className="card-body">
              <p><strong>Course:</strong> {studentData.course}</p>
              <p><strong>Branch:</strong> {studentData.branch}</p>
              <p><strong>Year:</strong> {studentData.year}</p>
              <p><strong>Semester:</strong> {studentData.semester}</p>
              <p><strong>Enrollment Date:</strong> {studentData.enrollmentDate}</p>
              <p><strong>Status:</strong> <span className="badge bg-success">{studentData.status}</span></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header text-white" style={{ background: '#ffb347' }}>
              <h5 className="mb-0">Performance Summary</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Attendance: {studentData.attendance}%</strong>
                <div className="progress mt-2">
                  <div className="progress-bar" style={{ background: '#ff8c00', width: `${studentData.attendance}%` }}></div>
                </div>
              </div>
              <div className="mb-3">
                <strong>Current GPA: {studentData.gpa}</strong>
                <div className="progress mt-2">
                  <div className="progress-bar" style={{ background: '#ffa500', width: `${(studentData.gpa / 4) * 100}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header text-white" style={{ background: '#ff8c00' }}>
              <h5 className="mb-0">Address Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h6>Permanent Address</h6>
                  <p>{studentData.permanentAddress}</p>
                </div>
                <div className="col-md-6">
                  <h6>Current Address</h6>
                  <p>{studentData.currentAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;