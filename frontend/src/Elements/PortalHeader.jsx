import React from 'react';
import './PortalHeader.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/NOU-logo.png'; // Adjust the path as necessary

const PortalHeader = () => {
  return (
    <div className="portal-header">
      <div className="portal-left">
        <img src={logo} alt="NOU Logo" className="portal-logo" />
       
        <div>
          <h1 className="portal-title">NOU e-Gyan PORTAL</h1>
          <p className="portal-subtitle">(A Concept by Nalanda Open University)</p>
        </div>
      </div>
      <div className="portal-right">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default PortalHeader;
