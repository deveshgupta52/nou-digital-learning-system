import React from "react";

const StudentServices = () => {
  // 12 cards (3 rows × 4 columns)
  const cardData = [
    {
      img: "https://nouegyan.in/assets/img/services/registration.jpg",
      title: "Registration",
    },
    {
      img: "https://thumbs.dreamstime.com/b/flat-design-clipboard-admission-form-laptop-screen-modern-userfriendly-online-concept-illustration-elearning-318986763.jpg",
      title: "Admission",
    },
    {
      img: "https://img.freepik.com/free-vector/exams-concept-illustration_114360-1815.jpg",
      title: "Examinations",
    },
    {
      img: "https://img.freepik.com/premium-vector/exam-results-document-illustration_212005-46.jpg",
      title: "Results",
    },

    {
      img: "https://thumbs.dreamstime.com/b/colorful-online-education-e-learning-educational-apps-flat-design-illustration-colorful-flat-design-illustration-online-375952335.jpg",
      title: "Courses",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/046/378/738/non_2x/scholarship-certificate-badge-and-money-cartoon-concept-completion-certificate-certificates-of-achievement-education-awards-scholarships-bachelor-degrees-diplomas-education-finance-concept-vector.jpg",
      title: "Scholarship",
    },
    {
      img: "https://c8.alamy.com/comp/2RBHT0K/technical-support-system-vector-illustration-with-software-development-customer-service-and-technology-help-in-flat-cartoon-hand-drawn-templates-2RBHT0K.jpg",
      title: "Support",
    },

    {
      img: "https://static.vecteezy.com/system/resources/previews/012/710/081/original/event-planner-template-hand-drawn-cartoon-flat-illustration-with-planning-schedule-time-management-business-agenda-and-calendar-concept-vector.jpg",
      title: "Events",
    },
  ];

  // Card UI
  const renderCard = (item, index) => (
    <div
      key={index}
      style={{
        height: "310px",
        width: "220px",
        border: "1px solid grey",
        padding: "0",
      }}
    >
      <img
        src={item.img}
        alt={item.title}
        style={{ width: "100%", height: "270px", objectFit: "cover" }}
      />
      <div
        className="d-flex align-items-center justify-content-center border-0 rounded-0 w-100 theme-text-white"
        style={{
          height: "40px",
          fontWeight: "bold",
          fontSize: "16px",
          backgroundColor: "#ff7f50", // fallback if no theme-bg-color
        }}
      >
        {item.title}
      </div>
    </div>
  );

  // Split into 3 rows with 4 cards each
  const rows = [];
  for (let i = 0; i < cardData.length; i += 4) {
    rows.push(cardData.slice(i, i + 4));
  }

  return (
    <div id="service" className="row">
      <div className="col">
        {/* Section Header */}
        <div className="row">
          <div className="col-1 ms-5 pe-0">
            <h2 className="fw-bolder theme-text-grey fs-6 mt-5 pt-5">
              FEATURES
            </h2>
          </div>
          <div className="col-7"></div>
        </div>

        <div className="row">
          <div className="col-md-7 fs-3 fw-bold ms-5">
            <p>
              STUDENT <span className="theme-text-orange">SERVICES</span>
            </p>
          </div>
          <div className="col-md-4"></div>
        </div>

        {/* Render exactly 3 rows */}
        {rows.map((rowCards, rowIndex) => (
          <div
            key={rowIndex}
            className="row d-flex justify-content-center align-items-center mt-4 "
            style={{ gap: "70px" }}
          >
            {rowCards.map((item, index) =>
              renderCard(item, `${rowIndex}-${index}`)
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentServices;
