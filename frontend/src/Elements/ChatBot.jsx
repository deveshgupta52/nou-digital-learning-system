// Elements/ChatBot.jsx
import React, { useState, useRef, useEffect } from "react";

function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "👋 Hello! Main NOU Assistant hoon. Sirf NOU se related sawaalon ka jawab deta hoon. Aap apna sawal pooch sakte hain.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3000/chat/nou-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text })
      });

      const data = await res.json();
      const botMessage = { text: data.reply || "⚠ Server error", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { text: "⚠ Network error", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      width: "320px",
      height: "420px",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.5)"
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: "#ff6600",
        padding: "10px",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "16px"
      }}>
        🧠 NOU ChatBot
      </div>

      {/* Messages */}
      <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            textAlign: msg.sender === "user" ? "right" : "left",
            margin: "6px 0"
          }}>
            <span style={{
              background: msg.sender === "user" ? "#ff6600" : "#1a1a1a",
              padding: "8px 12px",
              borderRadius: "12px",
              display: "inline-block",
              maxWidth: "80%",
              color: "#fff"
            }}>
              {msg.text}
            </span>
          </div>
        ))}
        {isLoading && (
          <div style={{ textAlign: "center", fontSize: "12px", color: "#aaa" }}>
            Typing...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} style={{
        display: "flex",
        borderTop: "1px solid #222"
      }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            padding: "10px",
            outline: "none",
            backgroundColor: "#0a0a0a",
            color: "#fff"
          }}
          placeholder="Type here..."
        />
        <button type="submit" style={{
          backgroundColor: "#ff6600",
          border: "none",
          padding: "0 14px",
          cursor: "pointer",
          color: "#fff"
        }}>
          ➤
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
