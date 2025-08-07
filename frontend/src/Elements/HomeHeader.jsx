import React from "react";

import { FaPhone, FaWhatsapp } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <div className="home-header">
      {/* Top Navigation Bar */}
      <div className="topbar">
        <div className="topbar-left">
          <span>WELCOME <span className="highlight">STUDENTS</span></span>
        </div>
        <div className="topbar-right">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Services</li>
            <li>Study Centre</li>
            <li>Login</li>
            <li><FaPhone /> Contact</li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <img src="NOU-logo.png" alt="NOU Logo" className="hero-logo" />
          <h3>NOU e-Gyan Portal</h3>
          <h1>WELCOME<br /><span>ALL THE STUDENTS</span></h1>
        </div>

        <div className="hero-right">
          <p className="get-educated">Get Educated</p>
          <h2>From Our Content<br /> <span>For Distance Learning</span></h2>
          <p className="portal-name">
            NOU e-Gyan PORTAL, CONCEPT BY NALANDA OPEN UNIVERSITY
          </p>
          <img src="/student.jpg" alt="Student" className="student-image" />
        </div>

        {/* Side Icons */}
        <a href="NOU-whatsapp.png" className="whatsapp-icon">
          <FaWhatsapp />
        </a>

        <div className="side-tab-vertical">
          <span>E-Gyan Helpline No.<br /> +91 7080102007</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
