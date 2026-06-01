"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED = [
  "What is credit risk?",
  "How do interest rates affect the economy?",
  "What is algorithmic trading?",
  "Explain blockchain in simple terms",
  "What is a derivative in finance?",
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text?: string) {
    const userMessage = text || input;
    if (!userMessage.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong. Is the backend running?",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#030712",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 16px",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#34d399" }}>
          FinWise
        </h1>
        <p style={{ color: "#9ca3af", marginTop: "8px", fontSize: "0.9rem" }}>
          Ask anything about finance & fintech — explained simply.
        </p>
      </div>

      {/* Chat Window */}
      <div style={{
        width: "100%",
        maxWidth: "680px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        marginBottom: "24px",
        minHeight: "300px",
      }}>
        {messages.length === 0 && (
          <p style={{ textAlign: "center", color: "#4b5563", marginTop: "40px", fontSize: "0.85rem" }}>
            Start by asking a question or pick one below ↓
          </p>
        )}

        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
          }}>
            <div style={{
              maxWidth: "80%",
              borderRadius: "16px",
              padding: "12px 16px",
              fontSize: "0.9rem",
              lineHeight: "1.6",
              background: msg.role === "user" ? "#10b981" : "#1f2937",
              color: "white",
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div style={{
              background: "#1f2937",
              color: "#9ca3af",
              borderRadius: "16px",
              padding: "12px 16px",
              fontSize: "0.9rem",
            }}>
              FinWise is thinking...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length === 0 && (
        <div style={{
          width: "100%",
          maxWidth: "680px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "24px",
          justifyContent: "center",
        }}>
          {SUGGESTED.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              style={{
                background: "#1f2937",
                color: "#d1d5db",
                border: "1px solid #374151",
                borderRadius: "999px",
                padding: "8px 14px",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input Row */}
      <div style={{
        width: "100%",
        maxWidth: "680px",
        display: "flex",
        gap: "8px",
      }}>
        <input
          style={{
            flex: 1,
            background: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "0.9rem",
            color: "white",
            outline: "none",
          }}
          placeholder="e.g. What is quantitative easing?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          style={{
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "12px 20px",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            opacity: loading || !input.trim() ? 0.5 : 1,
          }}
        >
          Send
        </button>
      </div>
    </main>
  );
}