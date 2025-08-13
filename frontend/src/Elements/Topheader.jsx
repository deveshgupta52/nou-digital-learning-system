import React from "react";

function Topheader() {
  return (
    <div>
      <div className="row orange py-3 dotted-line">
        <div className="col-md-1"></div>
        <div className="col-md-2 d-flex">
          <div>
            <i className="fa-solid fa-phone fa-shake fa-sm me-2 theme-text-white"></i>
          </div>
          <span className="theme-text-white fs-6">+91 9876543210</span>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4  d-flex px-5">
          <div>
            <i className="fa-solid fa-envelope fa-bounce fa-sm me-2 theme-text-white"></i>
          </div>
          <span className="theme-text-white fs-6">
            support@digitalassessment.edu
          </span>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
          <span className="theme-text-white fs-6">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="row orange dotted-line py-2">
        <p className="text-center fw-bold theme-text-white mb-0">
          For Digital Assessment and System Support, Contact our helpline:
          9876543210, 9876543211, 011-12345678
        </p>
      </div>

      <div className="row py-4 px-3 bg-white shadow-sm">
        <div className="col-sm-1 p-0"></div>
        <div className="col-sm-1">
          <img
            src="https://nouegyan.in/assets/img/logo/logo1.png"
            style={{ height: "100px", width: "100px" }}
            alt=""
          />
        </div>
        <div className="col-sm-6">
          <h3 className="theme-text-darkred fw-bold mb-1">
            DIGITAL LEARNING & ASSESSMENT SYSTEM
          </h3>
          <p className="theme-text-grey mb-0 fs-6">
            (Advanced Digital Learning and Assessment Platform)
          </p>
        </div>
        <div className="col-sm-4 d-flex gap-3 align-items-center justify-content-center">
          <a href="#" className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
