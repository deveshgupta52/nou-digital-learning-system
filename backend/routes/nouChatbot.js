// nouChatbot.js
import express from "express";
import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// File path for context (only using context now, no FAQ)
const CONTEXT_PATH = path.join(__dirname, "data", "nou_context.md");

// Load context file
const nouContext = fs.existsSync(CONTEXT_PATH)
  ? fs.readFileSync(CONTEXT_PATH, "utf-8")
  : "";

// Gemini API setup
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) console.warn("⚠ GEMINI_API_KEY not found in .env");

const genAI = new GoogleGenerativeAI(API_KEY || "");

// Allowed keywords to filter only NOU-related queries
const ALLOWED_KEYWORDS = [
  "nou", "nalanda open university", "digital learning", "assessment",
  "exam", "result", "admission", "timetable", "course", "syllabus",
  "assignment", "lms", "portal", "fee", "hall ticket", "id card",
  "study center", "regional center", "enrollment", "login"
];

// Check if query is related to NOU
function isNOUQuery(text = "") {
  const lower = text.toLowerCase();
  return ALLOWED_KEYWORDS.some(k => lower.includes(k));
}

// Build prompt for Gemini (only from context)
function buildPrompt(userMsg) {
  return `You are NOU Assistant, an AI for Nalanda Open University (NOU) Digital Learning & Assessment System.



NOU CONTEXT:
${nouContext}

User Question: ${userMsg}`;
}

// API route for chatbot
router.post("/nou-chat", async (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message (string) is required" });
    }

    // Check if question is NOU related
    if (!isNOUQuery(message)) {
      return res.json({ reply: "Sorry, main sirf NOU se related questions ka jawab deta hoon." });
    }

    const prompt = buildPrompt(message);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);
    const reply = result?.response?.text?.() || "Mujhe thoda issue aa raha hai. Kripya dobara koshish karein.";

    res.json({ reply });
  } catch (err) {
    console.error("❌ Chatbot error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
