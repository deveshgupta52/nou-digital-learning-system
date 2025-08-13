import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const difficultyColors = {
  Easy: "green",
  Medium: "orange",
  Hard: "red",
};

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState({
    question: "",
    subject: "",
    difficulty: "Easy",
    marks: 1,
    options: ["", "", "", ""],
    correctAnswer: "",
  });
  const [editId, setEditId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/questions");
      setQuestions(res.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...form.options];
    updatedOptions[index] = value;
    setForm({ ...form, options: updatedOptions });
  };

  const handleAddOrUpdate = async () => {
    try {
      if (editId) {
        await axios.put(`http://localhost:3000/questions/${editId}`, form);
        setEditId(null);
      } else {
        await axios.post("http://localhost:3000/questions", form);
      }
      setForm({
        question: "",
        subject: "",
        difficulty: "Easy",
        marks: 1,
        options: ["", "", "", ""],
        correctAnswer: "",
      });
      fetchQuestions();
    } catch (error) {
      console.error("Error adding/updating question:", error);
    }
  };

  const handleEdit = (question) => {
    setForm({
      question: question.question,
      subject: question.subject,
      difficulty: question.difficulty,
      marks: question.marks,
      options: question.options || ["", "", "", ""],
      correctAnswer: question.correctAnswer || "",
    });
    setEditId(question._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <>
      {/* Main Content */}
      <div>
        {/* Admin UI */}
        <h3>Question Bank Management (Admin View)</h3>
        <p>Create and manage examination questions</p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              background: "orange",
              color: "white",
              padding: 20,
              borderRadius: 8,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24 }}>{questions.length}</div>
            <div>Total Questions</div>
          </div>
          <div
            style={{
              backgroundColor: "#2e7d32",
              color: "white",
              padding: 20,
              borderRadius: 8,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24 }}>
              {questions.filter((q) => q.difficulty === "Easy").length}
            </div>
            <div>Easy</div>
          </div>
          <div
            style={{
              backgroundColor: "#fbc02d",
              color: "black",
              padding: 20,
              borderRadius: 8,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24 }}>
              {questions.filter((q) => q.difficulty === "Medium").length}
            </div>
            <div>Medium</div>
          </div>
          <div
            style={{
              backgroundColor: "#d32f2f",
              color: "white",
              padding: 20,
              borderRadius: 8,
              minWidth: 120,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24 }}>
              {questions.filter((q) => q.difficulty === "Hard").length}
            </div>
            <div>Hard</div>
          </div>
        </div>

        {/* Add/Update Form */}
        <div
          style={{
            marginBottom: 20,
            border: "1px solid #ddd",
            padding: 20,
            borderRadius: 8,
          }}
        >
          <h4>{editId ? "Update Question" : "Add Question"}</h4>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <input
              style={{ flex: 1, padding: 8 }}
              type="text"
              name="question"
              placeholder="Question"
              value={form.question}
              onChange={handleInputChange}
            />
            <input
              style={{ width: 150, padding: 8 }}
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleInputChange}
            />
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleInputChange}
              style={{ width: 120, padding: 8 }}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <input
              style={{ width: 80, padding: 8 }}
              type="number"
              name="marks"
              min={1}
              value={form.marks}
              onChange={handleInputChange}
            />
          </div>

          {/* MCQ Options */}
          <div style={{ marginTop: 15 }}>
            <h5>Options</h5>
            {form.options.map((opt, idx) => (
              <input
                key={idx}
                style={{ width: "100%", padding: 8, marginBottom: 8 }}
                type="text"
                placeholder={`Option ${idx + 1}`}
                value={opt}
                onChange={(e) => handleOptionChange(idx, e.target.value)}
              />
            ))}

            <select
              name="correctAnswer"
              value={form.correctAnswer}
              onChange={handleInputChange}
              style={{ width: "100%", padding: 8 }}
            >
              <option value="">Select Correct Answer</option>
              {form.options.map((opt, idx) => (
                <option key={idx} value={opt}>{`Option ${
                  idx + 1
                }: ${opt}`}</option>
              ))}
            </select>
          </div>

          <div style={{ marginTop: 15, display: "flex", gap: 10 }}>
            <button
              style={{
                backgroundColor: "#0d47a1",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
              onClick={handleAddOrUpdate}
            >
              {editId ? "Update" : "Add"}
            </button>
            {editId && (
              <button
                style={{
                  backgroundColor: "#b71c1c",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
                onClick={() => {
                  setEditId(null);
                  setForm({
                    question: "",
                    subject: "",
                    difficulty: "Easy",
                    marks: 1,
                    options: ["", "", "", ""],
                    correctAnswer: "",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Questions Table */}
        <div
          style={{
            backgroundColor: "#1565c0",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px 4px 0 0",
          }}
        >
          <strong>Question Bank</strong>
        </div>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <thead style={{ backgroundColor: "#1565c0", color: "white" }}>
            <tr>
              <th style={{ padding: 8, textAlign: "left" }}>Question</th>
              <th style={{ padding: 8, textAlign: "left" }}>Subject</th>
              <th style={{ padding: 8, textAlign: "left" }}>Difficulty</th>
              <th style={{ padding: 8, textAlign: "left" }}>Marks</th>
              <th style={{ padding: 8, textAlign: "left" }}>Options</th>
              <th style={{ padding: 8, textAlign: "left" }}>Correct Answer</th>
              <th style={{ padding: 8, textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.length === 0 && (
              <tr>
                <td colSpan={7} style={{ padding: 8, textAlign: "center" }}>
                  No questions found.
                </td>
              </tr>
            )}
            {questions.map((q) => (
              <tr key={q._id} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: 8 }}>{q.question}</td>
                <td style={{ padding: 8 }}>{q.subject}</td>
                <td
                  style={{
                    padding: 8,
                    color: difficultyColors[q.difficulty],
                  }}
                >
                  {q.difficulty}
                </td>
                <td style={{ padding: 8 }}>{q.marks}</td>
                <td style={{ padding: 8 }}>
                  {q.options && q.options.join(", ")}
                </td>
                <td style={{ padding: 8 }}>{q.correctAnswer}</td>
                <td style={{ padding: 8 }}>
                  <button
                    className="btn btn-sm mb-2 btn-warning"
                    onClick={() => handleEdit(q)}
                    style={{ marginRight: 10, cursor: "pointer" }}
                  >
                    Edit
                  </button>
                  <button
                  className="btn btn-danger text-white btn-sm"
                    onClick={() => handleDelete(q._id)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default QuestionBank;
