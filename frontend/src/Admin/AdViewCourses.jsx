// ViewCourses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Function to fetch courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:3000/courses");
      setCourses(res.data.data);
      console.log(res.data.data); // assuming backend sends array directly
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch courses");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Inline styles with orange, dark orange, and amber theme
  const containerStyle = {
    backgroundColor: '#FFF7ED', // Very light orange background
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const headerStyle = {
    color: '#C2410C', // Dark orange
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const tableStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(194, 65, 12, 0.15)',
    border: 'none'
  };

  const tableHeaderStyle = {
    backgroundColor: '#EA580C', // Dark orange
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '15px',
    fontSize: '1.1rem',
    borderBottom: '3px solid #C2410C'
  };

  const tableRowStyle = {
    backgroundColor: '#FFFBEB', // Light amber
    transition: 'all 0.3s ease'
  };

  const tableRowHoverStyle = {
    backgroundColor: '#FEF3C7', // Amber
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
  };

  const tableCellStyle = {
    padding: '12px 15px',
    textAlign: 'center',
    color: '#92400E', // Dark amber
    fontWeight: '500',
    borderBottom: '1px solid #FDE68A'
  };

  const loadingStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#D97706', // Orange
    padding: '50px',
    backgroundColor: '#FEF3C7',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '400px',
    boxShadow: '0 4px 15px rgba(217, 119, 6, 0.2)'
  };

  const errorStyle = {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#DC2626', // Red for error
    backgroundColor: '#FEE2E2',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #F87171',
    margin: '20px auto',
    maxWidth: '500px'
  };

  const noDataStyle = {
    textAlign: 'center',
    color: '#A16207', // Dark amber
    fontSize: '1.1rem',
    fontStyle: 'italic',
    padding: '30px'
  };

  if (loading) {
    return (
      <div style={containerStyle}>
        <div style={loadingStyle}>
          <div className="spinner-border text-warning mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mb-0">Loading courses...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <div style={errorStyle}>
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div className="container-fluid">
        <h2 style={headerStyle}>
          <i className="bi bi-book-fill me-3"></i>
          All Courses
        </h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div style={tableStyle}>
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>
                      <i className="bi bi-code-square me-2"></i>
                      Course Code
                    </th>
                    <th style={tableHeaderStyle}>
                      <i className="bi bi-journal-text me-2"></i>
                      Course Name
                    </th>
                    <th style={tableHeaderStyle}>
                      <i className="bi bi-clock me-2"></i>
                      Duration
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courses.length > 0 ? (
                    courses.map((course, index) => (
                      <tr 
                        key={index}
                        style={tableRowStyle}
                        onMouseEnter={(e) => {
                          Object.assign(e.target.parentElement.style, tableRowHoverStyle);
                        }}
                        onMouseLeave={(e) => {
                          Object.assign(e.target.parentElement.style, tableRowStyle);
                        }}
                      >
                        <td style={tableCellStyle}>
                          <span className="badge" style={{
                            backgroundColor: '#F59E0B',
                            color: '#FFFFFF',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            fontSize: '0.9rem'
                          }}>
                            {course.courseCode}
                          </span>
                        </td>
                        <td style={tableCellStyle}>
                          <strong>{course.courseName}</strong>
                        </td>
                        <td style={tableCellStyle}>
                          <span style={{
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '6px 12px',
                            borderRadius: '15px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold'
                          }}>
                            {course.duration}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" style={noDataStyle}>
                        <i className="bi bi-inbox me-2"></i>
                        No courses available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourses;