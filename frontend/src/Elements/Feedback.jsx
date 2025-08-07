import React from 'react';

function Feedback() {
  return (
    <div className="row bg-light">

      <div className="col-12">
        <div className="row">
          <div className="col-1 ms-5 pe-0">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">FEEDBACK</h2>
          </div>
          <div className="col-1 orange-line mb-3 ms-3"></div>
          <div className="col-7"></div>
        </div>

        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>FEEDBACK <span>FROM OUR STUDENTS</span></p>
          </div>
          <div className="col-md-4"></div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-2" style={{ height: '150px', width: '150px' }}>
              <img
                src="https://nouegyan.in/assets/img/testimonial/t1.jpg"
                style={{ height: '100%', width: '100%' }}
                alt="testimonial"
              />
            </div>
            <div className="col-9">
              <p className="fw-bold">
                “This is best and biggest unified platform for instant online learning. We can easily
                access any content of our enrolled course from the portal. Thank you NOU e-Gyan!!“
              </p>
              <h6>-Saurabh Tripathi-</h6>
              <h6>University Student</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
