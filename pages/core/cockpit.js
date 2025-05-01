import { useState } from "react";

export default function Cockpit() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState([]);

  const handleSend = () => {
    if (!input.trim()) return;
    setLog(prev => [...prev, { role: "user", text: input }]);
    setLog(prev => [...prev, { role: "overkore", text: `Overkore received: "${input}"` }]);
    setInput("");
  };

  return (
    <div style={{
      background: "#000",
      color: "#0ff",
      height: "100vh",
      padding: "2rem",
      fontFamily: "monospace"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🧠 Overkore Cockpit Interface</h1>

      <div style={{
        background: "#111",
        padding: "1rem",
        height: "60vh",
        overflowY: "auto",
        marginBottom: "1rem",
        border: "1px solid #333"
      }}>
        {log.map((entry, idx) => (
          <div key={idx} style={{
            color: entry.role === "user" ? "#fff" : "#0f0",
            marginBottom: "0.5rem"
          }}>
            <strong>{entry.role}:</strong> {entry.text}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type command..."
          style={{
            flex: 1,
            padding: "0.75rem",
            background: "#111",
            color: "#fff",
            border: "1px solid #444"
          }}
        />
        <button
          onClick={handleSend}
          style={{
            background: "#0f0",
            color: "#000",
            padding: "0.75rem 1rem",
            border: "none"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

