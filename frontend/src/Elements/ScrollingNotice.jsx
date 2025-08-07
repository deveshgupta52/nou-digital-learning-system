import React from 'react'

function ScrollingNotice() {
  return (
    <div className="row bg-warning mt-3 orange" style={{ height: "80px" }}>
      <marquee scrollAmount={20} direction="left">
        <div className="container-fluid d-flex pt-2 gap-2">
          <p className="orangered p-2 theme-text-white fw-bold">
            The portal is easy to access & highly user
            <br />
            friendly for the students & study centres.
          </p>
          <p className="orangered p-2 theme-text-white fw-bold">
            The portal is fully secured and accessible
            <br />
            24 x 7 to its authorised users.
          </p>
          <p className="orangered p-2 theme-text-white fw-bold">
            The portal is easy to access & highly user
            <br />
            friendly for the students & study centres.
          </p>
        </div>
      </marquee>
    </div>
  )
}

export default ScrollingNotice
