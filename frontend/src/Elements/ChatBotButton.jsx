// Elements/ChatBotButton.jsx
import React from "react";

function ChatBotButton({ onClick, isOpen }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#ff6600",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "22px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
      }}
    >
      {isOpen ? "×" : "💬"}
    </button>
  );
}

export default ChatBotButton;
