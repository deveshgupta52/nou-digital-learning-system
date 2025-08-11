// backend/models/News.js
// News Model - Defines the structure and schema for news articles
// This model represents a news article in the database with all its properties

import mongoose from 'mongoose';

// Define the news schema with all required and optional fields
const newsSchema = new mongoose.Schema({
  // Title of the news article - required field
  title: {
    type: String,
    required: true
  },
  // Main content of the news article - required field
  content: {
    type: String,
    required: true
  },
  // Publication date of the news article - defaults to current date
  date: {
    type: Date,
    default: Date.now
  },
  // Author of the news article - optional field
  author: {
    type: String,
    required: false
  },
  // Image URL for the news article - optional field
  image: {
    type: String,
    required: false
  },
  // Summary or excerpt of the news article - optional field
  summary: {
    type: String,
    required: false
  }
});

// Create and export the News model based on the schema
// This model will be used to interact with the "News" collection in MongoDB
export default mongoose.model('News', newsSchema);