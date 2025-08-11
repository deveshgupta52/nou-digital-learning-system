import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [formData, setFormData] = useState({
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
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
const res=await axios.post("http://localhost:3000/api/students/register",formData);
    console.log(res.data);
    setFormData({
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

    }catch(err){
     console.error(err.response?.data);
  setMessage(err.response?.data?.message || "Registration failed!");
  console.log(message)
    }
    
  
  };

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #ff8c00 0%, #ffa500 50%, #ffbf00 100%)',
      minHeight: '100vh',
      padding: '40px',
      width:'100%'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(255, 140, 0, 0.3)',
      border: '2px solid rgba(255, 165, 0, 0.2)',
      backdropFilter: 'blur(10px)'
    },
    header: {
      color: '#ff8c00',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(255, 140, 0, 0.3)',
      marginBottom: '30px'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    inputGroupText: {
      backgroundColor: '#ff8c00',
      color: 'white',
      border: '2px solid #ff8c00',
      fontWeight: 'bold'
    },
    formControl: {
      border: '2px solid #ffa500',
      borderRadius: '8px',
      padding: '12px',
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    submitBtn: {
      background: 'linear-gradient(45deg, #ff8c00, #ffa500)',
      border: 'none',
      borderRadius: '12px',
      padding: '15px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white',
      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
      boxShadow: '0 8px 16px rgba(255, 140, 0, 0.4)',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    }
  };

  return (
    <div style={styles.container} className="container-fluid d-flex justify-content-center align-items-center px-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card p-5" style={styles.card}>
              <h2 className="text-center" style={styles.header}>
                <i className="fas fa-graduation-cap me-3"></i>
                Student Registration
              </h2>
              
              <form onSubmit={handleSubmit} className="row g-4">
                {/* Roll Number */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Roll Number</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-id-card"></i>
                    </span>
                    <input 
                      type="number" 
                      className="form-control" 
                      name="rollno" 
                      value={formData.rollno}
                      onChange={handleInputChange}
                      placeholder="Enter Roll Number"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Name */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Name</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-user"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Father's Name */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Father's Name</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-user-tie"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="fname" 
                      value={formData.fname}
                      onChange={handleInputChange}
                      placeholder="Enter Father's Name"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Mother's Name */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Mother's Name</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-female"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="mname" 
                      value={formData.mname}
                      onChange={handleInputChange}
                      placeholder="Enter Mother's Name"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Gender</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-venus-mars"></i>
                    </span>
                    <select 
                      className="form-control" 
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className="col-md-12">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Address</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <textarea 
                      className="form-control" 
                      name="address" 
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter Permanent Address"
                      rows="3"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    ></textarea>
                  </div>
                </div>

                {/* Program */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Program</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-graduation-cap"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="program" 
                      value={formData.program}
                      onChange={handleInputChange}
                      placeholder="Enter Program"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Branch */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Branch</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-code-branch"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="branch" 
                      value={formData.branch}
                      onChange={handleInputChange}
                      placeholder="Enter Branch"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Year */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Year</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-calendar-alt"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="year" 
                      value={formData.year}
                      onChange={handleInputChange}
                      placeholder="e.g. 2025"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Contact Number */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Contact Number</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-phone"></i>
                    </span>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="contactno" 
                      value={formData.contactno}
                      onChange={handleInputChange}
                      placeholder="Contact No."
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Email Address</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input 
                      type="email" 
                      className="form-control" 
                      name="emailaddress" 
                      value={formData.emailaddress}
                      onChange={handleInputChange}
                      placeholder="Enter Email"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="col-md-6">
                  <label className="form-label fw-bold" style={{color: '#ff8c00'}}>Password</label>
                  <div className="input-group" style={styles.inputGroup}>
                    <span className="input-group-text" style={styles.inputGroupText}>
                      <i className="fas fa-lock"></i>
                    </span>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="password" 
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      style={styles.formControl}
                      onFocus={(e) => e.target.style.borderColor = '#ff8c00'}
                      onBlur={(e) => e.target.style.borderColor = '#ffa500'}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-4">
                  <button 
                    type="submit" 
                    className="btn w-100"
                    style={styles.submitBtn}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 12px 24px rgba(255, 140, 0, 0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 16px rgba(255, 140, 0, 0.4)';
                    }}
                  >
                    <i className="fas fa-paper-plane me-2"></i>Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;