// routes/questions.js
import express from "express";
const questionRoute = express.Router();
import Question from "../models/Question.js";

// Get all questions
// add ?public=true to hide correctAnswer (for user view)
questionRoute.get("", async (req, res) => {
  try {
    const isPublic = req.query.public === "true";
    const qs = await Question.find().sort({ createdAt: -1 }).lean();
    if (isPublic) {
      // remove correctAnswer before sending
      const safe = qs.map((q) => {
        const { correctAnswer, ...rest } = q;
        return rest;
      });
      return res.json(safe);
    }
    res.json(qs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Add new question (POST)
questionRoute.post("", async (req, res) => {
  try {
    const {
      question,
      subject,
      difficulty,
      marks,
      options,
      correctAnswer,
      time,
    } = req.body;
    // basic validation
    if (!question)
      return res.status(400).json({ message: "Question text required" });
    if (!Array.isArray(options) || options.length < 2)
      return res
        .status(400)
        .json({ message: "Options must be an array (min 2)" });
    const q = new Question({
      question,
      subject,
      difficulty,
      marks,
      options,
      time,
      correctAnswer,
    });
    const saved = await q.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update question (PUT)
questionRoute.put("/:id", async (req, res) => {
  try {
    const updates = req.body;
    const updated = await Question.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    if (!updated)
      return res.status(404).json({ message: "Question not found" });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete question (DELETE)
questionRoute.delete("/:id", async (req, res) => {
  try {
    const deleted = await Question.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Question not found" });
    res.json({ message: "Deleted", id: req.params.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Answer check (user clicks option)
// Body: { selected: "<option text>" }
// Response: { correct: true/false, correctAnswer: "<text>" }
questionRoute.post("/:id/answer", async (req, res) => {
  try {
    const q = await Question.findById(req.params.id).lean();
    if (!q) return res.status(404).json({ message: "Question not found" });
    const { selected } = req.body;
    const isCorrect =
      String(selected).trim() === String(q.correctAnswer).trim();
    res.json({ correct: isCorrect, correctAnswer: q.correctAnswer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default questionRoute;
