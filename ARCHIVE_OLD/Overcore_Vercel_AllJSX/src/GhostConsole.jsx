import React, { useState } from "react";

export default function GhostConsole() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setOutput(`Ghost received: "${input}"`);
    setInput("");
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Ghost Console</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <p>{output}</p>
    </div>
  );
}