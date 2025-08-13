import React, { useState, useEffect } from "react";
import axios from "axios";

const difficultyColors = {
  Easy: "green",
  Medium: "orange",
  Hard: "red",
};

const Examination = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [publicQuestions, setPublicQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (testStarted) {
      fetchPublicQuestions();
    }
  }, [testStarted]);

  const fetchPublicQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/questions?public=true");
      setPublicQuestions(res.data);
      setSelectedAnswers({});
      setCurrentIndex(0);
      setTestCompleted(false);
      setScore(0);
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  const handleUserSelectOption = async (questionId, optionText) => {
    if (selectedAnswers[questionId]) return; // already answered

    try {
      const res = await axios.post(`http://localhost:3000/questions/${questionId}/answer`, { selected: optionText });
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: {
          selected: optionText,
          correct: res.data.correct,
          correctAnswer: res.data.correctAnswer,
        },
      }));
    } catch (err) {
      console.error("Error checking answer:", err);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < publicQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    let calculatedScore = 0;
    publicQuestions.forEach((q) => {
      if (selectedAnswers[q._id] && selectedAnswers[q._id].correct) {
        calculatedScore += q.marks || 1;
      }
    });
    setScore(calculatedScore);
    setTestCompleted(true);
  };

  if (!testStarted) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Welcome to the Examination</h2>
        <button
          onClick={() => setTestStarted(true)}
          style={{
            padding: "10px 20px",
            fontSize: 16,
            cursor: "pointer",
            borderRadius: 5,
            border: "none",
            backgroundColor: "#1565c0",
            color: "white",
          }}
        >
          Start Test
        </button>
      </div>
    );
  }

  if (testCompleted) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Test Completed!</h2>
        <p>
          Your Score: <strong>{score}</strong> /{" "}
          {publicQuestions.reduce((acc, q) => acc + (q.marks || 1), 0)}
        </p>
        <button
          onClick={() => {
            setTestStarted(false);
            setSelectedAnswers({});
            setCurrentIndex(0);
            setTestCompleted(false);
            setScore(0);
          }}
          style={{
            padding: "10px 20px",
            fontSize: 16,
            cursor: "pointer",
            borderRadius: 5,
            border: "none",
            backgroundColor: "#2e7d32",
            color: "white",
          }}
        >
          Restart Test
        </button>
      </div>
    );
  }

  const q = publicQuestions[currentIndex];
  const ans = selectedAnswers[q?._id];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: 20,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h3>
        Question {currentIndex + 1} of {publicQuestions.length}
      </h3>
      <p style={{ fontWeight: "600", marginBottom: 12 }}>{q?.question}</p>
      <div style={{ fontSize: 13, marginBottom: 10, color: "#555" }}>
        <span style={{ marginRight: 15 }}>Subject: {q?.subject || "-"}</span>
        <span>
          Difficulty:{" "}
          <span style={{ color: difficultyColors[q?.difficulty] || "black" }}>
            {q?.difficulty || "-"}
          </span>
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 15 }}>
        {q?.options?.map((opt, idx) => {
          let btnStyle = {
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            textAlign: "left",
            cursor: ans ? "default" : "pointer",
            backgroundColor: "#f7f7f7",
            userSelect: "none",
          };

          if (ans) {
            if (opt === ans.correctAnswer) {
              btnStyle.backgroundColor = "#e6ffed";
              btnStyle.border = "1px solid #2e7d32";
            } else if (opt === ans.selected && !ans.correct) {
              btnStyle.backgroundColor = "#ffecec";
              btnStyle.border = "1px solid #c62828";
            } else {
              btnStyle.opacity = 0.9;
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleUserSelectOption(q._id, opt)}
              disabled={!!ans}
              style={btnStyle}
            >
              <strong style={{ marginRight: 10 }}>{String.fromCharCode(65 + idx)}.</strong>
              {opt}
            </button>
          );
        })}
      </div>

      {ans && (
        <div style={{ marginBottom: 15 }}>
          {ans.correct ? (
            <span style={{ color: "#2e7d32", fontWeight: 600 }}>Correct ✅</span>
          ) : (
            <span style={{ color: "#c62828", fontWeight: 600 }}>
              Incorrect ❌ — Correct answer: {ans.correctAnswer}
            </span>
          )}
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          style={{
            padding: "8px 16px",
            borderRadius: 6,
            border: "1px solid #ccc",
            backgroundColor: currentIndex === 0 ? "#eee" : "#90caf9",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            flex: "1 1 auto",
          }}
        >
          Previous
        </button>

        {currentIndex === publicQuestions.length - 1 ? (
          <button
            onClick={handleSubmitTest}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "none",
              backgroundColor: "#2e7d32",
              color: "white",
              cursor: "pointer",
              flex: "1 1 auto",
            }}
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            disabled={currentIndex === publicQuestions.length - 1}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "1px solid #ccc",
              backgroundColor:
                currentIndex === publicQuestions.length - 1 ? "#eee" : "#90caf9",
              cursor:
                currentIndex === publicQuestions.length - 1 ? "not-allowed" : "pointer",
              flex: "1 1 auto",
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Examination;
