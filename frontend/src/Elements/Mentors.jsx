import React from 'react';

const mentors = [
  {
    name: "Prof. (Dr.) K. C. Sinha",
    title: "Vice-Chancellor",
    image: "https://nouegyan.in/assets/img/mentor/vc.jpg"
  },
  {
    name: "Prof. (Dr.) K. C. Sinha",
    title: "Vice-Chancellor",
    image: "https://nouegyan.in/assets/img/mentor/vc.jpg"
  },
  {
    name: "Prof. (Dr.) K. C. Sinha",
    title: "Vice-Chancellor",
    image: "https://nouegyan.in/assets/img/mentor/vc.jpg"
  },
  {
    name: "Prof. (Dr.) K. C. Sinha",
    title: "Vice-Chancellor",
    image: "https://nouegyan.in/assets/img/mentor/vc.jpg"
  }
];

const MentorCard = ({ name, title, image }) => (
  <div className="col-2 bg-light border rounded-1 mb-5">
    <div className="row">
      <div className="col d-flex justify-content-center mt-3">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "180px",
            width: "190px",
            backgroundColor: "white",
            border: "1px solid darkred",
            borderRadius: "50%"
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              height: "160px",
              width: "160px",
              border: "1px solid darkred",
              borderRadius: "50%"
            }}
          />
        </div>
      </div>
    </div>
    <div className="row">
      <h4 className="theme-text-darkred fs-5 mt-3 text-center">{name}</h4>
    </div>
    <div className="row">
      <p className="text-center mb-3">{title}</p>
    </div>
  </div>
);

const Mentors = () => {
  return (
    <div className="row theme-bg-grey " style={{height:'500px'}}>
      <div className="col-12  mb-5">
        {/* Header */}
        <div className="row">
          <div className="col-1 ms-5 ">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">OUR MENTORS</h2>
          </div>
          
          <div className="col-7"></div>
        </div>

        {/* Sub-header */}
        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>ADMINISTRATIVE <span className="theme-text-orange">SETUP</span></p>
          </div>
          <div className="col-md-4"></div>
        </div>

        {/* Cards */}
        <div className="row theme-bg-grey  mb-5">
          <div className="col theme-bg-grey" style={{ height: "220px" }}>
            <div className="row d-flex gap-1 justify-content-evenly">
              {mentors.map((mentor, index) => (
                <MentorCard
                  key={index}
                  name={mentor.name}
                  title={mentor.title}
                  image={mentor.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
