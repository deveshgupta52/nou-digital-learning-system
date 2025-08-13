import React, { useState } from 'react';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length < 2) {
      setSubmitError('Name must be at least 2 characters long');
      return false;
    }
    
    const emailRegex = /.+@.+\..+/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return false;
    }
    
    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      setSubmitError('Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9');
      return false;
    }
    
    if (!formData.subject) {
      setSubmitError('Subject is required');
      return false;
    }
    
    if (!formData.message || formData.message.length < 10) {
      setSubmitError('Message must be at least 10 characters long');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('http://localhost:3000/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit enquiry');
      }
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div 
              className="card-header py-3"
              style={{
                background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
                color: 'white'
              }}
            >
              <h3 className="mb-0 text-center">Contact Us</h3>
              <p className="mb-0 text-center">Have a question? Send us a message!</p>
            </div>
            <div className="card-body p-4">
              {submitSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Success!</strong> Your enquiry has been submitted successfully. We'll get back to you soon.
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              )}
              
              {submitError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>Error!</strong> {submitError}
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
                  />
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[6-9][0-9]{9}"
                      placeholder="e.g., 9876543210"
                    />
                    <div className="form-text">10-digit number starting with 6, 7, 8, or 9</div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                  ></textarea>
                  <div className="form-text">Please provide as much detail as possible</div>
                </div>
                
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary py-3"
                    style={{
                      background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
                      border: 'none',
                      fontWeight: 'bold'
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Enquiry'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;