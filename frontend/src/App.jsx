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
import AddStudent from "./Admin/AddStudent";
import News from "./Elements/News";
import ProtectedRoute from "./Elements/ProtectedRoute";
import ChatBot from "./Elements/ChatBot";
import ChatBotButton from "./Elements/ChatBotButton";

function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);

  const toggleChatBot = () => {
    setIsChatBotOpen(!isChatBotOpen);
  };
  return (
    <>
      <div className="container-fluid ">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Adminlogin />} />
            <Route path="/admindash" element={
              <ProtectedRoute>
               <Dashboard />
              </ProtectedRoute>
} />
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
            <Route path="/AddStudents" elemen={<AddStudent/>} />
            <Route path="/news" element={<News/>}/>
          </Routes>
        </BrowserRouter>
        {/* Floating ChatBot Button */}
        <ChatBotButton onClick={toggleChatBot} isOpen={isChatBotOpen} />
        
        {/* ChatBot Component - Positioned Fixed */}
        {isChatBotOpen && (
          <div style={{
            position: 'fixed',
            bottom: '100px',
            right: '20px',
            zIndex: 1000
          }}>
            <ChatBot />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
