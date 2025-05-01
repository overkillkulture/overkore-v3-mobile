
import { useState } from "react";

export default function JasonOS() {
  const [log, setLog] = useState([]);
  const [input, setInput] = useState("");

  const handleLog = () => {
    if (!input) return;
    const entry = `${new Date().toLocaleTimeString()} — ${input}`;
    setLog((prev) => [...prev.slice(-19), entry]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex">
      <div className="w-48 bg-gray-900 p-4 border-r border-green-800">
        <h2 className="text-green-500 text-lg mb-4">JasonOS</h2>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-green-300 cursor-pointer">Home</li>
          <li className="hover:text-green-300 cursor-pointer">Logs</li>
          <li className="hover:text-green-300 cursor-pointer">Missions</li>
          <li className="hover:text-green-300 cursor-pointer">Settings</li>
        </ul>
      </div>
      <div className="flex-1 p-6">
        <div className="mb-4 p-3 bg-gray-800 border border-green-600 text-sm rounded">
          <span className="text-green-300">Status:</span> System Online | Voice: Offline | Link: Secured
        </div>
        <div className="mb-6">
          <h2 className="text-lg text-green-400 mb-1">Command Input</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Log your updates, ideas, or commands..."
            className="w-full h-24 p-2 bg-black border border-green-600 text-green-200 text-sm"
          />
          <button
            onClick={handleLog}
            className="mt-2 px-4 py-2 bg-green-700 hover:bg-green-500 text-sm"
          >
            Log It
          </button>
        </div>
        <div>
          <h2 className="text-lg text-green-400 mb-1">Command Feed</h2>
          <ul className="text-sm max-h-64 overflow-y-auto border border-green-700 p-2">
            {log.map((entry, idx) => (
              <li key={idx}>> {entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
