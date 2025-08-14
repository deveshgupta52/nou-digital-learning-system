import React from 'react';

const RobotIcon = ({ size = 24, color = '#ffffff', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Robot head */}
      <rect x="6" y="4" width="12" height="10" rx="2" fill={color} />
      
      {/* Robot antenna */}
      <rect x="11" y="2" width="2" height="2" fill={color} />
      
      {/* Robot eyes */}
      <circle cx="9" cy="8" r="1.5" fill="#000000" />
      <circle cx="15" cy="8" r="1.5" fill="#000000" />
      
      {/* Robot mouth */}
      <rect x="9" y="11" width="6" height="1" fill="#000000" />
      
      {/* Robot neck */}
      <rect x="10" y="14" width="4" height="2" fill={color} />
      
      {/* Robot body */}
      <rect x="4" y="16" width="16" height="4" rx="1" fill={color} />
      
      {/* Robot arms */}
      <rect x="2" y="17" width="2" height="3" rx="1" fill={color} />
      <rect x="20" y="17" width="2" height="3" rx="1" fill={color} />
      
      {/* Robot legs */}
      <rect x="8" y="20" width="2" height="2" fill={color} />
      <rect x="14" y="20" width="2" height="2" fill={color} />
    </svg>
  );
};

export default RobotIcon;