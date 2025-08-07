import React from 'react';

function FloatingButton() {
  return (
    <>
      {/* Helpline Banner */}
      <div
        className="blink"
        style={{
          position: 'fixed',
          zIndex: 20,
          top: '50%',
          right: '-80px',
          backgroundColor: 'darkred',
          color: 'white',
          padding: '10px 5px',
          borderRadius: '50px 50px 0 0px',
          transform: 'rotate(270deg)',
          textAlign: 'center',
          width: '220px',
          height: '70px',
        }}
      >
        E-Gyan Helpline No.
        <br />
        +91 7080102007
      </div>

      {/* WhatsApp Icon */}
      <div
        style={{
          position: 'fixed',
          zIndex: 20,
          top: '50%',
          left: 0,
        }}
      >
        <img
          src="https://nouegyan.in/assets/img/w-icon.svg"
          style={{ width: '50px', height: '50px' }}
          alt="WhatsApp Icon"
        />
      </div>
    </>
  );
}

export default FloatingButton;
