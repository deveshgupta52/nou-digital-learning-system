import React from 'react';

const cardImage = "https://nouegyan.in/assets/img/services/registration.jpg";

const StudentServices = () => {
  const renderCard = (key) => (
    <div
      key={key}
      style={{
        height: "310px",
        width: "220px",
        border: "1px solid grey",
        padding: 0
      }}
    >
      <img
        src={cardImage}
        alt="Service"
        style={{ width: "100%", height: "270px" }}
      />
      <div
        className="btn theme-bg-color border-0 rounded-0 w-100 theme-text-white"
        style={{ height: "40px" }}
      >
        Login
      </div>
    </div>
  );

  return (
    <div className="row">
      <div className="col">
        {/* Section Header */}
        <div className="row">
          <div className="col-1 ms-5 pe-0">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">FEATURES</h2>
          </div>
          <div className="col-1 orange-line mb-3 ms-3"></div>
          <div className="col-7"></div>
        </div>

        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>STUDENT <span>SERVICES</span></p>
          </div>
          <div className="col-md-4"></div>
        </div>

        {/* First Row of Cards */}
        <div className="row d-flex justify-content-evenly align-items-center">
          {[1, 2, 3, 4].map((item) => renderCard(`row1-${item}`))}
        </div>

        {/* Second Row of Cards */}
        <div className="row d-flex justify-content-evenly align-items-center p-0 mt-5">
          {[1, 2, 3, 4].map((item) => renderCard(`row2-${item}`))}
        </div>
      </div>
    </div>
  );
};

export default StudentServices;
