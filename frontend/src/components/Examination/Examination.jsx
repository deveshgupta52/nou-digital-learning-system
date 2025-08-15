import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const difficultyColors = {
  Easy: "green",
  Medium: "orange",
  Hard: "red",
};

const Examination = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testCompleted, setTestCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentQuestionTime, setCurrentQuestionTime] = useState(0);

  const timerRef = useRef(null);
  const questionTimerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (testStarted) {
      fetchQuestions();
    }
  }, [testStarted]);

  // ✅ Start first question timer after questions load
  useEffect(() => {
    if (questions.length > 0 && testStarted) {
      startQuestionTimer(0);
    }
  }, [questions, testStarted]);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get("http://localhost:3000/questions?public=true");
      setQuestions(res.data);
      setSelectedAnswers({});
      setCurrentIndex(0);
      setTestCompleted(false);
      setScore(0);

      const totalTimeSec = res.data.reduce((acc, q) => acc + (q.time || 5), 0) * 60;
      setTimeLeft(totalTimeSec);
      setTotalTime(totalTimeSec);

      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            clearInterval(questionTimerRef.current);
            handleSubmitTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // ❌ Remove startQuestionTimer() from here
    } catch (err) {
      console.error("Error fetching questions:", err);
    }
  };

  const startQuestionTimer = (index) => {
    if (!questions[index]) return;
    if (questionTimerRef.current) clearInterval(questionTimerRef.current);

    const questionTime = questions[index].time || 5;
    setCurrentQuestionTime(questionTime * 60);

    questionTimerRef.current = setInterval(async () => {
      setCurrentQuestionTime((prev) => {
        if (prev <= 1) {
          clearInterval(questionTimerRef.current);

          const currentQ = questions[index];

          // Blank answer save on timeout
          if (!selectedAnswers[currentQ._id]) {
            axios.post(`http://localhost:3000/questions/${currentQ._id}/answer`, { selected: null })
              .then(() => {
                setSelectedAnswers((prev) => ({
                  ...prev,
                  [currentQ._id]: {
                    selected: null,
                    correct: false,
                    correctAnswer: currentQ.correctAnswer || "",
                  },
                }));
              })
              .catch((err) => console.error("Error saving blank answer:", err));
          }

          // Move to next question
          if (index < questions.length - 1) {
            setCurrentIndex(index + 1);
            startQuestionTimer(index + 1);
          } else {
            handleSubmitTest();
          }

          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleUserSelectOption = async (questionId, optionText) => {
    if (selectedAnswers[questionId]) return;
    try {
      const res = await axios.post(
        `http://localhost:3000/questions/${questionId}/answer`,
        { selected: optionText }
      );
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

  const handleNextQuestion = async () => {
    const currentQ = questions[currentIndex];

    if (!selectedAnswers[currentQ._id]) {
      try {
        await axios.post(`http://localhost:3000/questions/${currentQ._id}/answer`, { selected: null });
        setSelectedAnswers((prev) => ({
          ...prev,
          [currentQ._id]: {
            selected: null,
            correct: false,
            correctAnswer: currentQ.correctAnswer || "",
          },
        }));
      } catch (err) {
        console.error("Error saving blank answer:", err);
      }
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      startQuestionTimer(currentIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      startQuestionTimer(currentIndex - 1);
    }
  };

  const handleSubmitTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (questionTimerRef.current) clearInterval(questionTimerRef.current);

    let calculatedScore = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q._id] && selectedAnswers[q._id].correct) {
        calculatedScore += q.marks || 1;
      }
    });
    setScore(calculatedScore);
    setTestCompleted(true);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const getProgressColor = () => {
    const ratio = timeLeft / totalTime;
    if (ratio > 0.5) return "#4caf50";
    if (ratio > 0.2) return "#ff9800";
    return "#f44336";
  };

  const overallProgress = totalTime ? (timeLeft / totalTime) * 100 : 0;
  const questionProgress = questions[currentIndex]?.time
    ? (currentQuestionTime / (questions[currentIndex].time * 60)) * 100
    : 100;

  if (!testStarted) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Welcome to the Examination</h2>
        <button
          className="btn btn-success"
          onClick={() => setTestStarted(true)}
          style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer", borderRadius: 5, border: "none", color: "white" }}
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
          Your Score: <strong>{score}</strong> / {questions.reduce((acc, q) => acc + (q.marks || 1), 0)}
        </p>
        <h3>Exam Submitted</h3>
        {/* <button
          onClick={() => navigate("/")}
          className="btn btn-success"
          style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer", borderRadius: 5, border: "none", color: "white", marginTop: 20 }}
        >
          Back to Home
        </button> */}
      </div>
    );
  }

  const q = questions[currentIndex];
  const ans = selectedAnswers[q?._id];

  return (
    <div style={{ maxWidth: 600, margin: "30px auto", padding: 20, borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff" }}>
      <div style={{ marginBottom: 5 }}>
        <div style={{ height: 10, width: "100%", backgroundColor: "#ddd", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ width: `${overallProgress}%`, height: "100%", backgroundColor: getProgressColor(), transition: "width 0.5s" }}></div>
        </div>
      </div>
      <div style={{ textAlign: "right", marginBottom: 15, fontWeight: 600 }}>Total Time Left: {formatTime(timeLeft)}</div>

      <div style={{ marginBottom: 10 }}>
        <div style={{ height: 6, width: "100%", backgroundColor: "#eee", borderRadius: 10, overflow: "hidden" }}>
          <div style={{ width: `${questionProgress}%`, height: "100%", backgroundColor: "#42a5f5", transition: "width 0.5s" }}></div>
        </div>
        <div style={{ textAlign: "right", fontSize: 12 }}>Current Question Time Left: {formatTime(currentQuestionTime)}</div>
      </div>

      <h3>Question {currentIndex + 1} of {questions.length}</h3>
      <p style={{ fontWeight: "600", marginBottom: 12 }}>{q?.question}</p>
      <div style={{ fontSize: 13, marginBottom: 10, color: "#555" }}>
        <span style={{ marginRight: 15 }}>Subject: {q?.subject || "-"}</span>
        <span>
          Difficulty: <span style={{ color: difficultyColors[q?.difficulty] || "black" }}>{q?.difficulty || "-"}</span>
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
            <button key={idx} onClick={() => handleUserSelectOption(q._id, opt)} disabled={!!ans} style={btnStyle}>
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
            <span style={{ color: "#c62828", fontWeight: 600 }}>Incorrect ❌ — Correct answer: {ans.correctAnswer}</span>
          )}
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <button onClick={handlePrevQuestion} disabled={currentIndex === 0} style={{ padding: "8px 16px", borderRadius: 6, border: "1px solid #ccc", backgroundColor: currentIndex === 0 ? "#eee" : "#90caf9", cursor: currentIndex === 0 ? "not-allowed" : "pointer", flex: "1 1 auto" }}>
          Previous
        </button>

        {currentIndex === questions.length - 1 ? (
          <button onClick={handleSubmitTest} style={{ padding: "8px 16px", borderRadius: 6, border: "none", backgroundColor: "#2e7d32", color: "white", cursor: "pointer", flex: "1 1 auto" }}>
            Submit Test
          </button>
        ) : (
          <button onClick={handleNextQuestion} style={{ padding: "8px 16px", borderRadius: 6, border: "1px solid #ccc", backgroundColor: "#90caf9", cursor: "pointer", flex: "1 1 auto" }}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Examination;
