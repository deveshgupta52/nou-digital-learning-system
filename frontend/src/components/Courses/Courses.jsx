import React, { useState } from 'react';

const Courses = () => {
  const [formData, setFormData] = useState({
    courseCode : '',
    courseName: '',
    duration: '',
    fee: '',
  });

  const [courses, setCourses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const courseOptions = [
    'B.Tech',
    'M.Tech',
    'MBA',
    'MCA',
    'Diploma',
    'B.Pharma',
    'BBA',
    'Other',
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
      courseName: '',
      duration: '',
      fee: '',
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
    setFormData({ courseName: '', duration: '', fee: '' });
  };

  const handleFinalSubmit = () => {
    alert('Submitted Courses:\n' + JSON.stringify(courses, null, 2));
    // Here, you can send data to the backend or do anything else.
  };

  return (
    <div className="container mt-5 mb-5">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-row row mb-3">
          <div className="form-group col-md-4">

            <label style={{ fontWeight: 'bold' }}>Duration (months)</label>
            <input
              type="number"
              className="form-control"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="e.g. 24"
              min="1"
              style={{ border: '1px solid #ccc' }}/>

            <label style={{ fontWeight: 'bold' }}>Course Name</label>
            <select
              name="courseName"
              className="form-control"
              value={formData.courseName}
              onChange={handleChange}
              required
              style={{ border: '1px solid #ccc' }}
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
            <label style={{ fontWeight: 'bold' }}>Duration (months)</label>
            <input
              type="number"
              className="form-control"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              placeholder="e.g. 24"
              min="1"
              style={{ border: '1px solid #ccc' }}
            />
          </div>

          <div className="form-group col-md-4">
            <label style={{ fontWeight: 'bold' }}>Fee (₹)</label>
            <input
              type="number"
              className="form-control"
              name="fee"
              value={formData.fee}
              onChange={handleChange}
              required
              placeholder="e.g. 5000"
              min="1"
              style={{ border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn w-100"
          style={{
            fontWeight: 'bold',
            padding: '10px',
            backgroundColor: 'rgba(240, 108, 8, 1)',
            color: 'white',
          }}
        >
          {editIndex !== null ? 'Update Course' : 'Add Course'}
        </button>
      </form>

      {courses.length > 0 && (
        <div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Course Name</th>
                  <th>Duration (months)</th>
                  <th>Fee (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.fee}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => handleEdit(index)}
                        style={{ marginRight: '5px' }}
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
            style={{ fontWeight: 'bold', padding: '10px',backgroundColor: 'rgba(146, 4, 4, 1)'  }}
          >
            Submit All Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;
