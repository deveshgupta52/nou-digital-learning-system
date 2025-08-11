import React from 'react';

function Footer() {
  return (
    <div className="row orange p-5">
      {/* Column 1: Logo + Description + Social Icons */}
      <div className="col-3">
        <div
          className="row mx-auto"
          style={{
            border: '3px solid orangered',
            height: '110px',
            width: '110px',
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        >
          <img src="https://nouegyan.in/assets/img/logo/logo1.png" alt="logo" />
        </div>
        <div className="row mx-auto p-2">
          <p
            className="theme-text-white fw-bold"
            style={{
              fontSize: '13px',
              lineHeight: '2.2',
              textAlign: 'justify',
            }}
          >
            Nalanda Open University is a State Open University duly established under the Act of Bihar Government and is also
            recognized by Distance Education Council, IGNOU, Maidan Garhi, New Delhi.
          </p>
        </div>
       <div className="col-sm d-flex gap-3 align-items-center justify-content-center">
          <a href="#" className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Column 2: Useful Links */}
      <div className="col-3">
        <div className="row">
          <h3 className="fs-3 mt-4 ms-4 fw-normal theme-text-white">Useful Links</h3>
        </div>
        <div className="row mt-5">
          <ul className="list-unstyled d-flex flex-column gap-2">
            {['Home', 'About Portal', 'Services', 'Contact Us', 'Courses', 'Study Center'].map((link, index) => (
              <li
                 
                key={index}
                className="theme-text-white"
                style={{ fontSize: 'smaller' }}
              >
                <i className="fa-solid fa-arrow-right text-warning me-2"></i> {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Column 3: Contact Info */}
      <div className="col-3">
        <div className="row">
          <h3 className="fs-3 mt-4 ms-4 fw-normal theme-text-white">Contact Info</h3>
        </div>
        <div className="row mt-4">
          <p className="theme-text-white fw-semibold fs-6">
            <i className="fa-solid fa-location-dot me-2 text-warning"></i> NOU
          </p>
        </div>
        <div className="row">
          <p
            className="theme-text-white fw-semibold fs-6"
            style={{ textAlign: 'start' }}
          >
            2nd/3rd Floor, Biscomaun<br />
            Bhawan, Gandhi Maidan, Patna 800 001 (BIHAR).
          </p>
        </div>
        <div className="row mt-3 theme-text-white">
          <i className="fa-solid fa-phone-flip me-2 text-warning"></i> +91 7080102007
        </div>
        <div className="row">
          <p
            className="theme-text-white fw-semibold fs-6"
            style={{ textAlign: 'start' }}
          >
            Give us a call.
          </p>
        </div>
      </div>

      {/* Column 4: Newsletter */}
      <div className="col-3">
        <div className="row">
          <h3 className="fs-3 mt-4 ms-4 fw-normal theme-text-white">Contact Info</h3>
        </div>
        <div className="row">
          <p
            className="theme-text-white fw-semibold fs-6"
            style={{ textAlign: 'start' }}
          >
            Fill the detail below to receive the manual of the NOU e-Gyan Portal
          </p>
        </div>
        <div
          className="row mt-2 ms-3 position-relative"
          style={{ width: '150px' }}
        >
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Email"
            style={{
              backgroundColor: 'rgb(65, 64, 64)',
              width: '500px',
              height: '50px',
              border: 'none',
            }}
          />
          <button
            className="btn px-3 py-2 position-absolute"
            style={{
              backgroundColor: '#f26c05',
              color: 'white',
              borderTopRightRadius: '50px',
              borderBottomRightRadius: '50px',
              zIndex: 10,
              height: '50px',
              width: '50px',
              left: '80%',
            }}
          >
            <i className="fa-solid fa-paper-plane theme-text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
