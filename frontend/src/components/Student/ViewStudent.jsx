import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch students
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/students"); // change URL to your API
      console.log(res.data);
      setStudents(res.data); // assuming data is in res.data.data
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch students");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">All Students</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Roll No</th>
              <th>Name</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Program</th>
              <th>Branch</th>
              <th>Year</th>
              <th>Contact No</th>
              <th>Email Address</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={index}>
                  <td>{student.rollno}</td>
                  <td>{student.name}</td>
                  <td>{student.fname}</td>
                  <td>{student.mname}</td>
                  <td>{student.gender}</td>
                  <td>{student.address}</td>
                  <td>{student.program}</td>
                  <td>{student.branch}</td>
                  <td>{student.year}</td>
                  <td>{student.contactno}</td>
                  <td>{student.emailaddress}</td>
                  <td>{new Date(student.regdate).toLocaleDateString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center">
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewStudents;
