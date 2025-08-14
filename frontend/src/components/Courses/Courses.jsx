import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ViewCourses from "./ViewCourses";

const Courses = () => {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseName: "",
    duration: "",
    fee: "",
  });

  const [courses, setCourses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const navigate = useNavigate();

  const courseOptions = [
    "B.Tech",
    "M.Tech",
    "MBA",
    "MCA",
    "Diploma",
    "B.Pharma",
    "BBA",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...courses];
      updated[editIndex] = formData;
      setCourses(updated);
      setEditIndex(null);
    } else {
      setCourses([...courses, formData]);
    }

    setFormData({
      courseCode: "",
      courseName: "",
      duration: "",
      fee: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(courses[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = courses.filter((_, i) => i !== index);
    setCourses(filtered);
    setEditIndex(null);
    setFormData({ courseCode: "", courseName: "", duration: "", fee: "" });
  };

  const handleFinalSubmit = async () => {
    const res = await axios.post("http://localhost:3000/courses", {
      courses: courses,
    });
    console.log(res);
    if (res.data.msg == "success") {
      alert("Data Saved Successfully.");
      window.location.reload();
    } else {
      alert("Failed!!");
    }
  };

  async function showCourse() {
    const res = await axios.get("http://localhost:3000/courses");
    console.log(res.data);
    navigate("/admindash/viewcourses");
  }

  return (
    <div className="container mt-5 mb-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-row row mb-3">
          <div className="form-group col-md-4">
            <label style={{ fontWeight: "bold" }}>Course Code</label>
            <input
              type="text"
              className="form-control mb-3"
              name="courseCode"
              value={formData.courseCode}
              onChange={handleChange}
              required
              placeholder="e.g. C101"
              min="1"
              style={{ border: "1px solid #ccc" }}
            />

            <label style={{ fontWeight: "bold" }}>Course Name</label>
            <select
              name="courseName"
              className="form-control"
              value={formData.courseName}
              onChange={handleChange}
              required
              style={{ border: "1px solid #ccc" }}
            >
              <option value="">Select Course</option>
              {courseOptions.map((course, idx) => (
                <option key={idx} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-md-4">
            <label style={{ fontWeight: "bold" }}>Duration (months)</label>
            <input
              type="number"
              className="form-control"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="e.g. 24"
              min="1"
              style={{ border: "1px solid #ccc" }}
            />
          </div>

          <div className="form-group col-md-4">
            <label style={{ fontWeight: "bold" }}>Fee (₹)</label>
            <input
              type="number"
              className="form-control"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              required
              placeholder="e.g. 5000"
              min="1"
              style={{ border: "1px solid #ccc" }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-25 me-2"
          style={{
            fontWeight: "bold",
            padding: "10px",
            backgroundColor: "rgba(240, 108, 8, 1)",
            color: "white",
          }}
        >
          {editIndex !== null ? "Update Course" : "Add Course"}
        </button>
      </form>

      <button
        className="btn w-25 mb-5"
        onClick={showCourse}
        style={{
          fontWeight: "bold",
          padding: "10px",
          backgroundColor: "rgba(240, 108, 8, 1)",
          color: "white",
        }}
      >
        Show Courses
      </button>

      {courses.length > 0 && (
        <div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark" >
                <tr>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Duration (months)</th>
                  <th>Fee (₹)</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.courseCode}</td>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.fee}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEdit(index)}
                        style={{ marginRight: "5px" }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit All Button */}
          <button
            onClick={handleFinalSubmit}
            className="btn btn-dark w-100 mt-3"
            style={{
              fontWeight: "bold",
              padding: "10px",
              backgroundColor: "rgba(146, 4, 4, 1)",
            }}
          >
            Submit All Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
