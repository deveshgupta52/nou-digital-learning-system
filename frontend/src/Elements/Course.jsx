import React from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Certification in Interior Decoration',
    img: 'https://nouegyan.in/assets/img/course/cid.png',
  },
  {
    title: 'Bachelor in Business Administration (BBA)',
    img: 'https://nouegyan.in/assets/img/course/bba.png',
  },
  {
    title: 'Bachelor in Computer Application (BCA)',
    img: 'https://nouegyan.in/assets/img/course/bca.png',
  },
];

const CourseCard = ({ img, title }) => (
  <div className="col-md-4">
    <div className="card text-center p-3">
      <img
        src={img}
        style={{ width: '300px', height: '100px' }}
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title.includes('<br />') ? (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            title
          )}
        </h5>
        <div>
          {[...Array(5)].map((_, i) => (
            <i key={i} className="fas fa-star text-warning"></i>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Courses = () => {
  return (
    <div id='courses' className="col-12">
      {/* Section Header */}
      <div className="row">
        <div className="col-1 ms-5 px-">
          <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">COURSES</h2>
        </div>
        <div className="col-7"></div>
      </div>

      <div className="row">
        <div className="col-md-7 fs-3 fw-bold ms-5">
          <p>
            OUR <span className="theme-text-orange">COURSES</span>
          </p>
        </div>
        <div className="col-md-4"> <Link to={"/viewcourses"} style={{textDecoration:"none"}}>

          <button
            type="button"
            className="btn btn-warning ps-auto w-100 h-100 text-light border-0 rounded-2 ">
            View ALL COURSES
          </button>
         </Link></div>
      </div>

      {/* View All Button */}
      <div className="row mx-auto">
        <div className="col-9"></div>
        
      </div>

      {/* Carousel */}
      <div className="row mb-2 ">
        <div className="col ">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              className="carousel-inner w-75 mt-5 mb-1"
              style={{
                border: 'none',
                marginLeft: '125px',
                height: '300px',
              }}
            >
              {[0, 1, 2].map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    index === 0 ? 'active' : ''
                  } d-flex justify-content-center align-items-center`}
                  style={{ backgroundColor: 'white' }}
                >
                  <div className="row justify-content-center">
                    {courses.map((course, i) => (
                      <CourseCard key={i} {...course} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div
              className="carousel-indicators position-absolute bottom-0 start-0 mb-0"
              style={{ zIndex: 10 }}
            >
              {[0, 1, 2].map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carouselExampleSlidesOnly"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
