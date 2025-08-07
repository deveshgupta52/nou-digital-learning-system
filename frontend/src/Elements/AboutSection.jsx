import React from 'react'

function AboutSection() {
  return (
    <div className="row">
      <div className="col-12">
        {/* Header Row */}
        <div className="row">
          <div className="col-1 ms-5">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">DESCRIPTION</h2>
          </div>
          <div className="col-2 orange-line mb-3 ms-3"></div>
          <div className="col-7"></div>
          <div className="col-3"></div>
        </div>

        {/* Title Row */}
        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>ABOUT <span>NOU e-GYAN PORTAL</span></p>
          </div>
          <div className="col-md-4"></div>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Text Content */}
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <p>
              <strong>Nalanda Open University</strong> welcomes all our students, faculties & study centres to the
              very new & innovative online study portal <strong>NOU e-Gyan.</strong> The portal is a unique initiative by
              Hon'ble Vice-Chancellor Prof. <strong>(Dr.) K C Sinha</strong>, which aims at providing online study
              material to the students of NOU.<br /><br />
              The portal is accessible from any hook and corner of the world if the system allows the permission to
              its users. It is also fully secured and accessible 24 x 7 to its authorised users. It will resolve the
              academic issues such as E-content Distribution, Delivery, Tracking, Assessment, Progress Monitoring &
              Controlling of all stakeholders of the system i.e. students, teachers, study centre administrators as
              well as Nalanda Open University Admins when they are at a distance.
            </p>
          </div>

          {/* Image and Video */}
          <div className="col-md-5 position-relative d-flex p-0">
            <img
              className="ms-auto"
              src="https://nouegyan.in/assets/img/slider1.jpeg"
              style={{ height: "300px" }}
              alt="NOU Slide"
            />
            <div
              className="position-absolute top-50 translate-middle-y"
              style={{ zIndex: 10, height: "150px", width: "300px" }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/jVl8uLz8f9w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="NOU Intro Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
