import React from 'react';

const Courses = ({ coursesData }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Enrolled Courses</h3>
      <div className="row">
        {coursesData.map((course, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header text-white" style={{ background: `linear-gradient(135deg, #ff8c00, #ffa500)` }}>
                <h5 className="mb-0">{course.name}</h5>
                <small>{course.code}</small>
              </div>
              <div className="card-body">
                <p className="card-text">{course.description}</p>
                <p className="mb-0"><strong>Instructor:</strong> {course.instructor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;