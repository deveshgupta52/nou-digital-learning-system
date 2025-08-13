import React from 'react';

const QuestionBank = ({ questionBankData, selectedSubject, setSelectedSubject }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Question Bank</h3>
      {!selectedSubject ? (
        <div className="row">
          {Object.keys(questionBankData).map((subject, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-header text-white" style={{ background: '#ff8c00' }}>
                  <h5 className="mb-0">{subject}</h5>
                </div>
                <div className="card-body text-center">
                  <p>{questionBankData[subject].length} Questions Available</p>
                  <button 
                    className="btn text-white" 
                    style={{ background: '#ff8c00' }}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    View Questions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>{selectedSubject} Questions</h4>
            <button 
              className="btn btn-secondary"
              onClick={() => setSelectedSubject(null)}
            >
              Back to Subjects
            </button>
          </div>
          <div className="card shadow-sm">
            <div className="card-body">
              <ol>
                {questionBankData[selectedSubject].map((question, index) => (
                  <li key={index} className="mb-2">{question}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionBank;