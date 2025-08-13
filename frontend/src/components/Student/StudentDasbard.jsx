import React, { useState, useEffect } from 'react';
import StudentProfile from './StudentProfile';
import Timetables from './Timetables';
import Results from './Results';
import Courses from './Courses';
import Exams from './Exams';
import QuestionBank from './QuestionBank';

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [currentExam, setCurrentExam] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examAnswers, setExamAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Dummy data
  const studentData = {
    name: "John Smith",
    id: "STU2024001",
    email: "john.smith@university.edu",
    phone: "+1 (555) 123-4567",
    dob: "1998-05-15",
    gender: "Male",
    course: "Computer Science Engineering",
    branch: "Software Engineering",
    year: "3rd Year",
    semester: "6th Semester",
    enrollmentDate: "2022-08-15",
    status: "Active",
    attendance: 85,
    gpa: 3.7,
    permanentAddress: "123 Main St, Springfield, IL 62701",
    currentAddress: "456 College Ave, University City, IL 62702"
  };

  const timetableData = [
    { time: "9:00 AM", monday: "Data Structures", tuesday: "Mathematics", wednesday: "Physics", thursday: "Chemistry", friday: "English", room: "Room 101" },
    { time: "10:00 AM", monday: "Algorithms", tuesday: "Statistics", wednesday: "Lab", thursday: "Programming", friday: "Free", room: "Room 102" },
    { time: "11:00 AM", monday: "Database", tuesday: "Networks", wednesday: "Software Eng", thursday: "Web Dev", friday: "Project", room: "Room 103" },
    { time: "2:00 PM", monday: "Lab", tuesday: "Lab", wednesday: "Free", thursday: "Lab", friday: "Seminar", room: "Lab A" },
    { time: "3:00 PM", monday: "Free", tuesday: "Tutorial", wednesday: "Library", thursday: "Free", friday: "Sports", room: "Various" }
  ];

  const resultsData = [
    { subject: "Data Structures", grade: "A", credits: 4, semester: "5th Sem" },
    { subject: "Algorithms", grade: "A-", credits: 4, semester: "5th Sem" },
    { subject: "Database Systems", grade: "B+", credits: 3, semester: "5th Sem" },
    { subject: "Computer Networks", grade: "A", credits: 3, semester: "5th Sem" },
    { subject: "Software Engineering", grade: "B+", credits: 4, semester: "6th Sem" },
    { subject: "Web Development", grade: "A", credits: 3, semester: "6th Sem" }
  ];

  const coursesData = [
    { name: "Advanced Data Structures", code: "CS301", description: "Advanced concepts in data structures and algorithms", instructor: "Dr. Johnson" },
    { name: "Machine Learning", code: "CS401", description: "Introduction to machine learning algorithms and applications", instructor: "Prof. Smith" },
    { name: "Web Technologies", code: "CS302", description: "Modern web development frameworks and technologies", instructor: "Dr. Brown" },
    { name: "Database Management", code: "CS303", description: "Advanced database concepts and management systems", instructor: "Prof. Davis" }
  ];

  const examsData = [
    {
      id: 1,
      title: "Data Structures Mid-term",
      subject: "Computer Science",
      startTime: "2024-01-15 10:00",
      endTime: "2024-01-15 12:00",
      duration: 120,
      questions: [
        {
          question: "Which data structure uses LIFO principle?",
          options: ["Queue", "Stack", "Array", "Linked List"],
          correct: ["Stack"]
        },
        {
          question: "What is the time complexity of binary search?",
          options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
          correct: ["O(log n)"]
        },
        {
          question: "Which of the following are linear data structures?",
          options: ["Array", "Stack", "Tree", "Queue"],
          correct: ["Array", "Stack", "Queue"]
        }
      ]
    },
    {
      id: 2,
      title: "Web Development Quiz",
      subject: "Web Technologies",
      startTime: "2024-01-20 14:00",
      endTime: "2024-01-20 15:30",
      duration: 90,
      questions: [
        {
          question: "Which HTML tag is used for the largest heading?",
          options: ["<h1>", "<h6>", "<header>", "<title>"],
          correct: ["<h1>"]
        },
        {
          question: "What does CSS stand for?",
          options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
          correct: ["Cascading Style Sheets"]
        }
      ]
    }
  ];

  const questionBankData = {
    "Data Structures": [
      "What is a binary tree?",
      "Explain the difference between stack and queue",
      "What is time complexity?",
      "How does a hash table work?"
    ],
    "Web Development": [
      "What is responsive design?",
      "Explain the box model in CSS",
      "What are JavaScript closures?",
      "How does AJAX work?"
    ],
    "Database Systems": [
      "What is normalization?",
      "Explain ACID properties",
      "What is a foreign key?",
      "How do indexes improve performance?"
    ]
  };

  // Timer effect for exams
  useEffect(() => {
    let timer;
    if (currentExam && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentExam) {
      handleSubmitExam();
    }
    return () => clearInterval(timer);
  }, [currentExam, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = (exam) => {
    setCurrentExam(exam);
    setCurrentQuestion(0);
    setExamAnswers({});
    setTimeLeft(exam.duration * 60);
  };

  const handleAnswerChange = (questionIndex, option, checked) => {
    setExamAnswers(prev => {
      const current = prev[questionIndex] || [];
      if (checked) {
        return { ...prev, [questionIndex]: [...current, option] };
      } else {
        return { ...prev, [questionIndex]: current.filter(a => a !== option) };
      }
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentExam.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handleSubmitExam = () => {
    alert('Exam submitted successfully!');
    setCurrentExam(null);
    setCurrentQuestion(0);
    setExamAnswers({});
    setTimeLeft(0);
  };

  const renderContent = () => {
    if (currentExam) {
      const question = currentExam.questions[currentQuestion];
      return (
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>{currentExam.title}</h3>
            <div className="badge fs-5 text-white" style={{ background: '#ff8c00' }}>
              Time Left: {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Question {currentQuestion + 1} of {currentExam.questions.length}</h5>
              <p className="card-text fs-5 mb-4">{question.question}</p>
              
              <div className="row">
                {question.options.map((option, index) => (
                  <div key={index} className="col-md-6 mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`option-${index}`}
                        checked={examAnswers[currentQuestion]?.includes(option) || false}
                        onChange={(e) => handleAnswerChange(currentQuestion, option, e.target.checked)}
                      />
                      <label className="form-check-label fs-6" htmlFor={`option-${index}`}>
                        {option}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex justify-content-between mt-4">
                <button 
                  className="btn btn-secondary"
                  onClick={() => setCurrentExam(null)}
                >
                  Exit Exam
                </button>
                <div>
                  {currentQuestion < currentExam.questions.length - 1 ? (
                    <button className="btn text-white" style={{ background: '#ff8c00' }} onClick={handleNextQuestion}>
                      Next Question
                    </button>
                  ) : (
                    <button className="btn btn-success" onClick={handleSubmitExam}>
                      Submit Exam
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'profile':
        return <StudentProfile studentData={studentData} />;
      case 'timetables':
        return <Timetables timetableData={timetableData} />;
      case 'results':
        return <Results resultsData={resultsData} />;
      case 'courses':
        return <Courses coursesData={coursesData} />;
      case 'exams':
        return <Exams examsData={examsData} handleStartExam={handleStartExam} />;
      case 'questionbank':
        return <QuestionBank 
          questionBankData={questionBankData} 
          selectedSubject={selectedSubject} 
          setSelectedSubject={setSelectedSubject} 
        />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <>
      {/* Bootstrap CDN */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" 
        rel="stylesheet" 
      />
      
      <style>
        {`
          .sidebar {
            background: linear-gradient(135deg, #ff8c00, #ffa500, #ffb347);
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
          }
          .nav-link {
            transition: all 0.3s ease;
            border-radius: 8px;
            margin: 2px 0;
            color: white !important;
          }
          .nav-link:hover {
            background-color: rgba(255,255,255,0.2);
            transform: translateX(5px);
          }
          .nav-link.active {
            background-color: rgba(139, 69, 19, 0.3) !important;
            border-left: 4px solid white;
          }
          .header {
            background: linear-gradient(90deg, #f8f9fa, #ffffff);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          .profile-avatar {
            background: linear-gradient(135deg, #ff8c00, #ffa500);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 14px;
          }
          .main-content {
            margin-left: 250px;
            margin-top: 70px;
            min-height: calc(100vh - 70px);
          }
          .logout-btn {
            background: rgba(220, 20, 60, 0.8) !important;
            border: none;
            transition: all 0.3s ease;
          }
          .logout-btn:hover {
            background: rgba(220, 20, 60, 1) !important;
            transform: translateX(5px);
          }
        `}
      </style>

      <div className="d-flex">
        {/* Sidebar */}
        <nav className="sidebar position-fixed top-0 start-0 h-100 p-3" style={{ width: '250px', zIndex: 1000 }}>
          {/* Logo/Brand */}
          <div className="text-center mb-4">
            <div className="bg-white rounded-3 p-2 d-inline-block mb-2">
              <i className="bi bi-mortarboard-fill text-warning" style={{ fontSize: '2rem' }}></i>
            </div>
            <h4 className="text-white fw-bold mb-0">STUDENT LMS</h4>
            <small className="text-white opacity-75">Student Panel</small>
          </div>

          {/* Navigation Menu */}
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'profile' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('profile'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-person-circle me-2"></i>
                Student Profile
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'timetables' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('timetables'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-calendar3 me-2"></i>
                Timetables
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'results' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('results'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-clipboard-data me-2"></i>
                Results
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('courses'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-book me-2"></i>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'exams' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('exams'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-file-earmark-text me-2"></i>
                Exams
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'questionbank' ? 'active' : ''}`}
                href="#" 
                onClick={(e) => { e.preventDefault(); setActiveSection('questionbank'); }}
                style={{ textDecoration: 'none' }}
              >
                <i className="bi bi-question-circle me-2"></i>
                Question Bank
              </a>
            </li>
          </ul>

          {/* Logout Button at Bottom */}
          <div className="position-absolute bottom-0 start-0 w-100 p-3">
            <button className="logout-btn btn text-white w-100 py-2">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow-1">
          {/* Header */}
          <header className="header position-fixed top-0 w-100 py-3 px-4 d-flex justify-content-between align-items-center" style={{ left: '250px', width: 'calc(100% - 250px)', zIndex: 999 }}>
            <h2 className="mb-0 fw-bold" style={{ color: '#2c3e50' }}>Student Dashboard</h2>
            
            {/* Profile Section */}
            <div className="d-flex align-items-center">
              <div className="profile-avatar me-2">
                JS
              </div>
              <div>
                <div className="fw-semibold" style={{ color: '#2c3e50' }}>{studentData.name}</div>
                <small className="text-muted">{studentData.email}</small>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="main-content p-4">
            {renderContent()}
          </main>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;