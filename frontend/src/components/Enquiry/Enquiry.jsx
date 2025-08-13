import React, { useState, useEffect } from 'react';
import { Edit, Trash2 } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from'jspdf-autotable';


const Enquiries = () => {
  // State variables for enquiries data, loading status, and error handling
  const [enquiries, setEnquiries] = useState([]);        // Stores fetched enquiries
  const [loading, setLoading] = useState(true); // Loading state for API requests
  const [error, setError] = useState(null);     // Error state for failed requests
  const [expandedEnquiries, setExpandedEnquiries] = useState({}); // Track which enquiries are expanded
  const [editingEnquiryId, setEditingEnquiryId] = useState(null); // ID of enquiry being edited
  const [editForm, setEditForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' }); // Form data for editing

  // Dashboard-like card style for consistent UI with admin panel
  const cardStyle = {
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    overflow: 'visible',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative'
  };

  // Dashboard-like header style matching admin panel design
  const headerStyle = {
    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '15px 15px 0 0'
  };

  // Read more button style
  const readMoreStyle = {
    background: 'none',
    border: 'none',
    color: '#ff8c00',
    cursor: 'pointer',
    fontWeight: '600',
    padding: '5px 0',
    fontSize: '0.85rem',
    textAlign: 'left',
    marginBottom: '10px',
    transition: 'color 0.3s ease',
    display: 'inline-block'
  };

  // Resolve button style
  const resolveButtonStyle = {
    background: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '4px 12px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '0.8rem'
  };

  // Icon button style
  const iconButtonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '0',
    margin: '0 4px',
    flexShrink: '0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  // Function to toggle expanded state for an enquiry
  const toggleExpanded = (enquiryId) => {
    setExpandedEnquiries(prev => ({
      ...prev,
      [enquiryId]: !prev[enquiryId]
    }));
  };

  // Function to start editing an enquiry
  const startEditing = (enquiry) => {
    setEditingEnquiryId(enquiry._id);
    setEditForm({
      name: enquiry.name || '',
      email: enquiry.email || '',
      phone: enquiry.phone || '',
      subject: enquiry.subject || '',
      message: enquiry.message || ''
    });
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditingEnquiryId(null);
    setEditForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  // Function to handle form input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to save edited enquiry
  const saveEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/enquiry/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editForm)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update enquiry');
      }
      
      const updatedEnquiry = await response.json();
      
      // Update the enquiry in the state
      setEnquiries(enquiries.map(item => item._id === id ? updatedEnquiry : item));
      
      // Reset edit state
      setEditingEnquiryId(null);
      setEditForm({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to delete an enquiry
  const deleteEnquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const response = await fetch(`http://localhost:3000/enquiry/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete enquiry');
        }
        
        // Remove the deleted enquiry from the state
        setEnquiries(enquiries.filter(item => item._id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // useEffect hook to fetch enquiries when component mounts
  useEffect(() => {
    fetchEnquiries();
  }, []);


  // Export to Excel
  const exportToExcel = () => {
  const rows = enquiries.map(enq => ({
    Name: enq.name || '',
    Email: enq.email || '',
    Subject: enq.subject || '',
    Message: enq.message || '',
    Status: enq.status || 'New',
    Date: enq.createdAt ? new Date(enq.createdAt).toLocaleDateString() : 'N/A',
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
  XLSX.writeFile(wb, 'enquiries.xlsx');
};

// Export to PDF
  const exportToPDF = () => {
  const doc = new jsPDF();
  doc.text('Enquiries Report', 14, 12);
  const head = [['Name', 'Email', 'Subject', 'Message', 'Status', 'Date']];
  const body = enquiries.map(enq => [
    enq.name || '',
    enq.email || '',
    enq.subject || '',
    enq.message || '',
    enq.status || 'New',
    enq.createdAt ? new Date(enq.createdAt).toLocaleDateString() : 'N/A',
  ]);
  autoTable(doc, { head, body, startY: 18 });
  doc.save('enquiries.pdf');
};

  // Function to fetch enquiries from backend API
  const fetchEnquiries = async () => {
    try {
      const response = await fetch('http://localhost:3000/enquiry');
      
      // Check if response is successful
      if (!response.ok) {
        let errorMessage = 'Failed to fetch enquiries';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          errorMessage = `HTTP Error: ${response.status} - ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }
      
      // Parse JSON response and update state
      const data = await response.json();
      setEnquiries(data);
      setLoading(false);
    } catch (err) {
      // Handle fetch errors
      setError(err.message);
      setLoading(false);
    }
  };

  // Function to resolve an enquiry
  const resolveEnquiry = async (id) => {
    try {
      const enquiry = enquiries.find(item => item._id === id);
      const newStatus = enquiry.status === 'Resolved' ? 'New' : 'Resolved';
      
      const response = await fetch(`http://localhost:3000/enquiry/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!response.ok) {
        throw new Error('Failed to update enquiry status');
      }
      
      const updatedEnquiry = await response.json();
      
      // Update the enquiry in the state
      setEnquiries(enquiries.map(item => item._id === id ? updatedEnquiry : item));
    } catch (err) {
      setError(err.message);
    }
  };

  // Loading state - displayed while fetching enquiries
  if (loading) {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <div style={cardStyle}>
              <div style={headerStyle}>
                <h2 style={{ margin: 0, fontWeight: '700' }}>Enquiries</h2>
              </div>
              <div className="p-4">
                <p>Loading enquiries...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state - displayed when enquiries fetch fails
  if (error) {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <div style={cardStyle}>
              <div style={headerStyle}>
                <h2 style={{ margin: 0, fontWeight: '700' }}>Enquiries</h2>
              </div>
              <div className="p-4">
                <div style={{
                  backgroundColor: '#f8d7da',
                  color: '#721c24',
                  padding: '15px',
                  borderRadius: '8px',
                  border: '1px solid #f5c6cb',
                  marginBottom: '20px'
                }}>
                  Error loading enquiries: {error}
                </div>
                <button
                  style={{
                    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  onClick={fetchEnquiries}
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success state - display enquiries
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          <div style={cardStyle}>
            <div style={headerStyle}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 style={{ margin: 0, fontWeight: '700' }}>Enquiries</h2>
                  <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>Manage all enquiries from users</p>
                </div>

                <div>
                  <button className="btn btn-sm btn-success me-2" onClick={exportToExcel}><i class="fa-solid fa-file-excel"></i></button>
                  <button className="btn btn-sm btn-success  ms-2" onClick={exportToPDF}><i class="fa-solid fa-file-pdf"></i></button>
                </div>
              </div>
            </div>
            <div className="p-4">
              {enquiries.length === 0 ? (
                <p>No enquiries available at the moment.</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead style={{ backgroundColor: '#f8f9fa' }}>
                      <tr>
                        <th className="border-0 py-3 px-4" style={{ color: '#6c757d', fontWeight: '600' }}>Name</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Email</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Subject</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Message</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Status</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Date</th>
                        <th className="border-0 py-3" style={{ color: '#6c757d', fontWeight: '600' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enquiries.map((enquiry) => (
                        <tr key={enquiry._id}>
                          {editingEnquiryId === enquiry._id ? (
                            // Editing form row
                            <>
                              <td className="py-3 px-4">
                                <input
                                  type="text"
                                  name="name"
                                  value={editForm.name}
                                  onChange={handleEditChange}
                                  className="form-control"
                                />
                              </td>
                              <td className="py-3">
                                <input
                                  type="email"
                                  name="email"
                                  value={editForm.email}
                                  onChange={handleEditChange}
                                  className="form-control"
                                />
                              </td>
                              <td className="py-3">
                                <input
                                  type="text"
                                  name="subject"
                                  value={editForm.subject}
                                  onChange={handleEditChange}
                                  className="form-control"
                                />
                              </td>
                              <td className="py-3">
                                <textarea
                                  name="message"
                                  value={editForm.message}
                                  onChange={handleEditChange}
                                  className="form-control"
                                  rows="2"
                                />
                              </td>
                              <td className="py-3">
                                <select
                                  name="status"
                                  value={editForm.status || enquiry.status}
                                  onChange={handleEditChange}
                                  className="form-control"
                                >
                                  <option value="New">New</option>
                                  <option value="In Progress">In Progress</option>
                                  <option value="Resolved">Resolved</option>
                                </select>
                              </td>
                              <td className="py-3">
                                {enquiry.createdAt ? new Date(enquiry.createdAt).toLocaleDateString() : 'N/A'}
                              </td>
                              <td className="py-3">
                                <div className="d-flex">
                                  <button
                                    onClick={() => saveEdit(enquiry._id)}
                                    style={{
                                      ...iconButtonStyle,
                                      background: 'linear-gradient(135deg, #28a745 0%, #218838 100%)',
                                      color: 'white',
                                      marginRight: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                    }}
                                  >
                                    <span style={{ fontSize: '12px' }}>Save</span>
                                  </button>
                                  <button
                                    onClick={cancelEditing}
                                    style={{
                                      ...iconButtonStyle,
                                      background: 'linear-gradient(135deg, #6c757d 0%, #5a6268 100%)',
                                      color: 'white'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(108, 117, 125, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                    }}
                                  >
                                    <span style={{ fontSize: '12px' }}>Cancel</span>
                                  </button>
                                </div>
                              </td>
                            </>
                          ) : (
                            // Normal display row
                            <>
                              <td className="py-3 px-4">{enquiry.name}</td>
                              <td className="py-3">{enquiry.email}</td>
                              <td className="py-3">{enquiry.subject}</td>
                              <td className="py-3">
                                {expandedEnquiries[enquiry._id]
                                  ? enquiry.message
                                  : (enquiry.message?.substring(0, 50) || 'No message') + (enquiry.message?.length > 50 ? '...' : '')}
                                {enquiry.message && enquiry.message.length > 50 && (
                                  <button
                                    onClick={() => toggleExpanded(enquiry._id)}
                                    style={readMoreStyle}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = '#ff6b35';
                                      e.currentTarget.style.textDecoration = 'underline';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = '#ff8c00';
                                      e.currentTarget.style.textDecoration = 'none';
                                    }}
                                  >
                                    {expandedEnquiries[enquiry._id] ? 'Read Less' : 'Read More'}
                                  </button>
                                )}
                              </td>
                              <td className="py-3">
                                <span className={`badge ${
                                  enquiry.status === 'New' ? 'bg-warning' :
                                  enquiry.status === 'In Progress' ? 'bg-primary' : 'bg-success'
                                }`}>
                                  {enquiry.status}
                                </span>
                              </td>
                              <td className="py-3">
                                {enquiry.createdAt ? new Date(enquiry.createdAt).toLocaleDateString() : 'N/A'}
                              </td>
                              <td className="py-3">
                                <div className="d-flex">
                                  <button
                                    onClick={() => startEditing(enquiry)}
                                    style={{
                                      ...iconButtonStyle,
                                      background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
                                      color: 'white'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 140, 0, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                    }}
                                  >
                                    <Edit size={16} />
                                  </button>
                                  <button
                                    onClick={() => deleteEnquiry(enquiry._id)}
                                    style={{
                                      ...iconButtonStyle,
                                      background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                                      color: 'white',
                                      marginLeft: '4px'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 0, 0, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                                    }}
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                  <button
                                    onClick={() => resolveEnquiry(enquiry._id)}
                                    style={{
                                      ...resolveButtonStyle,
                                      marginLeft: '4px',
                                      padding: '4px 8px',
                                      fontSize: '0.7rem'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(40, 167, 69, 0.4)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.transform = 'translateY(0)';
                                      e.currentTarget.style.boxShadow = 'none';
                                    }}
                                  >
                                    {enquiry.status === 'Resolved' ? 'Reopen' : 'Resolve'}
                                  </button>
                                </div>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;