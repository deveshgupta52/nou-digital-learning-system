import React from 'react';

const Exams = ({ examsData, handleStartExam }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Available Exams</h3>
      <div className="row">
        {examsData.map((exam) => (
          <div key={exam.id} className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-header text-white" style={{ background: '#ff8c00' }}>
                <h5 className="mb-0">{exam.title}</h5>
              </div>
              <div className="card-body">
                <p><strong>Subject:</strong> {exam.subject}</p>
                <p><strong>Start Time:</strong> {exam.startTime}</p>
                <p><strong>End Time:</strong> {exam.endTime}</p>
                <p><strong>Duration:</strong> {exam.duration} minutes</p>
                <button 
                  className="btn text-white w-100" 
                  style={{ background: '#ff8c00' }}
                  onClick={() => handleStartExam(exam)}
                >
                  Start Exam
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;