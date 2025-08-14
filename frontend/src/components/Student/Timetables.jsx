import React from 'react';

const Timetables = ({ timetableData }) => {
  return (
    <div className="container-fluid">
      <h3 className="mb-4">Weekly Timetable</h3>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead style={{ background: '#ff8c00' }} className="text-white">
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Room</th>
                </tr>
              </thead>
              <tbody>
                {timetableData.map((row, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{row.time}</td>
                    <td>{row.monday}</td>
                    <td>{row.tuesday}</td>
                    <td>{row.wednesday}</td>
                    <td>{row.thursday}</td>
                    <td>{row.friday}</td>
                    <td>{row.room}</td>
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

export default Timetables;