import React from 'react'

function ScrollingNotice() {
  return (
    <div className="row mt-3 orange shadow-lg" style={{ height: "90px" }} >
      <marquee scrollAmount={20} direction="left" onMouseOver={(e)=>e.target.stop()} onMouseOut={(e)=>e.target.start()}>
        <div className="container-fluid d-flex pt-3 gap-4">
          <div className="orangered p-3 theme-text-white fw-bold rounded shadow">
            Advanced Digital Assessment System with
            <br />
            Real-time Analytics and Reporting
          </div>
          <div className="orangered p-3 theme-text-white fw-bold rounded shadow">
            Secure, Scalable and User-friendly
            <br />
            Assessment Platform for Modern Education
          </div>
          <div className="orangered p-3 theme-text-white fw-bold rounded shadow">
            AI-Powered Assessment Tools with
            <br />
            Comprehensive Performance Tracking
          </div>
        </div>
      </marquee>
    </div>
  )
}

export default ScrollingNotice