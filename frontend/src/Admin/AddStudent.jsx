import React, { useState } from 'react';
import axios from 'axios';
import { Plus, Save, X } from 'lucide-react';

const AddStudent = ({ onStudentAdded, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Form state for adding new student
  const [newStudent, setNewStudent] = useState({
    rollno: '',
    name: '',
    fname: '',
    mname: '',
    gender: '',
    address: '',
    courseCode: '',
    branch: '',
    year: '',
    contactno: '',
    emailaddress: '',
    password: ''
  });
  
  // Validate student data before submission
  const validateStudentData = (student) => {
    // Check year format
    if (!/^\d{4}$/.test(student.year)) {
      return 'Year must be in YYYY format (e.g., 2023)';
    }
    
    // Check contact number format
    if (!/^[6-9][0-9]{9}$/.test(student.contactno)) {
      return 'Contact number must be a valid 10-digit Indian number starting with 6, 7, 8, or 9';
    }
    
    // Check email format
    if (!/.+@.+\..+/.test(student.emailaddress)) {
      return 'Please enter a valid email address';
    }
    
    // Check name length
    if (student.name.length < 2) {
      return 'Name must be at least 2 characters long';
    }
    
    return null; // No validation errors
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };
  
  // Add new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const validationError = validateStudentData(newStudent);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/students/register', newStudent);
      
      // Reset form
      setNewStudent({
        rollno: '',
        name: '',
        fname: '',
        mname: '',
        gender: '',
        address: '',
        courseCode: '',
        branch: '',
        year: '',
        contactno: '',
        emailaddress: '',
        password: ''
      });
      
      setError('');
      
      // Notify parent component
      if (onStudentAdded) {
        onStudentAdded(response.data.student);
      }
    } catch (err) {
      // Show more detailed error message
      let errorMessage = 'Failed to add student: ';
      if (err.response) {
        // Server responded with error status
        if (err.response.data && err.response.data.message) {
          errorMessage += err.response.data.message;
          // Provide more user-friendly message for common errors
          if (err.response.data.message === "Email already registered") {
            errorMessage = "Failed to add student: This email address is already registered. Please use a different email address.";
          } else if (err.response.data.message === "Login already exists for this email") {
            errorMessage = "Failed to add student: A login account already exists for this email address. Please use a different email address.";
          }
        } else if (err.response.data && err.response.data.error) {
          errorMessage += err.response.data.error;
        } else {
          errorMessage += `Server error ${err.response.status}: ${err.response.statusText}`;
        }
      } else if (err.request) {
        // Request was made but no response received
        errorMessage += 'No response from server. Please check your connection.';
      } else {
        // Something else happened
        errorMessage += err.message;
      }
      setError(errorMessage);
      console.error('Error adding student:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <Plus size={20} className="me-2" />
              Add New Student
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onCancel}
              disabled={loading}
            ></button>
          </div>
          <form onSubmit={handleAddStudent}>
            <div className="modal-body">
              {/* Error Message */}
              {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  {error}
                  <button type="button" className="btn-close" onClick={() => setError('')} disabled={loading}></button>
                </div>
              )}
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Roll Number</label>
                  <input
                    type="number"
                    className="form-control"
                    name="rollno"
                    value={newStudent.rollno}
                    onChange={handleInputChange}
                    required
                    placeholder="Unique roll number"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={newStudent.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Full name of student"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Father's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={newStudent.fname}
                    onChange={handleInputChange}
                    required
                    placeholder="Father's full name"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Mother's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mname"
                    value={newStudent.mname}
                    onChange={handleInputChange}
                    required
                    placeholder="Mother's full name"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Gender</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={newStudent.gender}
                    onChange={handleInputChange}
                    required
                    disabled={loading}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">courseCode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="courseCode"
                    value={newStudent.courseCode}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. CS101, Ec102"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Branch</label>
                  <input
                    type="text"
                    className="form-control"
                    name="branch"
                    value={newStudent.branch}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Computer Science, Arts, etc."
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    value={newStudent.year}
                    onChange={handleInputChange}
                    required
                    placeholder="YYYY (e.g., 2023)"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="contactno"
                    value={newStudent.contactno}
                    onChange={handleInputChange}
                    required
                    placeholder="10-digit number starting with 6,7,8 or 9"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailaddress"
                    value={newStudent.emailaddress}
                    onChange={handleInputChange}
                    required
                    placeholder="student@example.com"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={newStudent.password}
                    onChange={handleInputChange}
                    required
                    placeholder="Minimum 6 characters"
                    disabled={loading}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={newStudent.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Full residential address"
                    disabled={loading}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onCancel}
                disabled={loading}
              >
                <X size={18} className="me-1" />
                Cancel
              </button>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                    Adding...
                  </>
                ) : (
                  <>
                    <Save size={18} className="me-1" />
                    Add Student
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;