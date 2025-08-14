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
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch courses");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center" style={{ color: "orange", fontWeight: "bold" }}>
        All Courses
      </h2>
      <table
        className="table table-bordered table-striped"
        style={{
          border: "2px solid orange",
          backgroundColor: "#fff",
          color: "black"
        }}
      >
        <thead
          style={{
            backgroundColor: "orange",
            color: "white",
            fontWeight: "bold",
            border: "2px solid orange"
          }}
        >
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Duration (Months)</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={index} style={{ border: "1px solid orange" }}>
                <td>{course.courseCode}</td>
                <td>{course.courseName}</td>
                <td>{course.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No courses available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCourses;
