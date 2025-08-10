import React from 'react';

const AboutSection = () => {
  return (
<>
<hr className="my-5" />

   <div className="container fade-in-up">

    <div className="row">
      <div className="section-heading mb-5">
      <p className="desc-label theme-text-grey">DESCRIPTION</p>
      <div className="orange-line mb-2"></div>
      <h2>
        <span className="text-dark fw-bold">ABOUT </span>
        <span className="theme-text-orange fw-bold">DIGITAL ASSESSMENT SYSTEM</span>
      </h2>
    </div>
    </div>

<div className="row">
  <div className="col-md-7">
    <div className="pe-4">
    <p className="mt-3 fs-5 lh-lg" style={{textAlign:"justify"}}>
            <strong>Digital Assessment System</strong> is a comprehensive platform designed to revolutionize 
            the way educational assessments are conducted. Our system provides <strong>advanced digital tools</strong> 
            for creating, managing, and evaluating assessments with real-time analytics and reporting capabilities.
          </p>
          <p className="fs-5 lh-lg" style={{textAlign:"justify"}}>
            The platform is accessible from anywhere in the world with internet connectivity and is fully secured 
            with 24/7 availability. It addresses modern assessment challenges including automated grading, 
            performance tracking, analytics, progress monitoring, and comprehensive reporting for students, 
            educators, and administrators in educational institutions.
          </p>
    </div>

  </div>
  <div className="col-md-5">
  <div style={{ position: 'relative', display: 'flex', height: '300px' }} className="rounded-3 overflow-hidden shadow-lg">
    {/* Left Red Div */}
    <div style={{ width: '50%' }}></div>

    {/* Right Background Image Div */}
    <div
      style={{
        width: '100%',
        backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>

    {/* Overlaying Iframe (centered between both divs) */}
    <iframe
      title="Digital Assessment System"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: '50%',
        left: '40%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '70%',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
        zIndex: 2,
      }}
    ></iframe>
  </div>
</div>

</div>
   </div>
       
  <hr className="my-5" />
</>
  )}

export default AboutSection