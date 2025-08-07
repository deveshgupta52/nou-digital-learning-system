import React from 'react';


const AboutNOU = () => {
  return (
<>
<hr />

   <div className="container">

    <div className="row">
      <div className="nou-heading mb-4">
      <p className="desc-label">Description</p>
      <div className="orange-line mb-2"></div>
      <h2>
        <span className="text-dark fw-bold">ABOUT </span>
        <span className="text-danger fw-bold">NOU e-GYAN PORTAL</span>
      </h2>
    </div>
    </div>

<div className="row">
  <div className="col-md-7 ">
    <p className="mt-3 "style={{textAlign:"justify"}}>
            <strong>Nalanda Open University</strong> welcomes all our students, faculties & study centres to the very
            new & innovative online study portal <strong>NOU e–Gyan</strong>. The portal is a unique initiative by
            Hon’ble Vice-Chancellor <strong>Prof. (Dr.) K C Sinha</strong>, which aims at providing online study
            material to the students of NOU.
          </p>
          <p style={{textAlign:"justify"}}>
            The portal is accessible from any hook and corner of the world if the system allows the permission to its
            users. It is also fully secured and accessible 24 x 7 to its authorised users. It will resolve the academic
            issues such as E-content Distribution, Delivery, Tracking, Assessment, Progress Monitoring & Controlling of
            all stakeholders of the system i.e. students, teachers, study centre administrators as well as Nalanda Open
            University Admins when they are at a distance.
          </p>

  </div>
  <div className="col-md-5">
  <div style={{ position: 'relative', display: 'flex', height: '250px' }}>
    {/* Left Red Div */}
    <div style={{ width: '50%' }}></div>

    {/* Right Background Image Div */}
    <div
      style={{
        width: '100%',
        backgroundImage: "url('https://www.nou.ac.in/uploads/slide2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>

    {/* Overlaying Iframe (centered between both divs) */}
    <iframe
      title="NOU e-Gyan"
      src="https://www.youtube.com/embed/jVl8uLz8f9w"
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
        borderRadius: '8px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        zIndex: 2,
      }}
    ></iframe>
  </div>
</div>

</div>
   </div>
       
  <hr />
</>
  )}
export default AboutNOU
