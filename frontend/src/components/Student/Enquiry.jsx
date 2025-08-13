import React, { useState } from 'react';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: 'medium',
    description: '',
    contactMethod: 'email'
  });

  const [enquiries, setEnquiries] = useState([
    {
      id: 1,
      subject: "Course Registration Issue",
      category: "Academic",
      priority: "high",
      status: "In Progress",
      date: "2024-01-15",
      description: "Unable to register for CS401 - Machine Learning course"
    },
    {
      id: 2,
      subject: "Library Access Problem",
      category: "Facilities",
      priority: "medium",
      status: "Resolved",
      date: "2024-01-10",
      description: "Student ID card not working for library access"
    },
    {
      id: 3,
      subject: "Fee Payment Query",
      category: "Financial",
      priority: "low",
      status: "Pending",
      date: "2024-01-08",
      description: "Question about semester fee payment deadline"
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.subject && formData.category && formData.description) {
      const newEnquiry = {
        id: enquiries.length + 1,
        ...formData,
        status: "Pending",
        date: new Date().toISOString().split('T')[0]
      };
      setEnquiries(prev => [newEnquiry, ...prev]);
      setFormData({
        subject: '',
        category: '',
        priority: 'medium',
        description: '',
        contactMethod: 'email'
      });
      setShowForm(false);
      alert('Enquiry submitted successfully!');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved': return 'bg-success';
      case 'in progress': return 'bg-warning';
      case 'pending': return 'bg-secondary';
      default: return 'bg-secondary';
    }
  };

  const getPriorityBadgeClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-danger';
      case 'medium': return 'bg-warning';
      case 'low': return 'bg-info';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Student Enquiries</h3>
        <button 
          className="btn text-white" 
          style={{ background: '#ff8c00' }}
          onClick={() => setShowForm(!showForm)}
        >
          <i className="bi bi-plus-circle me-2"></i>
          {showForm ? 'Cancel' : 'New Enquiry'}
        </button>
      </div>

      {showForm && (
        <div className="card shadow-sm mb-4">
          <div className="card-header text-white" style={{ background: '#ff8c00' }}>
            <h5 className="mb-0">Submit New Enquiry</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter enquiry subject"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="category" className="form-label">Category *</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Academic">Academic</option>
                    <option value="Financial">Financial</option>
                    <option value="Technical">Technical</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="priority" className="form-label">Priority</label>
                  <select
                    className="form-select"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="contactMethod" className="form-label">Preferred Contact Method</label>
                  <select
                    className="form-select"
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="sms">SMS</option>
                    <option value="portal">Student Portal</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description *</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed description of your enquiry..."
                  required
                ></textarea>
              </div>

              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn text-white" 
                  style={{ background: '#ff8c00' }}
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card shadow-sm">
        <div className="card-header text-white" style={{ background: '#ffa500' }}>
          <h5 className="mb-0">My Enquiries</h5>
        </div>
        <div className="card-body">
          {enquiries.length === 0 ? (
            <div className="text-center py-4">
              <i className="bi bi-inbox" style={{ fontSize: '3rem', color: '#ccc' }}></i>
              <p className="text-muted mt-2">No enquiries found. Submit your first enquiry above.</p>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover">
                <thead style={{ background: '#ff8c00' }} className="text-white">
                  <tr>
                    <th>Subject</th>
                    <th>Category</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.map((enquiry) => (
                    <tr key={enquiry.id}>
                      <td>
                        <strong>{enquiry.subject}</strong>
                        <br />
                        <small className="text-muted">{enquiry.description.substring(0, 50)}...</small>
                      </td>
                      <td>
                        <span className="badge" style={{ background: '#ffb347', color: '#333' }}>
                          {enquiry.category}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${getPriorityBadgeClass(enquiry.priority)}`}>
                          {enquiry.priority.charAt(0).toUpperCase() + enquiry.priority.slice(1)}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${getStatusBadgeClass(enquiry.status)}`}>
                          {enquiry.status}
                        </span>
                      </td>
                      <td>{enquiry.date}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary me-1"
                          title="View Details"
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-secondary"
                          title="Follow Up"
                        >
                          <i className="bi bi-chat-dots"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <i className="bi bi-clock-history" style={{ fontSize: '2rem', color: '#ff8c00' }}></i>
              <h5 className="mt-2">Response Time</h5>
              <p className="text-muted">Average response time: 24-48 hours</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <i className="bi bi-telephone" style={{ fontSize: '2rem', color: '#ffa500' }}></i>
              <h5 className="mt-2">Emergency Contact</h5>
              <p className="text-muted">For urgent matters: +1 (555) 999-0000</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <i className="bi bi-envelope" style={{ fontSize: '2rem', color: '#ffb347' }}></i>
              <h5 className="mt-2">Email Support</h5>
              <p className="text-muted">support@university.edu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;