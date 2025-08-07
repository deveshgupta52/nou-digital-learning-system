import React, { useEffect, useState } from 'react';

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const HeaderBar = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(now) + ' (India Standard Time)');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-wrapper">
      <div className="header-bar">
        <div className="contact-info">
          <span><FaPhoneAlt /> +91 7080102007</span>
          <span><FaEnvelope /> nouegyanhelp@gmail.com</span>
        </div>
        <div className="time">{time}</div>
      </div>
      <div className="notice">
        For Admission and Examination related query, Kindly call on University helpline Numbers:  
        <span className="numbers">
          9341508580, 9341508577, 0612-2201013 & 0612-2206916
        </span>
      </div>
    </div>
  );
};

export default HeaderBar;
