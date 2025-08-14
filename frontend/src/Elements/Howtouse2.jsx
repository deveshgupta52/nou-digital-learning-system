import React from 'react';

const HowToUse = () => {
  const sectionStyle = {
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1676422355165-d809008b8342?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 20px',
    color: 'white',
    fontFamily: "'Segoe UI', sans-serif",
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const descriptionStyle = {
    fontSize: '16px',
    maxWidth: '900px',
    margin: '0 auto 40px',
    lineHeight: '1.6',
  };

  const videoContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardStyle = {
    background: 'rgba(0,0,0,0.6)',
    padding: '10px',
    border: '2px solid #e0e0e0',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    borderRadius: '5px',
  };

  const iframeStyle = {
    width: '100%',
    height: '260px',
    border: 'solid red',
    borderRadius: '4px',

  };

  const buttonRedStyle = {
    marginTop: '10px',
    padding: '12px',
    fontWeight: 'bold',
    border: 'none',
    width: '100%',
    fontSize: '14px',
    backgroundColor: '#f24726',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const buttonWhiteStyle = {
    ...buttonRedStyle,
    backgroundColor: 'white',
    color: '#f24726',
  };

  return (
    <div style={sectionStyle}>
      <p style={{ letterSpacing: '2px', fontWeight: 'bold', color: '#f8f8f8' }}>HOW TO USE</p>
      <h2 style={headingStyle}>
        <span style={{ color: '#fff' }}>NOU e–GYAN PORTAL</span> TUTORIAL VIDEOS
      </h2>
      <p style={descriptionStyle}>
        For any queries regarding the access into the Portal, the users can watch the tutorial videos provided or feel free to communicate their issues via the given contact helpline number or helpline email ID.
      </p>

      <div style={videoContainerStyle}>
        <div style={cardStyle}>
          <iframe
            src="https://www.youtube.com/embed/Sh9VxOBoYbk?si=cBL6-Fw7lWt3Em2Z"
            title="How to Login"
            allowFullScreen
            style={iframeStyle}
          ></iframe>
          <button style={buttonRedStyle}>HOW TO LOGIN AT NOU e-GYAN PORTAL</button>
        </div>

        <div style={cardStyle}>
          <iframe
            src="https://www.youtube.com/embed/cEaTY8EfdRs?si=Exj9JgPXquGkmij_"
            title="How to Access Content"
            allowFullScreen
            style={iframeStyle}
          ></iframe>
          <button style={buttonWhiteStyle}>HOW TO ACCESS CONTENT AT NOU e-GYAN PORTAL</button>
        </div>
      </div>
    </div>
  );
};

export default HowToUse
