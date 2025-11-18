import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaHome, FaCog, FaUniversity, FaUser, FaEnvelope, FaUserPlus, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="welcome">WELCOME <span className="students">STUDENTS</span></span>
      </div>
      <div className="navbar-right">
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation('/'); }}>
          <FaHome /> Home ▾
        </a>
        <a href="/courses" onClick={(e) => { e.preventDefault(); handleNavigation('/courses'); }}>
          <FaBook /> Courses
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <FaCog /> Services
        </a>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <FaUniversity /> Study Centre
        </a>
        <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); toggleLoginDropdown(); }}
            style={{ cursor: 'pointer' }}
          >
            <FaUser /> Login ▾
          </a>
          {showLoginDropdown && (
            <div
              className="dropdown-menu"
              style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                minWidth: '150px',
                zIndex: 1000
              }}
            >
              <a
                href="/login"
                onClick={(e) => { e.preventDefault(); handleNavigation('/login'); setShowLoginDropdown(false); }}
                style={{
                  display: 'block',
                  padding: '10px 15px',
                  color: '#333',
                  textDecoration: 'none',
                  borderBottom: '1px solid #eee'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              >
                <FaSignInAlt /> Login
              </a>
              <a
                href="/register"
                onClick={(e) => { e.preventDefault(); handleNavigation('/register'); setShowLoginDropdown(false); }}
                style={{
                  display: 'block',
                  padding: '10px 15px',
                  color: '#333',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#f5f5f5'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
              >
                <FaUserPlus /> Register
              </a>
            </div>
          )}
        </div>
        <a href="#" onClick={(e) => e.preventDefault()}>
          <FaEnvelope /> Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
