// backend/routes/newsRoute.js
// News Routes - Defines all API endpoints for news articles
// This file sets up the routing for all news-related operations

import express from 'express';
import {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
} from '../controllers/newsController.js';

// Create an express router instance
const router = express.Router();

// Route: GET /api/news
// Description: Fetch all news articles
// Controller: getAllNews - Returns all news articles sorted by date
router.get('/', getAllNews);

// Route: GET /api/news/:id
// Description: Fetch a specific news article by ID
// Controller: getNewsById - Returns a single news article
router.get('/:id', getNewsById);

// Route: POST /api/news
// Description: Create a new news article
// Controller: createNews - Creates and returns a new news article
router.post('/', createNews);

// Route: PUT /api/news/:id
// Description: Update an existing news article by ID
// Controller: updateNews - Updates and returns the modified news article
router.put('/:id', updateNews);

// Route: DELETE /api/news/:id
// Description: Delete a news article by ID
// Controller: deleteNews - Removes a news article from the database
router.delete('/:id', deleteNews);

// Export the router for use in the main application
export default router;