export default function TestPage() {
  return <div style={{ background: '#000', color: '#0f0', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h1>✅ Overkore Route Verified</h1>
  </div>;
}

import { useState, useRef, useEffect } from "react";

export default function CommandCockpit() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        handleSubmit(voiceInput);
      };

      recognition.onerror = (event) => {
        console.error("Voice error:", event.error);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const handleSubmit = async (textOverride) => {
    const text = textOverride || input;
    if (!text.trim()) return;

    const newMessage = {
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    const transcript = [...messages, newMessage];
    setMessages(transcript);
    setInput("");

    const reply = {
      role: "overkore",
      content: `🧠 Overkore acknowledges: "${text}"`,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, reply]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-black via-zinc-900 to-black text-green-400 font-mono flex flex-col p-6">
      <header className="border-b border-green-700 pb-3 mb-4">
        <h1 className="text-4xl font-bold tracking-wide text-center text-lime-400 drop-shadow">OVERKORE // COMMAND INTERFACE</h1>
        <p className="text-center text-sm opacity-60">System Online — 49" Widescreen Mode Active</p>
      </header>

      <div className="flex flex-1 gap-6">
        <div className="flex-1 bg-black/70 p-4 rounded-xl overflow-y-auto space-y-3 border border-green-700 shadow-inner shadow-green-700/10">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-md ${
                msg.role === "user"
                  ? "bg-green-950 text-right"
                  : "bg-green-800/90 text-left"
              }`}
            >
              <div className="text-xs opacity-50 mb-1">
                {msg.role === "user" ? "You" : "Overkore"} — {new Date(msg.timestamp).toLocaleTimeString()}
              </div>
              <div className="text-base whitespace-pre-wrap leading-snug text-lime-200">{msg.content}</div>
            </div>
          ))}
        </div>

        <div className="w-80 bg-zinc-950 border border-green-700 rounded-xl p-4 space-y-6 shadow-md">
          <div>
            <h2 className="text-xl font-semibold text-lime-300">🎯 Mission Pulse</h2>
            <p className="text-sm text-green-300">No active mission set.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-lime-300">🧠 Voice Status</h2>
            <p className="text-sm">{listening ? "Listening... 🎤" : "Mic inactive"}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-lime-300">📂 Quick Links</h2>
            <ul className="text-sm list-disc pl-5 text-green-400 space-y-1">
              <li>/core/cockpit</li>
              <li>/core/test</li>
              <li>/glasses</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 p-4 bg-zinc-800 border border-green-700 rounded-xl text-white placeholder-green-300"
          placeholder="Enter Overkore command or speak..."
        />
        <button
          onClick={() => handleSubmit()}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold"
        >Send</button>
        <button
          onClick={toggleListening}
          className={`px-6 py-3 rounded-xl text-white font-semibold ${
            listening ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >🎤</button>
      </div>
    </div>
  );
}
