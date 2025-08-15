// frontend/src/Elements/News.jsx
// News Component for displaying news articles in the admin dashboard
// This component fetches news from the backend API and displays them in a dashboard-like layout

import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';

// Main News Component
const News = () => {
  // State variables for news data, loading status, and error handling
  const [news, setNews] = useState([]);        // Stores fetched news articles
  const [loading, setLoading] = useState(true); // Loading state for API requests
  const [error, setError] = useState(null);     // Error state for failed requests
  const [editingNewsId, setEditingNewsId] = useState(null); // ID of news item being edited
const [showAddForm, setShowAddForm] = useState(false); // State for showing add news form
  const [addForm, setAddForm] = useState({ title: '', content: '', author: '', image: '' }); // Form data for adding news
  const [editForm, setEditForm] = useState({ title: '', content: '', author: '', image: '' }); // Form data for editing
const [expandedNews, setExpandedNews] = useState({}); // Track which news items are expanded

  // Dashboard-like card style for consistent UI with admin panel
  const cardStyle = {
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    overflow:"visible",
    height: '100%',
    backgroundColor: '#fff'
  };

  // Dashboard-like header style matching admin panel design
  const headerStyle = {
    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
    color: 'white',
    padding: '15px 20px',
    borderRadius: '15px 15px 0 0'
  };

  // Dashboard-like button style for interactive elements
  const buttonStyle = {
    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };
// Consistent icon button style for edit, delete, and add icons
  const iconButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '0',
    margin: '0 0 0 8px'  // Add left margin for spacing between icons
  };
// Function to toggle expanded state for a news item
  const toggleExpanded = (newsId) => {
    setExpandedNews(prev => ({
      ...prev,
      [newsId]: !prev[newsId]
    }));
  };
  // useEffect hook to fetch news when component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  // Function to fetch news from backend API
  // Connects to http://localhost:3000/api/news endpoint
  const fetchNews = async () => {
    try {
      // Use the full URL for the API endpoint
      const response = await fetch('http://localhost:3000/api/news');
      
      // Check if response is successful
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Failed to fetch news';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // If we can't parse JSON, it's likely HTML (404 page)
          errorMessage = `HTTP Error: ${response.status} - ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }
      
      // Parse JSON response and update state
      const data = await response.json();
      setNews(data);
      setLoading(false);
    } catch (err) {
      // Handle fetch errors
      setError(err.message);
      setLoading(false);
    }
  };

  // Function to delete a news article
  const deleteNews = async (id) => {
    if (window.confirm('Are you sure you want to delete this news article?')) {
      try {
        const response = await fetch(`http://localhost:3000/api/news/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete news');
        }
        
        // Remove the deleted news from the state
        setNews(news.filter(item => item._id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  // Function to start editing a news article
  const startEditing = (newsItem) => {
    setEditingNewsId(newsItem._id);
    setEditForm({
      title: newsItem.title || '',
      content: newsItem.content || '',
      author: newsItem.author || '',
      image: newsItem.image || ''
    });
  };

  // Function to handle form input changes
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to cancel editing
  const cancelEditing = () => {
    setEditingNewsId(null);
    setEditForm({ title: '', content: '', author: '', image: '' });
  };

  // Function to save edited news
  const saveEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/news/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editForm)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update news');
      }
      
      const updatedNews = await response.json();
      
      // Update the news in the state
      setNews(news.map(item => item._id === id ? updatedNews : item));
      
      // Reset edit state
      setEditingNewsId(null);
      setEditForm({ title: '', content: '', author: '', image: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  // Function to handle form input changes for add form
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setAddForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to show the add news form
  const showAddFormHandler = () => {
    setShowAddForm(true);
  };

  // Function to hide the add news form
  const hideAddFormHandler = () => {
    setShowAddForm(false);
    setAddForm({ title: '', content: '', author: '', image: '' });
  };

  // Function to create a new news article
  const createNews = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addForm)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create news');
      }
      
      const newNews = await response.json();
      
      // Add the new news to the state
      setNews([newNews, ...news]);
      
      // Hide the form and reset it
      hideAddFormHandler();
    } catch (err) {
      setError(err.message);
    }
  };

  // Loading state - displayed while fetching news
  if (loading) {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            {/* Main card container with dashboard styling */}
            <div style={cardStyle}>
              {/* Header section with title */}
              <div style={headerStyle}>
                <h2 style={{ margin: 0, fontWeight: '700' }}>Latest News</h2>
              </div>
              {/* Content area showing loading message */}
              <div className="p-4">
                <p>Loading news...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state - displayed when news fetch fails
  if (error) {
    return (
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            {/* Main card container with dashboard styling */}
            <div style={cardStyle}>
              {/* Header section with title */}
              <div style={headerStyle}>
                <h2 style={{ margin: 0, fontWeight: '700' }}>Latest News</h2>
              </div>
              {/* Content area showing error message and retry button */}
              <div className="p-4">
                {/* Error message display with styling */}
                <div style={{ 
                  backgroundColor: '#f8d7da', 
                  color: '#721c24', 
                  padding: '15px', 
                  borderRadius: '8px',
                  border: '1px solid #f5c6cb',
                  marginBottom: '20px'
                }}>
                  Error loading news: {error}
                </div>
                {/* Retry button with hover effects */}
                <button 
                  style={buttonStyle}
                  onClick={fetchNews}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 140, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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

  // Success state - display news articles
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12">
          {/* Main card container with dashboard styling */}
          <div style={cardStyle}>
            {/* Header section with title and subtitle */}
            <div style={headerStyle}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h2 style={{ margin: 0, fontWeight: '700' }}>Latest News</h2>
                  <p style={{ margin: '5px 0 0 0', opacity: 0.9 }}>Stay updated with the latest announcements</p>
                </div>
                <button
                  className="btn btn-sm"
                  style={{
                    ...iconButtonStyle,
                    background: 'linear-gradient(135deg, #00c853 0%, #009624 100%)',
                    color: 'white'
                  }}
                  onClick={showAddFormHandler}
                >
                  <Plus size={16} />
                </button>
              </div>
{/* Add news form */}
              {showAddForm && (
                <div className="mb-4 p-3" style={{ 
                  border: '1px solid #ff8c00', 
                  borderRadius: '8px',
                  backgroundColor: '#fff9f0'
                }}>
                  <h5 className="mb-3">Add New News</h5>
                  <form onSubmit={createNews}>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="title"
                        value={addForm.title}
                        onChange={handleAddChange}
                        className="form-control"
                        placeholder="Title"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        name="content"
                        value={addForm.content}
                        onChange={handleAddChange}
                        className="form-control"
                        placeholder="Content"
                        rows="3"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="author"
                        value={addForm.author}
                        onChange={handleAddChange}
                        className="form-control"
                        placeholder="Author"
                      />
                    </div>
                    {/* <div className="mb-3">
                      <input
                        type="text"
                        name="image"
                        value={addForm.image}
                        onChange={handleAddChange}
                        className="form-control"
                        placeholder="Image URL"
                      />
                    </div> */}
                    <div className="d-flex justify-content-between">
                      <button 
                        type="submit"
                        className="btn btn-sm btn-primary"
                      >
                        Add News
                      </button>
                      <button 
                        type="button"
                        className="btn btn-sm btn-secondary"
                        onClick={hideAddFormHandler}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            {/* Content area for news articles */}
            <div className="p-4">
              {/* Check if news array is empty */}
              {news.length === 0 && !showAddForm ? (
                <p>No news available at the moment.</p>
              ) : (
                /* News grid layout - 4 columns on large screens */
                <div className="row">
                  {/* Map through news articles and create cards */}
                  {news.map((item, index) => (
                    /* Column layout - responsive for different screen sizes */
                    <div className="col-md-6 col-lg-3 mb-4" key={item._id || index}>
                      {/* Individual news card with dashboard styling */}
                      <div style={{
                        ...cardStyle,
                        height: '100%',
                        backgroundColor: '#fff'
                      }}>
                        {/* News image if available */}
                        {item.image && (
                          <img
                            src={item.image}
                            className="card-img-top"
                            alt={item.title}
                            style={{ height: '150px', objectFit: 'cover', width: '100%' }}
                          />
                        )}
                        {/* News content area with flex layout */}
                        <div className="p-3 d-flex flex-column" style={{ height: '100%' }}>
                          {/* Edit form when editing this item */}
                          {editingNewsId === item._id ? (
                            <div className="d-flex flex-column" style={{ height: '100%' }}>
                              <input
                                type="text"
                                name="title"
                                value={editForm.title}
                                onChange={handleEditChange}
                                className="form-control mb-2"
                                placeholder="Title"
                              />
                              <textarea
                                name="content"
                                value={editForm.content}
                                onChange={handleEditChange}
                                className="form-control mb-2 flex-grow-1"
                                placeholder="Content"
                                rows="3"
                              />
                              <input
                                type="text"
                                name="author"
                                value={editForm.author}
                                onChange={handleEditChange}
                                className="form-control mb-2"
                                placeholder="Author"
                              />
                              <input
                                type="text"
                                name="image"
                                value={editForm.image}
                                onChange={handleEditChange}
                                className="form-control mb-2"
                                placeholder="Image URL"
                              />
                              <div className="d-flex justify-content-between mt-auto">
                                <button
                                  className="btn btn-sm btn-primary"
                                  onClick={() => saveEdit(item._id)}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-sm btn-secondary"
                                  onClick={cancelEditing}
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="d-flex flex-column" style={{ height: '100%' }}>
                              {/* News title with styling */}
                              <h5 className="mb-2" style={{
                                fontWeight: '700',
                                color: '#2c3e50',
                                fontSize: '1.1rem'
                              }}>
                                {item.title}
                              </h5>
                              {/* News content preview */}
                              <p className="flex-grow-1" style={{
                                color: '#6c757d',
                                fontSize: '0.9rem'
                              }}>
                                {expandedNews[item._id] 
                                  ? item.content 
                                  : (item.content?.substring(0, 80) || 'No content available') + (item.content?.length > 80 ? '...' : '')}
                                {item.content?.substring(0, 80) || 'No content available'}...
                              </p>
                              {item.content && item.content.length > 80 && (
                                <button
                                  onClick={() => toggleExpanded(item._id)}
                                  style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#ff8c00',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    padding: '0',
                                    fontSize: '0.85rem',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                  }}
                                >
                                  {expandedNews[item._id] ? 'Read Less' : 'Read More'}
                                </button> )}
                              {/* News metadata section (author and date) */}
                              <div className="mt-auto">
                                {/* Author information if available */}
                                {item.author && (
                                  <p className="mb-1" style={{
                                    color: '#ff8c00',
                                    fontWeight: '600',
                                    fontSize: '0.85rem'
                                  }}>
                                    By {item.author}
                                  </p>
                                )}
                                {/* Publication date */}
                                <p style={{
                                  color: '#6c757d',
                                  fontSize: '0.8rem',
                                  marginBottom: '0'
                                }}>
                                  {item.date ? new Date(item.date).toLocaleDateString() : 'Date not available'}
                                </p>
                              </div>
                              {/* Edit and Delete buttons */}
                              <div className="d-flex justify-content-end mt-2">
                                <button
                                  className="btn btn-sm"
                                  style={{
                                    ...iconButtonStyle,
                                    background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
                                    color: 'white'
                                  }}
                                  onClick={() => startEditing(item)}
                                >
                                  <Edit size={16} />
                                </button>
                                <button
                                  className="btn btn-sm"
                                  style={{
                                    ...iconButtonStyle,
                                    background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                                    color: 'white'
                                  }}
                                  onClick={() => deleteNews(item._id)}
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;