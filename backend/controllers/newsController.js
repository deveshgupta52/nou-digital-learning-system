// backend/controllers/newsController.js
// News Controller - Handles all CRUD operations for news articles
// This controller provides endpoints for creating, reading, updating, and deleting news articles

import News from '../models/News.js';

// Get all news articles
// GET /api/news
// Returns a JSON array of all news articles sorted by date (newest first)
export const getAllNews = async (req, res) => {
  try {
    // Fetch all news articles from database and sort by date descending
    const news = await News.find().sort({ date: -1 });
    // Return success response with news data
    res.status(200).json(news);
  } catch (error) {
    // Handle any errors during database operation
    res.status(500).json({ message: error.message });
  }
};

// Get a specific news article by ID
// GET /api/news/:id
// Returns a JSON object of the requested news article
export const getNewsById = async (req, res) => {
  try {
    // Find news article by ID in the database
    const news = await News.findById(req.params.id);
    // Check if news article exists
    if (!news) {
      // Return 404 if news article not found
      return res.status(404).json({ message: 'News not found' });
    }
    // Return success response with news data
    res.status(200).json(news);
  } catch (error) {
    // Handle any errors during database operation
    res.status(500).json({ message: error.message });
  }
};

// Create a new news article
// POST /api/news
// Accepts a JSON object with news article data and returns the created article
export const createNews = async (req, res) => {
  try {
    // Create new news instance with request body data
    const news = new News(req.body);
    // Save the news article to the database
    const savedNews = await news.save();
    // Return success response with created news data
    res.status(201).json(savedNews);
  } catch (error) {
    // Handle validation or database errors
    res.status(400).json({ message: error.message });
  }
};

// Update an existing news article
// PUT /api/news/:id
// Accepts a JSON object with updated news article data and returns the updated article
export const updateNews = async (req, res) => {
  try {
    // Find and update news article by ID
    // new: true returns the updated document
    // runValidators: true runs schema validators on update
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    // Check if news article exists
    if (!news) {
      // Return 404 if news article not found
      return res.status(404).json({ message: 'News not found' });
    }
    // Return success response with updated news data
    res.status(200).json(news);
  } catch (error) {
    // Handle validation or database errors
    res.status(400).json({ message: error.message });
  }
};

// Delete a news article
// DELETE /api/news/:id
// Deletes a news article by ID and returns a success message
export const deleteNews = async (req, res) => {
  try {
    // Find and delete news article by ID
    const news = await News.findByIdAndDelete(req.params.id);
    // Check if news article exists
    if (!news) {
      // Return 404 if news article not found
      return res.status(404).json({ message: 'News not found' });
    }
    // Return success response
    res.status(204).send();
  } catch (error) {
    // Handle any errors during database operation
    res.status(500).json({ message: error.message });
  }
};