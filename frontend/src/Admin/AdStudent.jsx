import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Users, Search, Save, X, Trash2, ToggleLeft, ToggleRight, Pencil } from 'lucide-react';

const StudentManagement = ({ refreshDashboard }) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Form state for adding new student
  const [newStudent, setNewStudent] = useState({
    rollno: '',
    name: '',
    fname: '',
    mname: '',
    gender: '',
    address: '',
    program: '',
    branch: '',
    year: '',
    contactno: '',
    emailaddress: '',
    password: ''
  });
  
  // Form state for editing student
  const [editStudent, setEditStudent] = useState({
    _id: '',
    rollno: '',
    name: '',
    fname: '',
    mname: '',
    gender: '',
    address: '',
    program: '',
    branch: '',
    year: '',
    contactno: '',
    emailaddress: ''
  });
  const [showEditForm, setShowEditForm] = useState(false);
  
  // Fetch all students
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/students');
      setStudents(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch students: ' + (err.response?.data?.message || err.message));
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };
  
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
      const response = await axios.post('http://localhost:3000/students/', newStudent);
      setStudents([...students, response.data.student]);
      setNewStudent({
        rollno: '',
        name: '',
        fname: '',
        mname: '',
        gender: '',
        address: '',
        program: '',
        branch: '',
        year: '',
        contactno: '',
        emailaddress: '',
        password: ''
      });
      setShowAddForm(false);
      setError('');
      alert('Student added successfully!');
      
      // Refresh the dashboard to show updated student count
      if (refreshDashboard) {
        refreshDashboard();
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
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: value
    });
  };
  
  // Toggle student status
  const toggleStudentStatus = async (id, currentStatus) => {
    try {
      setLoading(true);
      const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
      const response = await axios.patch(`http://localhost:3000/api/students/${id}/status`, { status: newStatus });
      
      // Update the student status in the state
      setStudents(students.map(student =>
        student._id === id ? { ...student, status: newStatus } : student
      ));
      
     setError('');
     
     // Refresh the dashboard to show updated student count
     if (refreshDashboard) {
       refreshDashboard();
     }
   } catch (err) {
      let errorMessage = 'Failed to update student status: ';
      if (err.response) {
        if (err.response.data && err.response.data.message) {
          errorMessage += err.response.data.message;
        } else {
          errorMessage += `Server error ${err.response.status}: ${err.response.statusText}`;
        }
      } else if (err.request) {
        errorMessage += 'No response from server. Please check your connection.';
      } else {
        errorMessage += err.message;
      }
      setError(errorMessage);
      console.error('Error updating student status:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Delete student
  const deleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student? This action cannot be undone.')) {
      try {
        setLoading(true);
        await axios.delete(`http://localhost:3000/students/${id}`);
        // Remove the deleted student from the state
        setStudents(students.filter(student => student._id !== id));
        setError('');
        
        // Refresh the dashboard to show updated student count
        if (refreshDashboard) {
          refreshDashboard();
        }
      } catch (err) {
        let errorMessage = 'Failed to delete student: ';
        if (err.response) {
          if (err.response.data && err.response.data.message) {
            errorMessage += err.response.data.message;
          } else {
            errorMessage += `Server error ${err.response.status}: ${err.response.statusText}`;
          }
        } else if (err.request) {
          errorMessage += 'No response from server. Please check your connection.';
        } else {
          errorMessage += err.message;
        }
        setError(errorMessage);
        console.error('Error deleting student:', err);
      } finally {
        setLoading(false);
      }
    }
  };
  
  // Handle form input changes for editing student
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudent({
      ...editStudent,
      [name]: value
    });
  };
  
  // Open edit form with student data
  const openEditForm = (student) => {
    setEditStudent({ ...student });
    setShowEditForm(true);
  };
  
  // Edit student
  const handleEditStudent = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const validationError = validateStudentData(editStudent);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    try {
      setLoading(true);
      const response = await axios.put(`http://localhost:3000/students/${editStudent._id}`, editStudent);
      
      // Update the student in the state
      setStudents(students.map(student =>
        student._id === editStudent._id ? response.data.student : student
      ));
      
      setShowEditForm(false);
      setError('');
      alert('Student updated successfully!');
      
      // Refresh the dashboard to show updated student count
      if (refreshDashboard) {
        refreshDashboard();
      }
    } catch (err) {
      // Show more detailed error message
      let errorMessage = 'Failed to update student: ';
      if (err.response) {
        // Server responded with error status
        if (err.response.data && err.response.data.message) {
          errorMessage += err.response.data.message;
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
      console.error('Error updating student:', err);
    } finally {
      setLoading(false);
    }
  };
  
  // Filter students based on search term
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollno.toString().includes(searchTerm) ||
    student.emailaddress.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  useEffect(() => {
    fetchStudents();
  }, []);
  
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">
          <Users size={24} className="me-2" />
          Student Management
        </h3>
        <button 
          className="btn btn-primary"
          onClick={() => setShowAddForm(true)}
        >
          <Plus size={18} className="me-1" />
          Add New Student
        </button>
      </div>
      
      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group" style={{ maxWidth: '400px' }}>
          <span className="input-group-text">
            <Search size={18} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search by name, roll number, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          {error}
          <button type="button" className="btn-close" onClick={() => setError('')}></button>
        </div>
      )}
      
      {/* Add Student Form Modal */}
      {showAddForm && (
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
                  onClick={() => setShowAddForm(false)}
                ></button>
              </div>
              <form onSubmit={handleAddStudent}>
                <div className="modal-body">
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
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Program</label>
                      <input
                        type="text"
                        className="form-control"
                        name="program"
                        value={newStudent.program}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., BCA, BBA, etc."
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
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={() => setShowAddForm(false)}
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
      )}
      
      {/* Edit Student Form Modal */}
      {showEditForm && (
        <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Edit Student
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowEditForm(false)}
                  disabled={loading}
                ></button>
              </div>
              <form onSubmit={handleEditStudent}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Roll Number</label>
                      <input
                        type="number"
                        className="form-control"
                        name="rollno"
                        value={editStudent.rollno}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={editStudent.name}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Father's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        value={editStudent.fname}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Mother's Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mname"
                        value={editStudent.mname}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Gender</label>
                      <select
                        className="form-select"
                        name="gender"
                        value={editStudent.gender}
                        onChange={handleEditInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Program</label>
                      <input
                        type="text"
                        className="form-control"
                        name="program"
                        value={editStudent.program}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Branch</label>
                      <input
                        type="text"
                        className="form-control"
                        name="branch"
                        value={editStudent.branch}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Year</label>
                      <input
                        type="text"
                        className="form-control"
                        name="year"
                        value={editStudent.year}
                        onChange={handleEditInputChange}
                        required
                        placeholder="YYYY"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Contact Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactno"
                        value={editStudent.contactno}
                        onChange={handleEditInputChange}
                        required
                        placeholder="10-digit number"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        name="emailaddress"
                        value={editStudent.emailaddress}
                        onChange={handleEditInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Address</label>
                      <textarea
                        className="form-control"
                        name="address"
                        value={editStudent.address}
                        onChange={handleEditInputChange}
                        required
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowEditForm(false)}
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
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save size={18} className="me-1" />
                        Update Student
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      
      {/* Students Table */}
      <div className="card">
        <div className="card-body">
          {loading && students.length === 0 ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading students...</p>
            </div>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">All Students ({filteredStudents.length})</h5>
              </div>
              
              {filteredStudents.length === 0 ? (
                <div className="text-center py-5">
                  <Users size={48} className="text-muted mb-3" />
                  <p className="text-muted">
                    {students.length === 0 ? 'No students found.' : 'No students match your search.'}
                  </p>
                  <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>
                    <Plus size={18} className="me-1" />
                    Add Your First Student
                  </button>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table text-center table-hover">
                    <thead>
                      <tr>
                        <th>Roll No.</th>
                        <th>Name</th>
                        <th>Program</th>
                        <th>Branch</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th colSpan={2} >Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                       <tr key={student._id}>
                         <td>{student.rollno}</td>
                         <td>
                           <div>
                             <strong>{student.name}</strong>
                           </div>
                           <div className="small text-muted">
                             {student.fname} & {student.mname}
                           </div>
                         </td>
                         <td>{student.program}</td>
                         <td>{student.branch}</td>
                         <td>{student.emailaddress}</td>
                         <td>{student.contactno}</td>
                         <td>
                           <span className={`badge ${student.status === 'active' ? 'bg-success' : 'bg-danger'}`}>
                             {student.status}
                           </span>
                         </td>
                         <td>
                           <div className="d-flex gap-1">
                             <button
                               className="btn btn-warning btn-sm"
                               onClick={() => openEditForm(student)}
                               disabled={loading}
                               title="Edit student"
                             >
                               <Pencil size={14} />
                             </button>
                             {/* <button
                               className="btn btn-sm"
                               onClick={() => toggleStudentStatus(student._id, student.status)}
                               disabled={loading}
                               style={{
                                 backgroundColor: student.status === 'active' ? '#28a745' : '#dc3545',
                                 color: 'white'
                               }}
                               title={student.status === 'active' ? 'Deactivate student' : 'Activate student'}
                             >
                               {student.status === 'active' ? (
                                 <ToggleLeft size={14} />
                               ) : (
                                 <ToggleRight size={14} />
                               )}
                             </button> */}
                             <button
                               className="btn btn-danger btn-lg"
                               onClick={() => deleteStudent(student._id)}
                               disabled={loading}
                               title="Delete student"
                             >
                               <Trash2 size={14} />
                             </button>
                           </div>
                         </td>
                       </tr>
                     ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;