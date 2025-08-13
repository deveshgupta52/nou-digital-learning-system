import React from 'react'

function PortalUsers() {
  return (
    <div className="container-fluid bg-img2 py-5">
      {/* Heading Section */}
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-1 ms-5 pe-0">
              <p className="fw-bolder theme-text-grey fs-6 mt-5 pt-5 mb-0 mx-1 ">SYSTEM</p>
              
            </div>
            
            <div className="col-7"></div>
          </div>

          <div className="row">
            <div className="col-md-7 ms-5">
              <h2 className="fs-1 fw-bold text-dark">USERS <span className="theme-text-orange">OF THE SYSTEM</span></h2>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row p-0 pb-5 d-flex justify-content-evenly align-items-center mt-4">
        {/* Card 1 */}
        <div className="card service-card" style={{ width: "20rem" }}>
          <div className="card-body text-center">
            <div className="mb-3">
              <i className="fas fa-user-shield fa-3x theme-text-orange"></i>
            </div>
            <h5 className="card-title theme-text-darkred fw-bold mb-3">System Administrator</h5>
            <p className="card-text text-muted">
              System administrators can monitor the platform, manage user access, 
              configure assessment settings, and oversee system performance
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="/admin" className="btn btn-warning rounded-pill px-4">
                System Admin
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card service-card" style={{ width: "20rem" }}>
          <div className="card-body text-center">
            <div className="mb-3">
              <i className="fas fa-chalkboard-teacher fa-3x theme-text-orange"></i>
            </div>
            <h5 className="card-title theme-text-darkred fw-bold mb-3">Teachers/Educators</h5>
            <p className="card-text text-muted">
              Educators can create assessments, manage student groups, 
              track performance, and generate detailed analytics reports
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="/register" className="btn btn-warning rounded-pill px-4">
                Teachers/Educators
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card service-card" style={{ width: "20rem" }}>
          <div className="card-body text-center">
            <div className="mb-3">
              <i className="fas fa-user-graduate fa-3x theme-text-orange"></i>
            </div>
            <h5 className="card-title theme-text-darkred fw-bold mb-3">Students</h5>
            <p className="card-text text-muted">
              Students can take assessments, view results, track progress, 
              and access personalized learning recommendations
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="/login" className="btn btn-warning rounded-pill px-4">
                Students
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortalUsers