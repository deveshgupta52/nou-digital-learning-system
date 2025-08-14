import React from "react";

const linkCards = [
  {
    img: "https://nouegyan.in/assets/img/association/logo1.png",
    title: "NOU",
    subtitle: "Naland Open University",
  },
  {
    img: "https://nouegyan.in/assets/img/association/logo3.png",
    title: "UGC",
    subtitle: "University Grants Commission",
  },
  {
    img: "https://nouegyan.in/assets/img/association/logo2.png",
    title: "NOU",
    subtitle: "Naland Open University",
  },
];

function QuickLinks() {
  return (
    <div className="row theme-bg-grey">
      <div className="col-12">
        {/* Section Heading */}
        <div className="row">
          <div className="col-1 ms-5 pe-0">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">LINKS</h2>
          </div>
          {/* <div className="col-1 orange-line mb-3 ms-3"></div> */}
          <div className="col-7"></div>
          <div className="col-3"></div>
        </div>

        {/* Title */}
        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>
              QUICK <span>LINKS</span>
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>

        {/* Carousel */}
        <div className="row mb-5">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner mt-4">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    {linkCards.map((card, i) => (
                      <div
                        className="d-flex bg-light"
                        style={{
                          width: "400px",
                          height: "125px",
                          border: "1px dotted darkred",
                        }}
                        key={i}
                      >
                        <div className="col-4">
                          <img
                            src={card.img}
                            style={{ height: "125px" }}
                            alt={card.title}
                          />
                        </div>
                        <div className="col-8">
                          <h4 className="text-center fw-bold theme-text-darkred">
                            {card.title}
                          </h4>
                          <h5 className="text-center">{card.subtitle}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Carousel */}
      </div>
    </div>
  );
}

export default QuickLinks;
