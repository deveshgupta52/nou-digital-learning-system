import React from 'react'
import { Link } from 'react-router-dom'

function HeroBanner() {
  return (
    <div className="row position-relative">
      <div className="col-12 p-0">
        <img
          style={{ height: "430px", width: "100%" }}
          src="https://nouegyan.in/assets/img/Nou%20e%20gyan%20banner.jpg"
          alt="NOU Banner"
        />
      </div>

      <div
        className="col-12 top-0 start-0 position-absolute"
        style={{
          height: "90px",
          width: "100%",
          backgroundColor: "rgba(87, 86, 86, 0.6)",
          zIndex: 10,
        }}
      >
        <div className="row">
          
          <div className="col-sm-3 text-center my-auto fs-3 fw-bold theme-text-white">
            WELCOME <span style={{ color: "orange" }}>STUDENTS</span>
          </div>
          <div className="col-sm-9 py-4">
            <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center m-0 p-0">
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse d-flex justify-content-center align-items-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle fs-5 text-white"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Home</a></li>
                        <li><a className="dropdown-item" href="#">About Portal</a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link fs-5 text-light" href="#">Courses</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-light" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-light" href="#">Study Center</a>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle fs-5 text-light"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Login
                      </a>
                      <ul className="dropdown-menu">
                        <li></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link fs-5 text-light" href="#">Contact</a>
                    </li>
                  </ul>
                  <Link to={"/admin"}>
        <button className="admin-login-btn">Admin Login</button>
      </Link>
       <Link to={"/register"}>
        <button className="admin-login-btn">Register</button>
      </Link>
       <Link to={"/login"}>
        <button className="admin-login-btn">Login</button>
      </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Optional absolute positioned div */}
      {/* 
      <div className="position-absolute bg-info end-0 bottom-0" style={{ zIndex: 10, height: "500px", width: "500px" }}></div>
      */}
    </div>
  )
}

export default HeroBanner
