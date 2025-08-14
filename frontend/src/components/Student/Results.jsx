import React from 'react';

const Results = ({ resultsData }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Academic Results</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead style={{ background: '#ff8c00' }} className="text-white">
                <tr>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Credits</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                {resultsData.map((result, index) => (
                  <tr key={index}>
                    <td>{result.subject}</td>
                    <td><span className="badge bg-success">{result.grade}</span></td>
                    <td>{result.credits}</td>
                    <td>{result.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;