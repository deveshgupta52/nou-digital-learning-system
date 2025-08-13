// models/Question.js
import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  subject: { type: String, default: "" },
  difficulty: { type: String, enum: ["Easy","Medium","Hard"], default: "Easy" },
  marks: { type: Number, default: 1 },
  options: { type: [String], default: ["", "", "", ""] }, // MCQ options
  correctAnswer: { type: String, default: "" }, // store exact option text
  createdAt: { type: Date, default: Date.now },
  public: { type: Boolean, default: true }
});

const questionModel = mongoose.model('Question', QuestionSchema);
export default questionModel;
