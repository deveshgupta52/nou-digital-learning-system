import React from 'react'

function Topheader() {
  return (
    <div>
      <div className="row new theme-bg-color py-2 dotted-line">
        <div className="col-md-1"></div>
        <div className="col-md-2 d-flex">
          <div><i className="fa-solid fa-phone fa-spin fa-xs m-1 theme-text-white"></i></div>
          <h5 className="theme-text-white fs-6 m-1">+91 7080102007</h5>
        </div>
        <div className="col-md-4 d-flex">
          <div><i className="fa-solid fa-envelope fa-xs theme-text-white"></i></div>
          <h5 className="theme-text-white fs-6 ms-2">nouegyanhelp@gmail.com</h5>
        </div>
        <div className="col-md-5">
          <h5 className="theme-text-white fs-6 m-1">{new Date().toString()}</h5>
        </div>
      </div>

      <div className="row theme-bg-color dotted-line">
        <p className="text-center fw-bold mt-2 theme-text-white">
          For Admission and Examination related query, Kindly call on University helpline Numbers
          9341508580, 9341508577, 0612-2201013 & 0612-2206916
        </p>
      </div>

      <div className="row p-3">
        <div className="col-sm-1 p-0"></div>
        <div className="col-sm-1">
          <div className="rounded-circle border border-light shadow-sm">
            <img
              src="https://nouegyan.in/assets/img/logo/logo1.png"
              style={{ width: "70px", height: "70px" }}
              alt="NOU logo"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <h4 className="theme-text-darkred">NOU e-Gyan PORTAL</h4>
          <h6>(A Concept by Nalanda Open University)</h6>
        </div>
        <div className="col-sm-4 d-flex gap-2 align-items-center justify-content-center">
          <div className="border border-1 border-primary rounded-circle" style={{ width: "35px", height: "35px" }}>
            <a href=""><i className="fa-brands p-2 fa-twitter text-primary"></i></a>
          </div>
          <div className="border border-1 border-primary rounded-circle text-center pt-1" style={{ width: "35px", height: "35px", borderColor: "#3F5C9A" }}>
            <a href=""><i className="fa-brands fa-facebook"></i></a>
          </div>
          <div className="rounded-circle text-center pt-1" style={{ width: "35px", height: "35px", border: "1px solid #EA5B7C" }}>
            <a href=""><i style={{ color: "#EA5B7C" }} className="fa-brands fa-instagram"></i></a>
          </div>
          <div className="border border-1 border-primary rounded-circle" style={{ width: "35px", height: "35px" }}>
            <a href=""><i className="fa-brands p-2 fa-linkedin text-blue"></i></a>
          </div>
          <div className="border border-1 border-danger rounded-circle" style={{ width: "35px", height: "35px" }}>
            <a href=""><i className="fa-brands p-2 fa-youtube text-danger"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topheader
