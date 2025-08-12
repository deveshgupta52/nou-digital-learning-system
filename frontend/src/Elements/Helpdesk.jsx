import React from 'react';

function HelpDesk() {
  return (
    <div id='support' className="row align-items-center mt-1">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-1 ms-5 pe-0">
              <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">HELPDESK</h2>
            </div>
            <div className="col-7"></div>
          </div>

          <div className="row">
            <div className="col-md-7 fs-3 fw-bold ms-5">
              <p>ALWAYS <span className="theme-text-orange">HERE TO SUPPORT YOU!</span></p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* Left Image Section */}
      <div className="col-md-6 text-center">
        <img
          src="https://nouegyan.in/assets/img/helpline.svg"
          className="img-fluid"
          style={{ maxWidth: '60%' }}
          alt="Help Desk Illustration"
        />
      </div>

      {/* Right Info Section */}
      <div className="col-md-6">
        {/* Orange box */}
        <div
          className="p-3 mb-3"
          style={{
            backgroundColor: '#f26524',
            color: 'white',
            borderRadius: '5px',
          }}
        >
          The help desk provides user assistance to navigate and understand the aspects of the portal...
        </div>

        {/* Phone Card */}
        <div className="d-flex align-items-center border p-3 mb-3 rounded">
          <i className="fa fa-phone fs-4 fa-shake text-warning me-3"></i>
          <span>+91 7080102007</span>
        </div>

        {/* Email Card */}
        <div className="d-flex align-items-center border p-3 rounded">
          <i className="fa fa-envelope fs-4 fa-bounce text-warning me-3"></i>
          <span>nouegyanhelp@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default HelpDesk;
