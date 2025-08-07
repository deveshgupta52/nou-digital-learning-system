import React from 'react'

function PortalUsers() {
  return (
    <div className="container-fluid bg-img2">
      {/* Heading Section */}
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-1 ms-5 pe-0">
              <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">PORTAL</h2>
            </div>
            <div className="col-1 orange-line mb-3 ms-3"></div>
            <div className="col-7"></div>
          </div>

          <div className="row">
            <div className="col-md-7 fs-3 fw-bold ms-5">
              <p>USERS <span>OF THE PORTAL</span></p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row p-0 pb-5 d-flex justify-content-evenly align-items-center">
        {/* Card 1 */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              The university admin can login to monitor the portal, provide access to authorised
              stakeholders & upload study material
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="#" className="btn rounded-5 w-75 btn-warning theme-text-darkred">
                University Admin
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              The university admin can login to monitor the portal, provide access to authorised
              stakeholders & upload study material
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="#" className="btn rounded-5 w-75 btn-warning theme-text-darkred">
                University Admin
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">
              The university admin can login to monitor the portal, provide access to authorised
              stakeholders & upload study material
            </p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <a href="#" className="btn rounded-5 w-75 btn-warning theme-text-darkred">
                University Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortalUsers
