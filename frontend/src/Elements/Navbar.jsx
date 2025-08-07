import React from 'react';

import { FaBook, FaHome, FaCog, FaUniversity, FaUser, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="welcome">WELCOME <span className="students">STUDENTS</span></span>
      </div>
      <div className="navbar-right">
        <a href="#"><FaHome /> Home ▾</a>
        <a href="#"><FaBook /> Courses</a>
        <a href="#"><FaCog /> Services</a>
        <a href="#"><FaUniversity /> Study Centre</a>
        <a href="#"><FaUser /> Login ▾</a>
        <a href="#"><FaEnvelope /> Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
