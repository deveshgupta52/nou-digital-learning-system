import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Courses from "../components/Courses/Courses";
import axios from "axios";


import {
  Users,
  BookOpen,
  HelpCircle,
  FileText,
  Plus,
  Zap,
  MessageSquare,
  GraduationCap,
  BarChart3,
  Settings,
  Bell,
  Search,
  User,
} from "lucide-react";
import News from "../Elements/News";
import ViewStudents from "../components/Student/ViewStudent";
import QuestionBank from "../components/Examination/QuestionBank";
import Enquiries from "../components/Enquiry/Enquiry";
import AdStudent from "../Admin/AdStudent";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const navigate = useNavigate();
  const [stCount, setStCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [eqCount, setEqCount] = useState(0);

  function handlelogout(){
    localStorage.removeItem("logined")
    navigate("/")
  }

  useEffect(() => {
    const stCount = async () => {
      const res = await axios.get("http://localhost:3000/students/count");
      setStCount(res.data.count);
    };

    const courseCount = async () => {
      const res = await axios.get("http://localhost:3000/courses/count");
      setCourseCount(res.data.count);
    };

    const EqCount = async () => {
      const res = await axios.get("http://localhost:3000/enquiry/count");
      setEqCount(res.data.count);
    };

    EqCount();
    courseCount();
    stCount();
  }, []);

  const sidebarStyle = {
    background: "linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)",
    minHeight: "100vh",
    width: "250px",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "2px 0 10px rgba(255, 140, 0, 0.3)",
    overflowY: "auto",
  };

  const cardStyle = {
    borderRadius: "15px",
    border: "none",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    overflow: "hidden",
  };

  const gradientCards = [
    {
      title: "Total Students",
      count: stCount,
      subtitle: "+12% from last month",
      gradient: "linear-gradient(135deg, #ff8c00 0%, #ffa500 100%)",
      icon: <Users size={32} />,
    },
    {
      title: "Active Courses",
      count: courseCount,
      subtitle: "+8% from last month",
      gradient: "linear-gradient(135deg, #ffb347 0%, #ff8c00 100%)",
      icon: <BookOpen size={32} />,
    },
    {
      title: "Pending Enquiries",
      count: eqCount,
      subtitle: "+3% from last month",
      gradient: "linear-gradient(135deg, #ffd700 0%, #ffb347 100%)",
      icon: <HelpCircle size={32} />,
    },
    {
      title: "Active Exams",
      count: "0",
      subtitle: "+15% from last month",
      gradient: "linear-gradient(135deg, #ffc649 0%, #ffd700 100%)",
      icon: <FileText size={32} />,
    },
  ];

  const sidebarItems = [
    {
      icon: <BarChart3 size={20} />,
      label: "Dashboard",
      active: activeSection === "dashboard",
      onClick: () => setActiveSection("dashboard"),
    },
    {
      icon: <Users size={20} />,
      label: "Students",
      active: activeSection === "students",
      onClick: () => setActiveSection("students"),
    },
    {
      icon: <HelpCircle size={20} />,
      label: "Enquiries",
      active: activeSection === "enquiries",
      onClick: () => setActiveSection("enquiries"),
    },
    {
      icon: <Bell size={20} />,
      label: "News",
      active: activeSection === "news",
      onClick: () => setActiveSection("news"),
    },
    {
      icon: <BookOpen size={20} />,
      label: "Courses",
      active: activeSection === "courses",
      onClick: () => setActiveSection("courses"),
    },
    {
      icon: <Search size={20} />,
      label: "Question Bank",
      active: activeSection === "question-bank",
      onClick: () => setActiveSection("question-bank"),
    },
    // {
    //   icon: <FileText size={20} />,
    //   label: "Examinations",
    //   active: activeSection === "examinations",
    //   onClick: () => setActiveSection("examinations"),
    // },
    {
      icon: <Settings size={20} />,
      label: "Results",
      active: activeSection === "results",
      onClick: () => setActiveSection("results"),
    },
  ];

  const quickActions = [
    {
      icon: <Plus size={20} />,
      label: "Add Student",
      color: "#ff8c00",
      href: "/admindash/students",
    },
    {
      icon: <Plus size={20} />,
      label: "Create Course",
      color: "#ff6b35",
      href: "/courses",
    },
    {
      icon: <FileText size={20} />,
      label: "New Exam",
      color: "#ffa500",
      href: "#",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "Post News",
      color: "#ffb347",
      href: "/news",
    },
  ];

  return (
    <div className="row " style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <div className="col-md-3                                                                                      " style={sidebarStyle}>
        <div className="p-2">
          {/* Logo Section */}
          <div className="text-center mb-4">
            <div
              className="  d-inline-flex align-items-center justify-content-center mb-3 "
              style={{
                width: "60px",
                height: "60px",
                textAlign: "center",
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: "15px",
                backdropFilter: "blur(10px)",
              }}
            >
              <GraduationCap size={32} color="white" />
            </div>
            <h4 className="text-white fw-bold mb-1">NOU LMS</h4>
            <small className="text-white opacity-75">Admin Panel</small>
          </div>

          {/* Navigation */}
          <nav className="mt-4">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center p-3 mb-2 rounded-3 text-decoration-none ${
                  item.active ? "bg-white bg-opacity-25" : ""
                }`}
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: item.active ? "blur(10px)" : "none",
                }}
                onClick={item.onClick}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                {item.icon}
                <span className="ms-3 fw-medium">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="col-md-10 ms-auto "
        style={{ backgroundColor: "#f8f9fa", marginLeft: "250px" }}
      >
        {/* Header */}
        <div className="bg-white shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h2
                className="mb-1"
                style={{ color: "#2c3e50", fontWeight: "700" }}
              >
                {activeSection === "dashboard"
                  ? "Admin Dashboard"
                  : activeSection === "news"
                  ? "News Management"
                  : activeSection.charAt(0).toUpperCase() +
                    activeSection.slice(1)}
              </h2>
              <p className="text-muted mb-0">
                {activeSection === "dashboard"
                  ? "Welcome back! Here's what's happening at Digital Learning System."
                  : activeSection === "news"
                  ? "Manage and view all news articles."
                  : "Section details will appear here."}
              </p>
            </div>
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#ff8c00",
                  borderRadius: "50%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                AU
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-link text-decoration-none p-0"
                  style={{ color: "#ff8c00" }}
                  onClick={handlelogout}
                >
                  Logout <User size={16} className="ms-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          {/* Conditional Rendering based on navigate */}
          {activeSection === "dashboard" ? (
            <>
              {/* Stats Cards */}
              <div className="row mb-4">
                {gradientCards.map((card, index) => (
                  <div key={index} className="col-md-6 col-lg-3 mb-4">
                    <div
                      className="card h-100 text-white"
                      style={{
                        ...cardStyle,
                        background: card.gradient,
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 15px 35px rgba(255, 140, 0, 0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(0,0,0,0.1)";
                      }}
                    >
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <div style={{ opacity: 0.9 }}>{card.icon}</div>
                        </div>
                        <h1 className="display-4 fw-bold mb-2">{card.count}</h1>
                        <h6
                          className="fw-semibold mb-2"
                          style={{ opacity: 0.95 }}
                        >
                          {card.title}
                        </h6>
                        <small style={{ opacity: 0.8 }}>{card.subtitle}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tables Row */}
              <div className="row mb-4">
                {/* Recent Enquiries */}
                <div className="col-lg-6 mb-4">
                  <div className="card" style={cardStyle}>
                    <div
                      className="card-header text-white py-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)",
                      }}
                    >
                      <h5 className="mb-0 d-flex align-items-center">
                        <HelpCircle size={20} className="me-2" />
                        Recent Enquiries
                      </h5>
                    </div>
                    <div className="card-body p-0">
                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead style={{ backgroundColor: "#f8f9fa" }}>
                            <tr>
                              <th
                                className="border-0 py-3 px-4"
                                style={{ color: "#6c757d", fontWeight: "600" }}
                              >
                                Name
                              </th>
                              <th
                                className="border-0 py-3"
                                style={{ color: "#6c757d", fontWeight: "600" }}
                              >
                                Subject
                              </th>
                              <th
                                className="border-0 py-3"
                                style={{ color: "#6c757d", fontWeight: "600" }}
                              >
                                Date
                              </th>
                              <th
                                className="border-0 py-3"
                                style={{ color: "#6c757d", fontWeight: "600" }}
                              >
                                Status
                              </th>
                              <th
                                className="border-0 py-3"
                                style={{ color: "#6c757d", fontWeight: "600" }}
                              >
                                Priority
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                className="py-4 px-4 text-muted"
                                colSpan={5}
                                style={{ textAlign: "center" }}
                              >
                                No enquiries found
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Registrations */}
                <div className="col-lg-6 mb-4">
                  <div className="card" style={cardStyle}>
                    <div
                      className="card-header text-white py-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)",
                      }}
                    >
                      <h5 className="mb-0 d-flex align-items-center">
                        <Users size={20} className="me-2" />
                        Recent Registrations
                      </h5>
                    </div>
                    <div className="card-body p-4 text-center text-muted">
                      <Users
                        size={48}
                        className="mb-3"
                        style={{ opacity: 0.3 }}
                      />
                      <p className="mb-0">No recent registrations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="row">
                <div className="col-12">
                  <div className="card" style={cardStyle}>
                    <div
                      className="card-header text-white py-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)",
                      }}
                    >
                      <h5 className="mb-0 d-flex align-items-center">
                        <Zap size={20} className="me-2" />
                        Quick Actions
                      </h5>
                    </div>
                    <div className="card-body p-4">
                      <div className="row">
                        {quickActions.map((action, index) => (
                          <div key={index} className="col-md-6 col-lg-3 mb-3">
                            <Link key={index} to={action.href}>
                            <button
                              className="btn w-100 py-3 border-0 rounded-3 fw-semibold"
                              style={{
                                backgroundColor: action.color,
                                color: "white",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(-2px)";
                                e.currentTarget.style.boxShadow = `0 8px 20px ${action.color}40`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                              }}
                            >
                              <div className="d-flex align-items-center justify-content-center">
                                {action.icon}
                                <span className="ms-2">{action.label}</span>
                              </div>
                            </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : activeSection === "news" ? (
            <News />
          ) : activeSection === "courses" ? (
            <Courses />
          ) : activeSection === "students" ? (
            <AdStudent/>
          ) : activeSection === "question-bank" ? (
            <QuestionBank />
          ) : activeSection === "enquiries" ? (
            <Enquiries />
          ) : (
            <div className="row">
              <div className="col-12">
                <div className="card" style={cardStyle}>
                  <div className="card-body text-center py-5">
                    <h3 className="mb-3">Section Coming Soon</h3>
                    <p className="text-muted">
                      This section is under development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* {
              activeSection === 'courses' ? (
                <Courses/>
              ) : (
                console.log("error")
              //   <div className="row">
              //   <div className="col-12">
              //     <div className="card" style={cardStyle}>
              //       <div className="card-body text-center py-5">
              //         <h3 className="mb-3">Section Coming Soon</h3>
              //         <p className="text-muted">This section is under development.</p>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              )
            } */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
