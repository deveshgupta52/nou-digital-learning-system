import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const user = { userid: email, password };
    
    try {
      const res = await axios.post('http://localhost:3000/students/login', user);
      const data = res.data;

      if (data.message === "Login successful") {
        localStorage.setItem('emailId', res.data.userid);
        window.alert("Welcome back!");
        navigate('/studentdash');
      } else {
        window.alert("Username or password is wrong");
      }
    } catch (error) {
      console.error("Login error:", error);
      window.alert("Login failed. Please try again.");
    }
  }

  const styles = {
    container: {
      background: 'linear-gradient(135deg, #ff8c00 0%, #ffa500 50%, #ffbf00 100%)',
      minHeight: '100vh',
      padding: '40px 0'
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '20px',
      boxShadow: '0 20px 40px rgba(255, 140, 0, 0.3)',
      border: '2px solid rgba(255, 165, 0, 0.2)',
      backdropFilter: 'blur(10px)',
      maxWidth: '450px',
      margin: '0 auto'
    },
    header: {
      color: '#ff8c00',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(255, 140, 0, 0.3)',
      marginBottom: '30px',
      fontSize: '2.5rem'
    },
    formControl: {
      border: '2px solid #ffa500',
      borderRadius: '12px',
      padding: '15px 20px',
      fontSize: '16px',
      marginBottom: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 8px rgba(255, 140, 0, 0.1)'
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
      letterSpacing: '1px',
      width: '100%'
    },
    icon: {
      color: '#ff8c00',
      fontSize: '4rem',
      marginBottom: '20px'
    },
    label: {
      color: '#ff8c00',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize: '16px'
    }
  };

  return (
    
    <div style={styles.container} className="d-flex justify-content-center align-items-center px-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-9">
            <div className="card p-5" style={styles.card}>
              <div className="text-center mb-4">
                <i className="fas fa-user-circle" style={styles.icon}></i>
                <h2 style={styles.header}>Login</h2>
                <p style={{color: '#ff8c00', fontSize: '16px'}}>Welcome back! Please sign in to your account.</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" style={styles.label}>
                    <i className="fas fa-envelope me-2"></i>Email Address
                  </label>
                  <input 
                    type="email" 
                    className="form-control" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email address"
                    value={email}
                    required
                    style={styles.formControl}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ff8c00';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(255, 140, 0, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#ffa500';
                      e.target.style.boxShadow = '0 4px 8px rgba(255, 140, 0, 0.1)';
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" style={styles.label}>
                    <i className="fas fa-lock me-2"></i>Password
                  </label>
                  <input 
                    type="password" 
                    className="form-control" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password"
                    value={password}
                    required
                    style={styles.formControl}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#ff8c00';
                      e.target.style.boxShadow = '0 0 0 0.2rem rgba(255, 140, 0, 0.25)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#ffa500';
                      e.target.style.boxShadow = '0 4px 8px rgba(255, 140, 0, 0.1)';
                    }}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn"
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
                  <i className="fas fa-sign-in-alt me-2"></i>Login
                </button>

                <div className="text-center mt-4">
                  <p style={{color: '#ff8c00'}}>
                    Don't have an account? 
                    <a href="/registration" style={{color: '#ff8c00', textDecoration: 'none', fontWeight: 'bold'}}> Register Here</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;