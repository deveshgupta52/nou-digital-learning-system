import React from 'react'
import { Link } from 'react-router-dom'

function HeroBanner() {
  return (
    <div className="row position-relative">
      <div className="col-12 p-0">
        <img
          style={{ height: "430px", width: "100%" }}
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=430&fit=crop"
          alt="Digital Assessment Banner"
        />
      </div>

      <div
        className="col-12 top-0 start-0 position-absolute hero-overlay"
        style={{
          height: "90px",
          width: "100%",
          zIndex: 10,
        }}
      >
        <div className="row">
          
          <div className="col-sm-3 text-center my-auto hero-title theme-text-white">
            WELCOME <span className="theme-text-amber">USERS</span>
          </div>
          <div className="col-sm-9 py-4" >
            <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center m-0 p-0">
              <div>
                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>

                <div 
                  className="collapse navbar-collapse d-flex justify-content-center align-items-center"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link  fs-5 text-white fw-semibold px-3"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Home
                      </a>
                      {/* <ul className="dropdown-menu shadow-lg border-0">
                        <li><a className="dropdown-item" href="/">Home</a></li>
                        <li><a className="dropdown-item" href="#">About System</a></li>
                      </ul> */}
                    </li>

                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" onClick={() => {
      document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
      });
    }}>Course</a>
                    </li>
                    <Link to={"/exam"} style={{textDecoration:"none"}}>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" href="#">Exam</a>
                    </li>
                    </Link>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" href="#">Result</a>
                    </li>

                    

                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3"  onClick={() => {
      document.getElementById("support").scrollIntoView({
        behavior: "smooth"
      });
    }}>Support</a>
                    </li>
                 <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3"  
                      onClick={() => {
      document.getElementById("service").scrollIntoView({
        behavior: "smooth"
      });
    }}>Services</a>
                    </li>
                  

                  <Link to={"/register"} style={{textDecoration:"none"}}>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" href="#">Register</a>
                    </li>
                  </Link>

                  <Link to={"/login"} style={{textDecoration:"none"}}>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" href="#">Login </a>
                    </li>
                  </Link>

                   <Link to={"/admin"} style={{textDecoration:"none"}}>
                    <li className="nav-item">
                      <a className="nav-link fs-5 text-white fw-semibold px-3" href="#">Admin Login </a>
                    </li>
                  </Link>

                   </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner