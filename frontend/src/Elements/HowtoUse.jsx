import React from "react";

function HowToUse() {
  return (
    <div className="container-fluid bg-img">
      <div className="row">
        <div className="col-12">
          {/* Heading Section */}
          <div className="row">
            <div className="col-1 ms-5 pe-0">
              <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">HOW TO USE</h2>
            </div>
            <div className="col-1 orange-line mb-3 ms-3"></div>
            <div className="col-10"></div>
          </div>

          {/* Subheading */}
          <div className="row">
            <div className="col-md-7 fs-2 theme-text-white fw-bold ms-5">
              <p>NOU e-Gyan Portal Tutorial Videos</p>
            </div>
            <div className="col-md-4"></div>
          </div>

          {/* Paragraph */}
          <div className="row">
            <div className="col-md-11 fs-5 theme-text-white fw-bold ms-5">
              <p>
                For any queries regarding access to the Portal, users can watch the tutorial videos provided
                or communicate their issues via the helpline number or email ID.
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>

          {/* Videos Section */}
          <div className="row justify-content-center">
            {/* Video 1 */}
            <div className="col-md-6 mb-4">
              <div className="video-card">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_1"
                    title="How to login"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-title-bar text-white bg-dark p-2 fw-bold text-center">
                  HOW TO LOGIN AT NOU E-GYAN PORTAL
                </div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="col-md-6 mb-4">
              <div className="video-card">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                    title="How to access content"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="video-title-bar text-white bg-dark p-2 fw-bold text-center">
                  HOW TO ACCESS CONTENT AT NOU E-GYAN PORTAL
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HowToUse;
