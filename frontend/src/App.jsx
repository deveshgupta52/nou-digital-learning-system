import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import "./App.css";
import Home from "./components/Home";
import Adminlogin from "./components/AdminLogin";
import Dashboard from "./Admin/Admin";
import Userlogin from "./components/Userlogin";
import HelpDesk from "./Elements/Helpdesk";
import Courses from "./components/Courses/Courses";
import ViewCourses from "./components/Courses/ViewCourses";
import ViewStudents from "./components/Student/ViewStudent";
import AdViewCourses from "./Admin/AdViewCourses";
import Examination from "./components/Examination/Examination";
import QuestionBank from "./components/Examination/QuestionBank";
import Enquiry from "./components/Enquiry/Enquiry";
import EnquiryForm from "./components/Enquiry/EnquiryForm";
import AdStudent from './Admin/AdStudent';

function App() {
  return (
    <>
      <div className="container-fluid ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Adminlogin />} />
            <Route path="/admindash" element={<Dashboard />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Userlogin />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/source" element={<HelpDesk />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/viewcourses" element={<ViewCourses />} />
            <Route path="/viewstudents" element={<ViewStudents />} />
            <Route path="/admindash/viewcourses" element={<AdViewCourses />} />
            <Route path="/exam" element={<Examination />} />
            <Route path="/admindash/question" element={<QuestionBank />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/EnquiryForm" element={<EnquiryForm/>}/>
            <Route path="/admindash/students" element={<AdStudent/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
